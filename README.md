# Method Lending

Barebones marketing site for Method Lending built with React, TypeScript, Vite, and Bootstrap.

## Getting started

Install dependencies and start the dev server:

- `npm install`
- `npm run dev`

## Build for production

- `npm run build`
- `npm run preview`

## Deploy to Vercel

This project is Vercel-ready. Import the repository in Vercel and use the default settings:

- Build command: `npm run build`
- Output directory: `dist`

### Email form configuration

Set the following environment variables in Vercel (Project Settings -> Environment Variables):

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM` (optional, defaults to `SMTP_USER`)
