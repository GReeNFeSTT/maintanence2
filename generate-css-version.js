// Скрипт для генерации версии CSS
const fs = require('fs');
const path = require('path');

// Генерируем случайную версию
const version = Math.random().toString(36).substr(2, 9);

// Читаем файлы и заменяем версию
const files = ['basic.html', 'standard.html', 'premium.html'];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Заменяем параметр версии
    content = content.replace(
      /stile\.css\?v=[^"']*/g,
      `stile.css?v=${version}`
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file} with version ${version}`);
  }
});

console.log(`CSS version updated to: ${version}`);