const fs = require('fs');
const path = require('path');

// 需要的所有图片名（根据前面映射和代码需求整理）
const requiredImages = [
  'hero-bg.jpg',
  'about-team.jpg',
  'learn-more-team.jpg',
  'project-1.jpg',
  'project-2.jpg',
  'project-3.jpg',
  'project-4.jpg',
  'project-5.jpg',
  'project-6.jpg',
  'project-7.jpg',
  'project-8.jpg',
  'project-9.jpg',
  'project-1-hero.jpg',
  'project-1-gallery-1.jpg',
  'project-1-gallery-2.jpg',
  'project-1-gallery-3.jpg',
  'project-1-gallery-4.jpg',
  'project-1-prefab-1.jpg',
  'project-1-prefab-2.jpg',
  'project-1-prefab-3.jpg',
  'project-1-prefab-4.jpg',
  'project-1-prefab-5.jpg',
  'project-1-prefab-6.jpg',
  'project-2-hero.jpg',
  'project-2-gallery-1.jpg',
  'project-2-gallery-2.jpg',
  'project-2-gallery-3.jpg',
  'project-2-gallery-4.jpg',
  'project-2-prefab-1.jpg',
  'project-2-prefab-2.jpg',
  'project-2-prefab-3.jpg',
  'project-2-prefab-4.jpg',
  'project-2-prefab-5.jpg',
  'project-2-prefab-6.jpg',
  'project-3-hero.jpg',
  'project-3-gallery-1.jpg',
  'project-3-gallery-2.jpg',
  'project-3-gallery-3.jpg',
  'project-3-gallery-4.jpg',
  'project-3-prefab-1.jpg',
  'project-3-prefab-2.jpg',
  'project-3-prefab-3.jpg',
  'project-3-prefab-4.jpg',
  'project-3-prefab-5.jpg',
  'project-3-prefab-6.jpg',
  'project-4-hero.jpg',
  'project-4-gallery-1.jpg',
  'project-4-gallery-2.jpg',
  'project-4-gallery-3.jpg',
  'project-4-gallery-4.jpg',
  'project-4-prefab-1.jpg',
  'project-4-prefab-2.jpg',
  'project-4-prefab-3.jpg',
  'project-4-prefab-4.jpg',
  'project-4-prefab-5.jpg',
  'project-4-prefab-6.jpg',
  'project-5-hero.jpg',
  'project-5-gallery-1.jpg',
  'project-5-gallery-2.jpg',
  'project-5-gallery-3.jpg',
  'project-5-gallery-4.jpg',
  'project-5-prefab-1.jpg',
  'project-5-prefab-2.jpg',
  'project-5-prefab-3.jpg',
  'project-5-prefab-4.jpg',
  'project-5-prefab-5.jpg',
  'project-5-prefab-6.jpg',
  'project-6-hero.jpg',
  'project-6-gallery-1.jpg',
  'project-6-gallery-2.jpg',
  'project-6-gallery-3.jpg',
  'project-6-gallery-4.jpg',
  'project-6-prefab-1.jpg',
  'project-6-prefab-2.jpg',
  'project-6-prefab-3.jpg',
  'project-6-prefab-4.jpg',
  'project-6-prefab-5.jpg',
  'project-6-prefab-6.jpg',
];

const imagesDir = path.join(__dirname, 'public', 'images');
const existingFiles = fs.readdirSync(imagesDir);

// 选择一个现有图片作为默认替换图片
const fallbackImage = existingFiles.find(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));
if (!fallbackImage) {
  console.error('No fallback image found in images directory!');
  process.exit(1);
}

let createdCount = 0;
for (const img of requiredImages) {
  const imgPath = path.join(imagesDir, img);
  if (!fs.existsSync(imgPath)) {
    // 复制 fallbackImage
    fs.copyFileSync(path.join(imagesDir, fallbackImage), imgPath);
    console.log(`Created missing image: ${img} (copied from ${fallbackImage})`);
    createdCount++;
  }
}
console.log(`\nAll missing images have been replaced. ${createdCount} files created.`); 