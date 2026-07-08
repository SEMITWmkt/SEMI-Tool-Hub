#!/usr/bin/env node
/**
 * 批次更新已上線論壇頁面
 * -------------------------------------------------
 * 做兩件事，且只做這兩件事：
 * 1. 把每個論壇 HTML 裡的 <style>...</style> 區塊，換成產生器目前最新的版本
 * 2. 如果有提供地圖連結，把「地點：純文字」按鈕換成「可點擊的地圖連結」按鈕
 * 完全不碰論壇本身的內容（主題、講者、票價等），因為那些跟樣式是分開的。
 *
 * 使用方式：
 *   1. 把每個論壇目前的原始 HTML 存成獨立檔案，放進 forums-raw/ 資料夾
 *      檔名建議用有意義的名稱，例如：ai-packaging-zh.html、ai-packaging-en.html
 *   2. 如果該論壇需要加地圖連結，在 map-links.json 裡加一行對應
 *      （檔名要跟 forums-raw/ 裡的檔名完全一致）
 *   3. 如果某些論壇是合作論壇、這輪不想套用我們的新樣式，
 *      在 skip-forums.json 裡列出這些檔名（陣列格式），這些檔案會完全不被觸碰
 *   4. 執行：node batch-update-forums.js
 *   5. 更新後的檔案會出現在 forums-updated/，內容跟原檔名一樣，
 *      直接打開、全選複製、貼回 Drupal 對應論壇即可
 */

const fs = require('fs');
const path = require('path');

const GENERATOR_PATH = './tools/forum/index.html';
const FORUMS_DIR = './forums-raw';
const OUTPUT_DIR = './forums-updated';
const MAP_LINKS_FILE = './map-links.json';
const SKIP_LIST_FILE = './skip-forums.json'; // 合作論壇清單，列在這裡的檔案完全不會被處理

function loadSkipList() {
  if (!fs.existsSync(SKIP_LIST_FILE)) return [];
  return JSON.parse(fs.readFileSync(SKIP_LIST_FILE, 'utf8'));
}

function extractLatestStyle(generatorSrc) {
  const m = generatorSrc.match(/<style><!--[\s\S]*?--><\/style>/);
  if (!m) {
    throw new Error('在產生器裡找不到 <style> 區塊，請確認 GENERATOR_PATH 是否指向正確的 tools/forum/index.html');
  }
  return m[0];
}

function buildVenueAnchor(oldSpanHTML, mapUrl) {
  const inner = oldSpanHTML
    .replace(/^<span class="st26-anchor-btn st26-venue-btn-static">/, '')
    .replace(/<\/span>$/, '');
  return `<a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="st26-anchor-btn">${inner} <span class="st26-anchor-arr">↗</span></a>`;
}

function main() {
  if (!fs.existsSync(GENERATOR_PATH)) {
    console.error(`找不到產生器檔案：${GENERATOR_PATH}\n請確認這個腳本放在 SEMI-Tool-Hub repo 根目錄執行。`);
    process.exit(1);
  }
  if (!fs.existsSync(FORUMS_DIR)) {
    console.error(`找不到 ${FORUMS_DIR}/ 資料夾。\n請先建立這個資料夾，把每個論壇的原始 HTML 存成獨立檔案放進去。`);
    process.exit(1);
  }

  const generatorSrc = fs.readFileSync(GENERATOR_PATH, 'utf8');
  const latestStyle = extractLatestStyle(generatorSrc);

  let mapLinks = {};
  if (fs.existsSync(MAP_LINKS_FILE)) {
    mapLinks = JSON.parse(fs.readFileSync(MAP_LINKS_FILE, 'utf8'));
  }
  const skipList = loadSkipList();

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

  const allFiles = fs.readdirSync(FORUMS_DIR).filter(f => f.endsWith('.html'));
  if (allFiles.length === 0) {
    console.error(`${FORUMS_DIR}/ 裡沒有任何 .html 檔案，沒有東西可以處理。`);
    process.exit(1);
  }

  const skipped = allFiles.filter(f => skipList.includes(f));
  const files = allFiles.filter(f => !skipList.includes(f));

  const report = [];
  if (skipped.length > 0) {
    skipped.forEach(f => report.push(`⏭️  ${f}：在跳過清單中（合作論壇），完全未處理`));
  }
  const styleRegex = /<style><!--[\s\S]*?--><\/style>/;
  const venueRegex = /<span class="st26-anchor-btn st26-venue-btn-static">[\s\S]*?<\/span>/;

  for (const file of files) {
    const srcPath = path.join(FORUMS_DIR, file);
    let html = fs.readFileSync(srcPath, 'utf8');
    let statusParts = [];

    if (!styleRegex.test(html)) {
      statusParts.push('⚠️ 找不到 <style> 區塊，樣式未更新，請手動檢查');
    } else {
      html = html.replace(styleRegex, latestStyle);
      statusParts.push('✅ 樣式已更新');
    }

    if (mapLinks[file]) {
      const match = html.match(venueRegex);
      if (match) {
        html = html.replace(venueRegex, buildVenueAnchor(match[0], mapLinks[file]));
        statusParts.push('✅ 已加入地圖連結');
      } else {
        statusParts.push('⚠️ 有提供地圖連結，但找不到地點按鈕（可能已經是連結狀態），請手動檢查');
      }
    } else {
      statusParts.push('（未提供地圖連結，維持原狀）');
    }

    fs.writeFileSync(path.join(OUTPUT_DIR, file), html, 'utf8');
    report.push(`${file}：${statusParts.join('，')}`);
  }

  console.log(`\n處理完成：${allFiles.length} 個檔案中，更新 ${files.length} 個、跳過 ${skipped.length} 個。輸出到 ${OUTPUT_DIR}/\n`);
  report.forEach(line => console.log(line));
  console.log(`\n下一步：打開 ${OUTPUT_DIR}/ 裡的每個檔案，全選複製，貼回 Drupal 對應的論壇頁面。\n跳過清單中的檔案不會出現在 ${OUTPUT_DIR}/ 裡，維持原樣不動。`);
}

main();
