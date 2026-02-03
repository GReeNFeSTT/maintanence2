// Функция для автоматического применения сохраненного языка при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  // Проверяем, есть ли сохраненный язык в localStorage
  const savedLanguage = localStorage.getItem('preferredLanguage');
  
  // Если язык сохранен, применяем его
  if (savedLanguage) {
    // Импортируем модуль i18n и применяем язык
    import('./src/js/i18n.js').then(module => {
      module.applyTranslations(savedLanguage);
    });
    
    // Обновляем атрибут lang у html элемента
    document.documentElement.lang = savedLanguage;
  } else {
    // Если язык не сохранен, используем русский по умолчанию
    import('./src/js/i18n.js').then(module => {
      module.applyTranslations('ru');
    });
    document.documentElement.lang = 'ru';
  }
});

// Функция для переключения языка с сохранением в localStorage
function setLanguage(lang) {
  // Импортируем модуль i18n и применяем язык
  import('./src/js/i18n.js').then(module => {
    module.applyTranslations(lang);
  });
  
  // Сохраняем выбранный язык в localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // Обновляем атрибут lang у html элемента
  document.documentElement.lang = lang;
  
  // Обновляем URL без перезагрузки страницы для лучшего UX
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
}
