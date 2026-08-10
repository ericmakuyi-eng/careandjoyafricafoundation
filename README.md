# Care & Joy Foundation Africa

A responsive, multi-page NGO website for Care & Joy Foundation Africa. It includes Home, About, Programs, Impact, Contact and Donate pages, six programme areas, direct JPesa donation links and WhatsApp enquiries.

## Requirements

- Node.js 22 or later
- npm

## Run locally

```bash
npm ci
npm run dev
```

## Deploy with Vercel

1. Create a GitHub repository and upload this project.
2. In Vercel, select **Add New → Project** and import the repository.
3. Keep the detected framework as **Next.js**.
4. Select **Deploy**. The included `vercel.json` runs the correct Vercel build automatically.

The site does not require environment variables or a database.

## Host with GitHub Pages

1. Push this project to the `main` branch of a GitHub repository.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. The included workflow builds and publishes the website automatically.

The workflow supports both ordinary repository URLs such as `username.github.io/repository-name` and root user or organisation sites such as `username.github.io`.

## Main editable areas

- `app/` — pages, shared navigation and website content
- `app/globals.css` — colours, layout and responsive design
- `public/images/` — logo and programme photography
- `app/components/program-data.ts` — programme descriptions and evidence

## Donation and contact destinations

- Donations: `https://my.jpesa.com/?dad=xp`
- WhatsApp: `+256 777 738 484`
- Email: `info@careandjoyafrica.org`

## Deployment notes

- Vercel uses the normal Next.js output.
- GitHub Pages uses a static export and automatically applies the repository base path.
- All navigation routes and image paths are prepared for both hosting targets.
