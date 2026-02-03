import { CONFIG } from "./config.js";

// Lazy load translations to improve performance
const translations = {
  ru: null,
  es: null, 
  en: null
};

// Translation data loaded on demand
const translationData = {
  ru: {
    // META / TITLE
    title: "Управление и обслуживание недвижимости",

    // BRAND & NAV
    brand_tagline: "Facility Maintenance",
    brand_name: "Premium Technical Services",
    nav_home: "Главная",
    nav_services: "Услуги",
    nav_benefits: "Преимущества",
    nav_packages: "Пакеты",
    nav_contact: "Контакты",
    nav_cta: "Оставить заявку",

    // HERO
    hero_label: "Property care & management",
    headline: "Управление и техническое\nобслуживание недвижимости",
    subheadline:
      "Берём на себя заботу о вашей недвижимости в Уругвае: квартиры, апартаменты, дома — для частных владельцев, инвесторов и агентств.",
    cta_primary: "Запросить предложение",
    cta_secondary: "Посмотреть пакеты услуг",
    hero_point_1: "Контроль состояния объекта без вашего присутствия",
    hero_point_2: "Работаем по договору и понятным регламентам",
    hero_point_3: "Опыт более 10 лет",

    // SERVICES
    services_label: "Основные направления",
    services_title: "Комплексное обслуживание инженерных систем",
    services_subtitle:
      "Мы выстраиваем системный подход к эксплуатации жилой недвижимости, чтобы вы могли сосредоточиться на инвестициях, а не на технических вопросах.",
    service_1_title: "Обслуживание инженерных сетей",
    service_1_desc:
      "Электрика, вентиляция, кондиционирование, водоснабжение, канализация — плановые осмотры, диагностика и оперативный ремонт для квартир и домов.",
    service_2_title: "Организация сервисных работ",
    service_2_desc:
      "Координация подрядчиков, контроль мелких ремонтных работ и сроков их выполнения для жилой недвижимости.",
    service_3_title: "Регулярные осмотры и отчётность",
    service_3_desc:
      "Плановые визиты на объект, фото‑ и видеоотчёты, контроль подрядчиков и состояния инженерных систем в квартирах и домах.",

    // BENEFITS
    benefits_label: "Почему выбирают нас",
    benefits_title: "Понятные условия и прогнозируемый результат",
    benefits_subtitle:
      "Мы строим долгосрочные отношения с заказчиками и отвечаем за качество работ своим именем.",
    benefit_1_label: "Опыт",
    benefit_1_value: "10+ лет",
    benefit_1_desc: "лет работы в сфере эксплуатации жилой недвижимости.",
    benefit_2_label: "Сроки",
    benefit_2_value: "< 60 мин",
    benefit_2_desc:
      "среднее время выезда аварийной бригады в часы работы.",
    benefit_3_label: "Прозрачность",
    benefit_3_value: "Отчётность",
    benefit_3_desc:
      "детальные отчёты по заявкам, фотофиксация состояния квартир и домов, план-график работ.",

    // PACKAGES
    packages_title: "Пакеты обслуживания",
    packages_subtitle:
      "Выберите готовый пакет под вашу квартиру, апартаменты или дом, либо запросите индивидуальное решение.",

    basic_label: "Старт",
    basic_tag: "для небольших помещений",
    basic_title: "Basic",
    basic_desc:
      "Базовое обслуживание и техническая поддержка для квартир, апартаментов и небольших домов.",
    basic_point_1: "Плановые обходы 1–2 раза в месяц",
    basic_point_2: "Реакция на заявки в рабочие часы",
    basic_point_3: "Базовая отчётность по выполненным работам",
    basic_point_4:
      "Базовый контроль состояния инженерных систем в квартире/доме (электрика, вентиляция, вода)",

    basic_price: "от 90 USD",

    standard_label: "Баланс",
    standard_tag: "для спокойствия и безопасности",
    standard_title: "Standard",
    standard_desc:
      "Полное сопровождение инженерных систем в квартирах и домах, оперативная реакция и приоритизация заявок.",
    standard_point_1: "Регулярные обходы по индивидуальному графику",
    standard_point_2:
      "Сокращённое время реакции на аварийные заявки",
    standard_point_3:
      "Расширенная отчётность и рекомендации по модернизации",
    standard_point_4:
      "Планирование и контроль сезонных работ (кондиционирование, отопление и др.) для квартир и домов",
    standard_point_5:
      "Планирование и контроль сезонных работ (кондиционирование, отопление и др.)",

    standard_price: "от 120 USD",

    premium_label: "Максимум",
    premium_tag: "для критичных объектов",
    premium_title: "Premium",
    premium_desc:
      "Приоритетное обслуживание квартир и домов, индивидуальный менеджер и максимальная скорость реакции.",
    premium_point_1: "Выделенная команда инженеров",
    premium_point_2: "Минимальное время реакции 24/7",
    premium_point_3: "Индивидуальные регламенты под объект",
    premium_point_4:
      "Персональный менеджер и регулярные стратегические сессии по объекту",
    premium_point_5: "Приоритетное обслуживание всех систем",
    premium_point_6: "Консьерж-сервис и сопровождение при визитах",

    premium_price: "от 180 USD",

    // CONTACT
    contact_label: "Свяжитесь с нами",
    contact_title: "Обсудим обслуживание ваших помещений",
    contact_subtitle:
      "Оставьте краткую информацию об объекте, и мы предложим варианты сотрудничества в удобном для вас формате.",
    contact_point_1: "Работаем по всей территории Уругвая",
    contact_point_2:
      "Поддерживаем русскоязычных, испаноязычных и англоязычных клиентов",
    contact_point_3:
      "Возможны разовые выезды и долгосрочные контракты на обслуживание квартир и домов",
    contact_email: "Написать на email",
    contact_whatsapp: "Написать в WhatsApp",
    contact_telegram: "Написать в Telegram",
    contact_form_title: "Краткая заявка",
    contact_form_name_label: "Имя и компания",
    contact_form_email_label: "Email или телефон",
    contact_form_object_label: "Тип объекта",
    contact_form_object_option_1: "Квартира / апартаменты",
    contact_form_object_option_2: "Дом / вилла",
    contact_form_object_option_3: "Несколько объектов",
    contact_form_object_option_4: "Другое",
    contact_form_name_placeholder: "Ваше имя / компания",
    contact_form_email_placeholder: "+598 ... / email",
    contact_form_message_placeholder:
      "Например: требуется регулярное обслуживание инженерных систем и оперативная реакция на заявки.",
    contact_form_message_label: "Кратко о задаче",
    contact_form_button: "Отправить запрос",
    contact_form_sending: "Отправляем…",
    contact_form_success:
      "Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.",
    contact_form_error:
      "Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.",
    contact_form_hint:
      "Нажимая кнопку, вы соглашаетесь на обработку переданных контактных данных для связи с вами по вопросу обслуживания вашей недвижимости.",

    // FOOTER
    footer_rights: "Все права защищены.",
    footer_note:
      "Техническое обслуживание и эксплуатация жилой недвижимости. Доступна поддержка на русском, испанском и английском языках.",

    // PACKAGE PAGES
    back_home: "На главную",
    package_label_basic: "Пакет Basic",
    package_label_standard: "Пакет Standard",
    package_label_premium: "Пакет Premium",
    whats_included: "Что входит",
    suitable_for: "Для каких объектов",
    cta_contact: "Оставить заявку",
    basic_suitable_1: "— Квартиры и апартаменты",
    basic_suitable_2: "— Небольшие дома и виллы",
    basic_suitable_3: "— Арендные объекты для инвесторов",
    basic_price_note:
      "Итоговая цена зависит от площади квартиры/дома, набора инженерных систем и количества объектов.",
    standard_suitable_1: "— Квартиры и апартаменты",
    standard_suitable_2: "— Дома и виллы",
    standard_suitable_3: "— Несколько объектов для инвесторов",
    standard_suitable_4: "— Коммерческие помещения (офисы, магазины)",
    standard_price_note:
      "Рассчитывается исходя из площади квартиры/дома, количества систем, графика работ и уровня требуемого SLA.",
    premium_suitable_1: "— Квартиры и апартаменты",
    premium_suitable_2: "— Дома и виллы",
    premium_suitable_3: "— Несколько объектов для инвесторов",
    premium_suitable_4: "— Коммерческие помещения (офисы, магазины)",
    premium_price_note:
      "Подбирается индивидуально с учётом SLA, критичности систем и количества квартир/домов.",
  },
  es: {
    title: "Gestión y mantenimiento de inmuebles",

    brand_tagline: "Facility Maintenance",
    brand_name: "Premium Technical Services",
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_benefits: "Ventajas",
    nav_packages: "Paquetes",
    nav_contact: "Contacto",
    nav_cta: "Enviar consulta",

    hero_label: "Property care & management",
    headline: "Gestión y mantenimiento\nde propiedades",
    subheadline:
      "Nos encargamos del estado de sus inmuebles en Uruguay: apartamentos, casas y villas — para propietarios privados, inversores y agencias.",
    cta_primary: "Solicitar propuesta",
    cta_secondary: "Ver paquetes de servicio",
    hero_point_1:
      "Control del estado del inmueble sin su presencia",
    hero_point_2: "Trabajo según contrato y reglas claras",
    hero_point_3: "Más de 10 años de experiencia",

    services_label: "Áreas principales",
    services_title: "Gestión y mantenimiento de inmuebles",
    services_subtitle:
      "Organizamos el cuidado de sus propiedades para que pueda vivir en otro país, invertir o trabajar con tranquilidad.",
    service_1_title: "Mantenimiento de instalaciones",
    service_1_desc:
      "Electricidad, ventilación, aire acondicionado, agua y saneamiento: inspecciones, diagnóstico y reparaciones para apartamentos y casas.",
    service_2_title: "Coordinación de servicios",
    service_2_desc:
      "Coordinación de contratistas, control de trabajos de reparación y plazos para inmuebles residenciales.",
    service_3_title: "Inspecciones regulares y reportes",
    service_3_desc:
      "Visitas planificadas al sitio, reportes con fotos y vídeo, control de contratistas e instalaciones técnicas en apartamentos y casas.",

    benefits_label: "Por qué nos eligen",
    benefits_title:
      "Condiciones claras y resultados previsibles",
    benefits_subtitle:
      "Construimos relaciones a largo plazo y respondemos por la calidad de nuestro trabajo.",
    benefit_1_label: "Experiencia",
    benefit_1_value: "10+ años",
    benefit_1_desc:
      "años en operación y mantenimiento de inmuebles residenciales.",
    benefit_2_label: "Tiempos",
    benefit_2_value: "< 60 min",
    benefit_2_desc:
      "tiempo promedio de respuesta a solicitudes en horario laboral.",
    benefit_3_label: "Transparencia",
    benefit_3_value: "Reportes",
    benefit_3_desc:
      "reportes detallados, fotos y plan de trabajo para apartamentos y casas.",

    packages_title: "Paquetes de mantenimiento",
    packages_subtitle:
      "Elija un paquete listo para su apartamento, casa o villa, o pida una solución a medida.",

    basic_label: "Inicio",
    basic_tag: "para inmuebles pequeños",
    basic_title: "Básico",
    basic_desc:
      "Soporte básico y mantenimiento para apartamentos, casas y villas pequeñas.",
    basic_point_1:
      "Rondas planificadas 1–2 veces al mes",
    basic_point_2: "Respuesta en horario laboral",
    basic_point_3:
      "Reporte básico de trabajos realizados",
    basic_point_4:
      "Control básico del estado de los sistemas técnicos en apartamento/casa (electricidad, ventilación, agua)",

    basic_price: "desde 90 USD",

    standard_label: "Equilibrio",
    standard_tag: "para tranquilidad y seguridad",
    standard_title: "Estándar",
    standard_desc:
      "Soporte completo de sistemas técnicos en apartamentos y casas, respuesta rápida y priorización de solicitudes.",
    standard_point_1:
      "Rondas regulares según calendario individual",
    standard_point_2:
      "Tiempo de respuesta reducido para emergencias",
    standard_point_3:
      "Reportes amplios con alto nivel de detalle",
    standard_point_4:
      "Planificación y control de trabajos estacionales (aire acondicionado, calefacción, etc.) para apartamentos y casas",
    standard_point_5:
      "Planificación y control de trabajos estacionales (aire acondicionado, calefacción, etc.)",

    standard_price: "desde 120 USD",

    premium_label: "Máximo",
    premium_tag: "para sitios críticos",
    premium_title: "Premium",
    premium_desc:
      "Soporte prioritario para apartamentos y casas, gestor dedicado y máxima velocidad de reacción.",
    premium_point_1: "Equipo de técnicos dedicado",
    premium_point_2: "Tiempo mínimo de respuesta 24/7",
    premium_point_3:
      "Reglamentos individuales por apartamento/casa",
    premium_point_4:
      "Gestor personal y sesiones estratégicas regulares sobre el inmueble",
    premium_point_5: "Servicio prioritario de todas las instalaciones",
    premium_point_6: "Servicio de conserjería y acompañamiento en visitas",

    premium_price: "desde 180 USD",

    contact_label: "Contacto",
    contact_title:
      "Hablemos de la gestión de sus inmuebles",
    contact_subtitle:
      "Envíe una breve información sobre la propiedad y las tareas, y le propondremos opciones de colaboración.",
    contact_point_1: "Trabajamos en todo Uruguay",
    contact_point_2:
      "Atendemos en ruso, español e inglés",
    contact_point_3:
      "Trabajos puntuales y contratos de largo plazo para apartamentos y casas",
    contact_email: "Escribir por email",
    contact_whatsapp: "Escribir por WhatsApp",
    contact_telegram: "Escribir en Telegram",
    contact_form_title: "Solicitud breve",
    contact_form_name_label: "Nombre y empresa",
    contact_form_email_label: "Email o teléfono",
    contact_form_object_label: "Tipo de inmueble",
    contact_form_object_option_1: "Apartamento / casa",
    contact_form_object_option_2: "Casa / villa",
    contact_form_object_option_3: "Varios inmuebles",
    contact_form_object_option_4: "Otro",
    contact_form_name_placeholder: "Su nombre / empresa",
    contact_form_email_placeholder: "+598 ... / email",
    contact_form_message_placeholder:
      "Por ejemplo: necesitamos mantenimiento regular de sistemas técnicos y respuesta rápida a solicitudes.",
    contact_form_message_label: "Breve descripción",
    contact_form_button: "Enviar solicitud",
    contact_form_sending: "Enviando…",
    contact_form_success:
      "¡Gracias! Su solicitud ha sido enviada. Nos pondremos en contacto con usted en breve.",
    contact_form_error:
      "Se produjo un error al enviar. Intente más tarde o contáctenos directamente.",
    contact_form_hint:
      "Al enviar el formulario acepta el uso de sus datos de contacto para comunicarnos con usted.",

    footer_rights: "Todos los derechos reservados.",
    footer_note:
      "Gestión y mantenimiento técnico de inmuebles residenciales. Soporte disponible en ruso, español e inglés.",

    back_home: "Volver al inicio",
    package_label_basic: "Paquete Básico",
    package_label_standard: "Paquete Estándar",
    package_label_premium: "Paquete Premium",
    whats_included: "Qué incluye",
    suitable_for: "Para qué inmuebles",
    cta_contact: "Enviar solicitud",
    basic_suitable_1:
      "— Apartamentos y casas",
    basic_suitable_2: "— Casas y villas pequeñas",
    basic_suitable_3: "— Inmuebles de alquiler para inversores",
    basic_price_note:
      "El precio final depende del área del apartamento/casa, los sistemas técnicos y la cantidad de inmuebles.",
    standard_suitable_1:
      "— Apartamentos y casas",
    standard_suitable_2:
      "— Casas y villas",
    standard_suitable_3:
      "— Varios inmuebles para inversores",
    standard_suitable_4:
      "— Locales comerciales (oficinas, tiendas)",
    standard_price_note:
      "Se calcula según el área del apartamento/casa, cantidad de sistemas, calendario de trabajos y nivel de SLA requerido.",
    premium_suitable_1:
      "— Apartamentos y casas",
    premium_suitable_2:
      "— Casas y villas",
    premium_suitable_3:
      "— Varios inmuebles para inversores",
    premium_suitable_4: "— Locales comerciales (oficinas, tiendas)",
    premium_price_note:
      "Se selecciona individualmente según SLA, criticidad de sistemas y cantidad de apartamentos/casas.",
  },
  en: {
    title: "Property management & maintenance",

    brand_tagline: "Facility Maintenance",
    brand_name: "Premium Technical Services",
    nav_home: "Home",
    nav_services: "Services",
    nav_benefits: "Benefits",
    nav_packages: "Packages",
    nav_contact: "Contact",
    nav_cta: "Request a quote",

    hero_label: "Property care & management",
    headline: "Property management\nand technical maintenance",
    subheadline:
      "We look after your properties in Uruguay – apartments, homes and villas – for private owners, investors and agencies.",
    cta_primary: "Request proposal",
    cta_secondary: "View service packages",
    hero_point_1:
      "Condition monitoring without you being on site",
    hero_point_2:
      "Clear contracts and documented procedures",
    hero_point_3: "10+ years of experience",

    services_label: "Core services",
    services_title: "Property management & maintenance",
    services_subtitle:
      "We set up a structured approach to caring for your assets so you can live abroad, invest or run your business with peace of mind.",
    service_1_title: "Engineering systems maintenance",
    service_1_desc:
      "Electrical, HVAC, water supply and sewerage – inspections, diagnostics and repairs for apartments and homes.",
    service_2_title: "Service coordination",
    service_2_desc:
      "Coordinating contractors, minor repair work and keeping timelines on track for residential properties.",
    service_3_title: "Regular inspections & reporting",
    service_3_desc:
      "Scheduled visits, photo/video reports and coordination of contractors and building systems in apartments and homes.",

    benefits_label: "Why clients choose us",
    benefits_title: "Clear conditions and predictable results",
    benefits_subtitle:
      "We aim for long‑term partnerships and stand behind our work.",
    benefit_1_label: "Experience",
    benefit_1_value: "10+ years",
    benefit_1_desc:
      "years in residential property operation and maintenance.",
    benefit_2_label: "Response",
    benefit_2_value: "< 60 min",
    benefit_2_desc:
      "average response time to requests during business hours.",
    benefit_3_label: "Transparency",
    benefit_3_value: "Reporting",
    benefit_3_desc:
      "detailed ticket reports, photos and work schedules for apartments and homes.",

    packages_title: "Service packages",
    packages_subtitle:
      "Choose a ready package for your apartment, home or villa, or request a custom solution.",

    basic_label: "Starter",
    basic_tag: "for small properties",
    basic_title: "Basic",
    basic_desc:
      "Essential support and maintenance for apartments, homes and small villas.",
    basic_point_1:
      "Scheduled walkthroughs 1–2 times per month",
    basic_point_2: "Response during business hours",
    basic_point_3:
      "Basic reporting for completed work",
    basic_point_4:
      "Basic monitoring of engineering systems in apartment/home (electrical, HVAC, water)",

    basic_price: "from 90 USD",

    standard_label: "Balanced",
    standard_tag: "for peace and security",
    standard_title: "Standard",
    standard_desc:
      "Full support of technical systems in apartments and homes, quick response and ticket prioritization.",
    standard_point_1:
      "Regular walkthroughs with a custom schedule",
    standard_point_2:
      "Reduced response time for emergencies",
    standard_point_3:
      "Extended reporting and modernization advice",
    standard_point_4:
      "Planning and control of seasonal works (air conditioning, heating, etc.) for apartments and homes",
    standard_point_5:
      "Planning and control of seasonal works (air conditioning, heating, etc.)",

    standard_price: "from 120 USD",

    premium_label: "Maximum",
    premium_tag: "for critical sites",
    premium_title: "Premium",
    premium_desc:
      "Priority support for apartments and homes, dedicated manager and fastest response time.",
    premium_point_1: "Dedicated team of engineers",
    premium_point_2: "Minimal 24/7 response time",
    premium_point_3:
      "Custom regulations per apartment/home",
    premium_point_4:
      "Personal manager and regular strategic sessions on the property",
    premium_point_5: "Priority service for all systems",
    premium_point_6: "Concierge service and visit accompaniment",

    premium_price: "from 180 USD",

    contact_label: "Contact us",
    contact_title:
      "Let's discuss managing your property",
    contact_subtitle:
      "Share a short description of the property and your needs and we'll suggest collaboration options.",
    contact_point_1: "We operate across Uruguay",
    contact_point_2:
      "Support available in Russian, Spanish and English",
    contact_point_3:
      "Single call‑outs and long‑term contracts for apartments and homes",
    contact_email: "Send email",
    contact_whatsapp: "Message on WhatsApp",
    contact_telegram: "Message on Telegram",
    contact_form_title: "Quick request",
    contact_form_name_label: "Name & company",
    contact_form_email_label: "Email or phone",
    contact_form_object_label: "Type of property",
    contact_form_object_option_1: "Apartment / home",
    contact_form_object_option_2: "Home / villa",
    contact_form_object_option_3: "Multiple properties",
    contact_form_object_option_4: "Other",
    contact_form_name_placeholder: "Your name / company",
    contact_form_email_placeholder: "+598 ... / email",
    contact_form_message_placeholder:
      "For example: we need regular maintenance of technical systems and quick response to requests.",
    contact_form_message_label: "Short description",
    contact_form_button: "Send request",
    contact_form_sending: "Sending…",
    contact_form_success:
      "Thank you! Your request has been sent. We will contact you shortly.",
    contact_form_error:
      "An error occurred while sending. Please try again later or contact us directly.",
    contact_form_hint:
      "By submitting you agree that we may use your contact details to get in touch about cooperation.",

    footer_rights: "All rights reserved.",
    footer_note:
      "Management and technical maintenance of residential properties. Support available in Russian, Spanish and English.",

    back_home: "Back to home",
    package_label_basic: "Basic Package",
    package_label_standard: "Standard Package",
    package_label_premium: "Premium Package",
    whats_included: "What's included",
    suitable_for: "Suitable for",
    cta_contact: "Contact us",
    basic_suitable_1:
      "— Apartments and homes",
    basic_suitable_2:
      "— Small homes and villas",
    basic_suitable_3: "— Rental properties for investors",
    basic_price_note:
      "Final price depends on area of apartment/home, technical systems and number of properties.",
    standard_suitable_1:
      "— Apartments and homes",
    standard_suitable_2:
      "— Homes and villas",
    standard_suitable_3:
      "— Multiple properties for investors",
    standard_suitable_4: "— Commercial spaces (offices, shops)",
    standard_price_note:
      "Calculated based on area of apartment/home, number of systems, work schedule and required SLA level.",
    premium_suitable_1:
      "— Apartments and homes",
    premium_suitable_2:
      "— Homes and villas",
    premium_suitable_3:
      "— Multiple properties for investors",
    premium_suitable_4: "— Commercial spaces (offices, shops)",
    premium_price_note:
      "Selected individually based on SLA, system criticality and number of apartments/homes.",
  },
};

// Cache for loaded translations
const translationCache = new Map();

export function applyTranslations(lang) {
  // Use cached translation if available
  if (translationCache.has(lang)) {
    const dict = translationCache.get(lang);
    return applyTranslationToDOM(dict);
  }

  // Load translation data on demand
  const dict = translationData[lang];
  if (!dict) {
    return;
  }

  // Cache the translation
  translationCache.set(lang, dict);
  
  // Apply translation
  applyTranslationToDOM(dict);
}

function applyTranslationToDOM(dict) {
  // Use requestAnimationFrame for better performance
  requestAnimationFrame(() => {
    // Update text content
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (dict[key]) {
        element.textContent = dict[key];
      }
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        element.placeholder = dict[key];
      }
    });

    // Update title
    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      const key = titleEl.getAttribute("data-i18n");
      if (dict[key]) {
        titleEl.textContent = dict[key];
      }
    }

    // Update language attribute
    const htmlEl = document.documentElement;
    if (htmlEl) {
      htmlEl.lang = lang;
    }
  });
}

export function detectInitialLanguage() {
  const stored = window.localStorage.getItem("preferredLanguage");
  if (stored && CONFIG.supportedLangs.includes(stored)) {
    return stored;
  }

  const navLang = navigator.language || navigator.userLanguage;
  if (navLang) {
    const short = navLang.slice(0, 2).toLowerCase();
    if (CONFIG.supportedLangs.includes(short)) {
      return short;
    }
  }

  return CONFIG.defaultLang;
}
