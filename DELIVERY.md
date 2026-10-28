# АРКА 123 — сдача тестового

## Время

~8–12 часов чистой работы.

## Нейросети и инструменты

| Инструмент | Для чего |
|------------|----------|
| Cursor (Composer) | Код, анимации, сборка |
| Framer Motion / Lenis | UI + scroll |
| Next.js 16 + Tailwind 4 | Сайт |

---

## Задание №1 — анимация логотипа

PNG из `materials/logo`, прелоадер clip-reveal, hover в шапке.  
Код: `Logo.tsx`, `Preloader.tsx`.

## Задание №2 — персонаж

Снят по решению. Фокус на пространстве и video-hero.

## Задание №3 — помещение объёмно

Вместо stylized 3D — фотогалерея «пустое / заполненное» (`SpaceGallery.tsx`).

## Задание №4 — герой на скролле

Sticky video scrub: `materials/video_1022791.mp4` → `/video/hero.mp4`.  
`Hero.tsx` — `currentTime` от scroll progress.

## Задание №5 — сайт

Прелоадер, лого, video-hero, о нас, помещение (галерея), услуги, тарифы, отзывы, локация, footer, бронь.

---

## Деплой

Локально ок → выложить на Vercel:

```bash
cd site
npx vercel
```

(или подключить репозиторий в dashboard Vercel).

## Пробелы (по желанию)

1. Ретушь raw-фото (ДСП).
2. Более плотный keyframe-ролик для ещё плавнее scrub.
