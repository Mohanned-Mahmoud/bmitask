# توازنها صح — حاسبة BMI

تطبيق ويب عربي (Mobile-first, RTL) لحساب مؤشر كتلة الجسم (BMI) مع 6 شاشات كاملة تطابق التصميم الأصلي.

## Run & Operate

- `pnpm --filter @workspace/bmi-app run dev` — تشغيل التطبيق (port auto-assigned)
- `pnpm run typecheck` — فحص أنواع TypeScript

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React + Vite (react-vite artifact)
- Tailwind CSS v4
- Fonts: Almarai (Arabic), Poppins Bold (numbers) — loaded via Google Fonts CDN

## Where things live

- `artifacts/bmi-app/src/pages/` — الشاشات الست (SplashScreen, InputScreen, ResultScreen)
- `artifacts/bmi-app/src/components/BinaryBackground.tsx` — الخلفية الثنائية المتكررة
- `attached_assets/` — جميع صور التصميم (الأوربات، الأيقونات، الزوايا، الأزرار)
- `artifacts/bmi-app/src/index.css` — الثيم الكامل + خطوط Almarai/Poppins

## Architecture decisions

- تطبيق frontend-only — لا يحتاج backend أو database (حساب BMI محلي في المتصفح)
- الصور المرفقة تُستخدم مباشرة عبر `@assets/` alias المعرّف في vite.config.ts
- RTL بالكامل عبر `dir="rtl"` على كل شاشة
- لا يوجد routing — state-based navigation بين الشاشات الثلاثة (splash → input → result)
- الـ Glow Orb مُعاد بناؤها كـ PNG مع `mix-blend-mode: screen` في CSS (حسب التحذير في المواصفات)

## Product

- **شاشة 1 — Splash**: شعار + "ابدأ رحلتك" + كرة مضيئة مع BMI + زرار سداسي
- **شاشة 2 — الإدخال**: الكرة + حقلا الطول والوزن + زرار إرسال مع validation
- **شاشات 3-6 — النتيجة**: 4 حالات (نقص / صحي / زيادة / سمنة) مع أيقونة ميزان، النص الكامل لكل فئة، وخلفية بيضاء بالأسفل

## User preferences

- RTL عربي بالكامل
- استخدام الصور المرفقة مباشرة دون إعادة إنشاء
- مطابقة التصميم الأصلي بصريًا
- Almarai للعربية، Poppins Bold للأرقام والإنجليزي

## Gotchas

- خط Almarai يُحمَّل من Google Fonts (الملفات لم تكن في الـ zip — كان يحتوي على SVGs فقط)
- `@assets/` alias في vite.config.ts يشير إلى `../../attached_assets`
- الـ corner decorations: corner1 = يسار-أعلى، corner2 = يمين-أسفل (يُقلب بـ CSS transform)
- BMI formula: weight(kg) / (height(m))² — validation: طول 50-250 سم، وزن 10-300 كجم

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
