# Deploy to GitHub Pages (Vite)

## 1. Install Dependencies

```bash
npm install
npm install gh-pages
```

## 2. Configure `homepage` in package.json

Set the `homepage` field to your GitHub Pages URL:

```json
"homepage": "https://<github-username>.github.io/<repository-name>"
```

Example:

```json
"homepage": "https://gitraffie.github.io/personal-portfolio"
```

## 3. Add Deploy Scripts

Ensure these scripts exist in `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

## 4. Run Deploy

```bash
npm run build
npm run deploy
```

After deployment, the site will be available at your GitHub Pages URL.
