#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const libDir = path.join(__dirname, '..', 'assets', 'lib');
const swupLibDir = path.join(libDir, 'swup');

// 清除 swup 目標目錄
if (fs.existsSync(swupLibDir)) {
  fs.rmSync(swupLibDir, { recursive: true, force: true });
}
fs.mkdirSync(swupLibDir, { recursive: true });

const swupSourceDir = path.join(__dirname, '..', 'node_modules', 'swup', 'dist');
const swupTargetPath = path.join(swupLibDir, 'swup.js');

try {
  const swupUmdPath = path.join(swupSourceDir, 'Swup.umd.js');
  if (fs.existsSync(swupUmdPath)) {
    fs.copyFileSync(swupUmdPath, swupTargetPath);
    console.log('✅ Swup UMD bundle copied to assets/lib/swup/swup.js');
  } else {
    console.error('❌ Swup.umd.js not found in node_modules');
    process.exit(1);
  }

  // 複製 TypeScript 定義檔案（排除 .map 檔案）
  const typesSourceDir = path.join(swupSourceDir, 'types');
  const typesTargetDir = path.join(swupLibDir, 'types');

  if (fs.existsSync(typesSourceDir)) {
    function copyDir(src, dest) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }

      const entries = fs.readdirSync(src, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.name.endsWith('.map')) continue;

        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }

    copyDir(typesSourceDir, typesTargetDir);
    console.log('✅ Swup TypeScript definitions copied to assets/lib/swup/types/');
  }
} catch (error) {
  console.error('❌ Error copying swup files:', error.message);
  process.exit(1);
}

console.log('🎉 Post-install script completed successfully!');