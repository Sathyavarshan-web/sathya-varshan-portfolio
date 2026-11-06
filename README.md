# Sathya Varshan — Portfolio starter

A React + TypeScript portfolio starter with responsive styling, Framer Motion interactions, GSAP-ready architecture, and editable content.

## Requirements
- Node.js 20 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Edit your content
Most portfolio text is in `src/content.ts`:
- profile details and social links
- skills
- experience and leadership
- projects
- certifications

Replace placeholders with accurate information before publishing. Do not publish a placeholder email.

## Build for deployment
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## GitHub and free hosting
1. Create your own GitHub repository.
2. Push this project to that repository.
3. Connect the repository to Cloudflare Pages.
4. Set the build command to `npm run build` and output directory to `dist`.

This starter is a frontend portfolio. It does not yet contain a database, login system, or admin dashboard. Those should be added only if you want dynamic content editing; the simplest first version is to edit `src/content.ts` and deploy from GitHub.

## Ownership and security
Keep the GitHub account, hosting account, and any future database account under your control. Never commit passwords, API keys, or `.env` files to GitHub.
