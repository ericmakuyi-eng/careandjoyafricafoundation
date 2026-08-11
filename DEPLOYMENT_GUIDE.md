# Care & Joy Website: Run and Deployment Guide

This package uses standard Next.js. It does not need a database, API key or environment variable.

## 1. Extract the package correctly

1. Download and extract the ZIP file.
2. Open the extracted `care-and-joy-foundation-africa-website` folder.
3. Confirm that `package.json`, `app`, `public`, `next.config.mjs` and `vercel.json` are directly inside that folder.

The terminal must be opened in the folder that contains `package.json`.

## 2. Install Node.js

1. Install Node.js 20.9 or newer. Node.js 22 LTS is recommended.
2. Open Terminal, Command Prompt or PowerShell.
3. Confirm the installation:

```bash
node --version
npm --version
```

## 3. Run the website on your computer

In the website folder, run:

```bash
npm ci
npm run dev
```

When the terminal shows that the server is ready, open:

```text
http://localhost:3000
```

Check Home, About, Programs, Impact, Contact and Donate. Open the Programs menu and check all six programme pages. Press `Ctrl+C` to stop the local server.

To test the same production build Vercel will use:

```bash
npm run build
npm run start
```

## 4. Upload the website to GitHub

### A. Create the repository

1. Sign in at GitHub.
2. Select **New repository**.
3. Enter a name such as `care-and-joy-africa`.
4. Choose **Public** or **Private**.
5. Do not add a README, `.gitignore` or licence because the package already contains the required project files.
6. Select **Create repository**.

### B. Push the package from the terminal

Replace `YOUR-USERNAME` and `care-and-joy-africa` if your details are different:

```bash
git init
git add .
git commit -m "Publish Care and Joy Foundation Africa website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/care-and-joy-africa.git
git push -u origin main
```

If GitHub asks you to authenticate, follow the browser sign-in prompt or use a GitHub personal access token. Do not paste a password into the repository files.

## 5. Publish with GitHub Pages

1. Open the GitHub repository.
2. Select **Settings**.
3. Select **Pages** in the left menu.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and select **Deploy to GitHub Pages**.
6. Wait for both the build and deploy jobs to turn green.
7. Open the website address shown by the completed deployment. For a normal repository it will look like:

```text
https://YOUR-USERNAME.github.io/care-and-joy-africa/
```

Every push to the `main` branch automatically republishes the website.

## 6. Publish with Vercel

1. Sign in to Vercel using the GitHub account that owns the repository.
2. Select **Add New** and then **Project**.
3. Find the `care-and-joy-africa` repository and select **Import**.
4. Confirm **Framework Preset: Next.js**.
5. Keep **Root Directory** as `./` when `package.json` is at the repository root.
6. Keep **Build Command** as `npm run build` and leave the output setting at the Next.js default.
7. Do not add environment variables; the website does not require any.
8. Select **Deploy**.
9. When deployment finishes, open the Vercel address and test the navigation, WhatsApp form and donation redirect.

Every push to the `main` branch automatically creates a new Vercel deployment.

## 7. Connect the organisation's domain in Vercel

1. Open the project in Vercel.
2. Select **Settings → Domains**.
3. Enter the organisation's domain.
4. Add the DNS records Vercel displays at the company that manages the domain.
5. Wait until Vercel shows the domain as valid and HTTPS is active.

## 8. Common fixes

- **`npm` is not recognized:** install Node.js, close the terminal, open it again and rerun `node --version`.
- **`package.json` not found:** change directory into the extracted website folder before running npm commands.
- **`npm ci` reports a lock-file problem:** use the included `package-lock.json` and do not replace it with the lock file from the old package.
- **GitHub Pages action does not appear:** confirm `.github/workflows/deploy-pages.yml` was uploaded and the default branch is named `main`.
- **GitHub Pages returns 404 before deployment:** wait for the Actions workflow to finish, then use the exact URL shown in the deployment job.
- **Vercel cannot detect Next.js:** set the Root Directory to the folder that directly contains `package.json`.
- **A Vercel build fails after editing:** run `npm ci` and `npm run build` locally, fix the reported file, commit and push again.

## 9. Final launch check

- Confirm the transparent emblem and wordmark appear in the navigation.
- Confirm all pages and programme routes open on desktop and mobile.
- Confirm every Donate button opens `https://my.jpesa.com/?dad=xp`.
- Confirm the WhatsApp form opens a message to `+256 777 738 484`.
- Confirm TikTok, Instagram, LinkedIn and YouTube links open correctly.
- Confirm the organisation email and phone links work.
