# Moedify Media Premium Landing Page

A high-converting animated landing page for **Moedify Media**, built with **Vite + React**, **Tailwind CSS**, **shadcn-style UI components**, and **Framer Motion**.

## Features

- Premium responsive landing page for mobile, tablet, and desktop
- Sticky animated navbar with smooth scrolling
- Full-screen hero section with WhatsApp CTA
- About, services, packages, why choose us, testimonials, gallery, CTA banner, and footer
- Animated cards, hover effects, image zoom, scroll fade-ins, testimonial auto slider, and gallery lightbox
- SEO-friendly metadata in `index.html`
- Reusable component structure
- Brand color palette inspired by the provided Moedify Media visuals: teal, cyan, deep navy, white, yellow/gold, and green

## Tech Stack

- Vite
- React
- JavaScript
- Tailwind CSS
- Framer Motion
- lucide-react icons
- shadcn-style reusable UI components

## Folder Structure

```bash
moedify-media-landing/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sections.jsx
│   │   └── ui.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal.

## Build for Production

```bash
npm run build
npm run preview
```

## Deployment

Deploy easily on Vercel, Netlify, or Render Static Site.

For Vercel:

```bash
npm run build
```

Use these settings:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## Brand Contact Used

- WhatsApp: `https://wa.me/message/2JSF3VCSUNIPO1`
- Phone: `08024426105`
- Email: `moedifyagency@gmail.com`
- Instagram: `@get_moedified`

## Fix for Vite/Rolldown native binding error on Mac

If you see `Cannot find native binding` or `@rolldown/binding-darwin-x64`, remove the old install and reinstall with Node 20 LTS:

```bash
rm -rf node_modules package-lock.json
nvm install 20
nvm use 20
npm install
npm run dev
```

This project pins Vite to the stable Vite 5 line to avoid the latest Rolldown optional dependency issue.
