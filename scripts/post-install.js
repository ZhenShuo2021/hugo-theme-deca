#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const libDir = path.join(__dirname, "..", "assets", "lib");
const swupLibDir = path.join(libDir, "swup");

if (fs.existsSync(swupLibDir)) {
  fs.rmSync(swupLibDir, { recursive: true, force: true });
}
fs.mkdirSync(swupLibDir, { recursive: true });

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.endsWith(".map")) continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  // Swup
  const swupUmdPath = path.join(__dirname, "..", "node_modules", "swup", "dist", "Swup.umd.js");
  fs.copyFileSync(swupUmdPath, path.join(swupLibDir, "swup.js"));
  console.log("✅ Swup copied");

  // Swup types
  const typesSourceDir = path.join(__dirname, "..", "node_modules", "swup", "dist", "types");
  if (fs.existsSync(typesSourceDir)) {
    copyDir(typesSourceDir, path.join(swupLibDir, "types"));
    console.log("✅ Swup types copied");
  }

  // Preload plugin
  const preloadSourceDir = path.join(__dirname, "..", "node_modules", "@swup", "preload-plugin", "dist");
  copyDir(preloadSourceDir, path.join(swupLibDir, "preload-plugin"));
  console.log("✅ Preload plugin copied");
} catch (error) {
  console.error("❌ Error:", error.message);
  process.exit(1);
}
