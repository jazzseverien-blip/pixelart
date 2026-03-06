# How to put your site on GitHub and update it

## First time: create the repo and push

### 1. Create a new repository on GitHub
1. Go to **https://github.com** and log in.
2. Click the **+** (top right) → **New repository**.
3. **Repository name:** e.g. `pixel-craft` or `my-website`.
4. Choose **Public**.
5. **Do not** check "Add a README" (you already have files).
6. Click **Create repository**.

### 2. Open Terminal / PowerShell in your project folder
- In Cursor: **Terminal** → **New Terminal**, then run:
  ```bash
  cd C:\Users\sevej\digital-store
  ```

### 3. Turn the folder into a Git repo and push
Run these commands **one by one** (replace `YOUR_USERNAME` and `REPO_NAME` with your GitHub username and repo name):

```bash
git init
git add .
git commit -m "Initial commit - Pixel Craft site and examples"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

Example if your username is `jazzseverien` and repo is `pixel-craft`:
```bash
git remote add origin https://github.com/jazzseverien/pixel-craft.git
```

- When you run `git push`, GitHub may ask you to log in (browser or token).
- If it asks for a **password**, use a **Personal Access Token** (GitHub → Settings → Developer settings → Personal access tokens), not your normal password.

### 4. Turn on GitHub Pages
1. On your repo page, go to **Settings** → **Pages** (left sidebar).
2. Under **Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)** → **Save**.
4. After a minute or two your site will be at:  
   `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

## Later: update the website after you change files

Whenever you change your site (edit HTML, CSS, add pages, etc.):

1. Open Terminal in your project folder:
   ```bash
   cd C:\Users\sevej\digital-store
   ```

2. Run:
   ```bash
   git add .
   git commit -m "Update site"
   git push
   ```

3. GitHub Pages will rebuild automatically. In 1–2 minutes the live site will show your changes.

That’s it. **Add → Commit → Push** = updated site.
