# Care & Joy Foundation Africa Website

A responsive multi-page donor-facing website for Care & Joy Foundation Africa. The package contains Home, About, Programs, Impact, Contact and Donate pages, plus dedicated pages for Women, WASH, Special Needs, Elderly Care, Children & Education and Girl Child Empowerment.

## Quick start

Requirements: Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000` in your browser. Press `Ctrl+C` in the terminal to stop the website.

To test the production version locally:

```bash
npm run build
npm run start
```

## Hosting

- Vercel: import the GitHub repository and deploy it as a Next.js project.
- GitHub Pages: select **GitHub Actions** in the repository's Pages settings. The included workflow builds and publishes the site automatically.
- Detailed instructions: see [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md).

## Important links already configured

- Donations: `https://my.jpesa.com/?dad=xp`
- WhatsApp: `+256 777 738 484`
- Email: `info@careandjoyafrica.org`

The contact form sends a completed enquiry through WhatsApp or the visitor's email application. No database, API key or environment variable is required.

## Main editing locations

- `app/` — pages, navigation and content
- `app/components/program-data.ts` — programme descriptions and targets
- `app/globals.css` — colours, layout and responsive styles
- `public/images/` — logo and programme photographs

Do not remove `.github/workflows/deploy-pages.yml`; it is required for GitHub Pages deployment.
