import type {
  GalleryItem,
  NavItem,
  ReviewItem,
  ServiceItem,
  SpaceGalleryItem,
  TariffItem,
} from "@/shared/types";

export const BRAND = {
  name: "АРКА 123",
  slogan: "Встречаемся напротив Библиотеки.",
  address: "ул. Мстиславца, д. 10, Минск",
  area: 123,
  phone: "+375 (29) 123-45-67",
  email: "hello@arka123.by",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { href: "#about", label: "О нас" },
  { href: "#space", label: "Помещение" },
  { href: "#gallery", label: "Галерея" },
  { href: "#services", label: "Услуги" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#location", label: "Локация" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "masterclass",
    title: "Мастер-классы",
    description:
      "Зона для преподавателя, проектор и гибкая рассадка под практику и демонстрации.",
    priceFrom: 90,
  },
  {
    id: "seminar",
    title: "Семинары и лекции",
    description:
      "Просторный зал с высотой до 4,5 м, естественный свет из арочных окон 4×3,5 м.",
    priceFrom: 110,
  },
  {
    id: "b2b",
    title: "B2B-встречи",
    description:
      "Закрытые переговоры и стратегические сессии с видом на Национальную библиотеку.",
    priceFrom: 130,
  },
  {
    id: "photo",
    title: "Съёмки и презентации",
    description:
      "Индустриальный интерьер, графитовые колонны и панорамный свет для контента бренда.",
    priceFrom: 150,
  },
];

export const TARIFFS: TariffItem[] = [
  {
    id: "half",
    name: "Полдня",
    hours: "4 часа",
    price: 280,
    features: [
      "Зал 123 м²",
      "Проектор и экран",
      "Wi‑Fi и климат",
      "Базовая рассадка",
    ],
  },
  {
    id: "day",
    name: "День",
    hours: "8 часов",
    price: 480,
    highlighted: true,
    features: [
      "Всё из тарифа «Полдня»",
      "Помощь с зонированием",
      "Чайная станция",
      "Приоритет бронирования",
    ],
  },
  {
    id: "event",
    name: "Ивент",
    hours: "до 12 часов",
    price: 690,
    features: [
      "Расширенный тайминг",
      "Кастомная рассадка",
      "Технический куратор",
      "Доступ к зоне встречи гостей",
    ],
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "1",
    name: "Анна К.",
    role: "Организатор мастер-классов",
    text: "Свет из арочных окон делает любую демонстрацию живой. Гости сразу замечают вид на библиотеку — это сильный вау-эффект.",
    rating: 5,
  },
  {
    id: "2",
    name: "Дмитрий С.",
    role: "Product Lead",
    text: "Брали зал под стратегию команды. Высота потолков и акустика позволяют говорить без микрофона даже при полной посадке.",
    rating: 5,
  },
  {
    id: "3",
    name: "Елена М.",
    role: "Фотограф",
    text: "Графитовые колонны и паркет «ёлочкой» — готовый фон. Минимум ретуши, максимум атмосферы.",
    rating: 5,
  },
];

export const SPACE_GALLERY: SpaceGalleryItem[] = [
  { mode: "empty", src: "/images/gallery/1.png", alt: "Пустой зал — общий вид" },
  { mode: "empty", src: "/images/gallery/2.png", alt: "Пустой зал — колонны и высота" },
  { mode: "empty", src: "/images/gallery/5.png", alt: "Арочные окна без мебели" },
  { mode: "empty", src: "/images/gallery/3.png", alt: "Чистый объём под событие" },
  { mode: "empty", src: "/images/gallery/7.png", alt: "Вид на Библиотеку из арки" },
  { mode: "empty", src: "/images/gallery/8.png", alt: "Арочное окно крупно" },
  { mode: "empty", src: "/images/gallery/12.png", alt: "Стеклянные перегородки" },
  { mode: "filled", src: "/images/gallery/filled-01.jpg", alt: "Рабочие места у колонн" },
  { mode: "filled", src: "/images/gallery/filled-02.jpg", alt: "Зона отдыха и столы" },
  { mode: "filled", src: "/images/gallery/filled-03.jpg", alt: "Зал с техникой у окон" },
  { mode: "filled", src: "/images/gallery/filled-04.jpg", alt: "Open-space с растениями" },
  { mode: "filled", src: "/images/gallery/filled-05.jpg", alt: "Проход к арочным окнам" },
  { mode: "filled", src: "/images/gallery/filled-06.jpg", alt: "Ресепшен и рабочая зона" },
];

export const GALLERY: GalleryItem[] = [
  { src: "/images/gallery/15.png", alt: "Фасад — арочные окна" },
  { src: "/images/gallery/16.png", alt: "Променад у здания" },
  { src: "/images/gallery/17.png", alt: "Угол здания" },
  { src: "/images/gallery/18.png", alt: "Мстиславца, 10" },
  { src: "/images/gallery/19.png", alt: "Арка комплекса" },
  { src: "/images/gallery/20.png", alt: "Локация сверху" },
  { src: "/images/gallery/21.png", alt: "Напротив Библиотеки" },
  { src: "/images/gallery/4.png", alt: "Свет в зале" },
  { src: "/images/gallery/6.png", alt: "Детали интерьера" },
  { src: "/images/gallery/9.png", alt: "Свет и тени" },
];

export const LOGO_ANIMATION_CONCEPT = `
Идея анимации логотипа АРКА 123:
1) Контур арки прорисовывается как «свет, входящий в окно».
2) Цифры 123 поднимаются снизу и «встают» в проём — метафора площади 123 м², которая заполняет пространство.
3) На прелоадере после сборки знака появляется слоган строкой, как титр встречи.
4) На hover арка слегка «дышит» (масштаб stroke + блик), цифры мягко пульсируют — ощущение живого прохода через арку к виду на библиотеку.
`.trim();
