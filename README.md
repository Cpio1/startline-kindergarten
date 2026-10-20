# STARTLINE — сайт детского сада

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Motion · Lucide.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

## Структура

- `src/website/` — компоненты и композиция Desktop (≥ 1024 px).
- `src/mobile-website/` — отдельная мобильная композиция (< 1024 px).
- `src/components/` — общие элементы: логотип, фото в органических масках, lightbox, видео, декор.
- `src/config/site.ts` — все факты о детском саде (адрес, телефон, режим, документы).
- `src/config/content.ts` — тексты разделов (общие для обеих версий).

Обе версии рендерятся на одной странице, а нужную показывают CSS-брейкпоинты. Мобильные секции используют id с префиксом `m-`.

## Фотографии

Положите фото в `public/images/` (jpg, jpeg, png, webp, avif). Затем пересоберите проект.

- `main-page.*` — фото первого экрана. Кадрирование настраивается через `heroFocus` в `site.ts`.
- `main-page2.*` — фото или видео для блока «О нас» (mp4/webm). Для видео можно добавить постер `main-page2-poster.jpg`.
- Остальные файлы автоматически попадают в галерею. Точные дубликаты пропускаются.

Пока фото нет, вместо них показываются брендированные заглушки. Стоковые изображения не используются.

## Документы

PDF-файлы кладите в `public/documents/`. Затем добавьте записи в массив `documents` в `src/config/site.ts`:

```ts
{ title: "Устав", kind: "pdf", href: "/documents/ustav.pdf" },
{ title: "Договор", kind: "drive", href: "https://drive.google.com/file/d/…/view" },
```

## Карта 2GIS

Адрес указан без города, поэтому точная точка не подтверждена, и на сайте стоит ссылка на поиск адреса в 2GIS. Когда будет известна карточка организации, укажите её ссылку в `site.twoGis.firmUrl`.

## Деплой на Vercel

Проект готов к импорту в Vercel без дополнительных настроек. Для корректных canonical/OG-ссылок можно задать `NEXT_PUBLIC_SITE_URL`.
