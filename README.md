# Pixel Craft — Digital Store

A one-page website to sell digital products (templates, guides, assets). Built to make money with minimal setup.

## How to make money with this site

### 1. Add real products

- **Starter / Pro / Bundle** — Edit the product names, prices, and descriptions in `index.html` to match what you actually sell (Notion templates, Figma kits, PDFs, etc.).
- Create the files (Notion exports, Figma links, PDFs) and host them somewhere you can share (Google Drive, Dropbox, or Stripe’s “fulfillment” via email/link).

### 2. Connect Stripe (payments)

1. Sign up at [stripe.com](https://stripe.com).
2. In the Stripe Dashboard go to **Product catalog → Add product** and create one product per tier (e.g. Starter $19, Pro $49, Bundle $89).
3. For each product, create a **Payment Link** (Share → Payment link).
4. Open `script.js` and replace the placeholder URLs in `STRIPE_LINKS`:

```js
const STRIPE_LINKS = {
  starter: 'https://buy.stripe.com/xxxxx',
  pro: 'https://buy.stripe.com/xxxxx',
  bundle: 'https://buy.stripe.com/xxxxx'
};
```

After payment, Stripe can send a receipt email. You can add a “Download” link in the product description or use Stripe’s fulfillment (e.g. send a link by email).

### 3. Collect emails (newsletter)

The “Get free tips” form is ready for an email provider:

- **Mailchimp**, **ConvertKit**, **Klaviyo**, etc.: Use their embed or API. Replace the form’s `submit` handler in `script.js` with a call to their signup endpoint.
- **Formspree** or **Basin**: Point the form `action` to their URL and optionally keep the success message in `script.js`.

Leads can be used for a newsletter, product launches, or upsells.

### 4. Put the site online

- **Netlify** or **Vercel**: Drag the folder into the dashboard or connect a Git repo. Free tier is enough.
- **GitHub Pages**: Push the repo and enable Pages in the repo settings (source: main branch, `/ (root)`).
- **Your own host**: Upload `index.html`, `styles.css`, and `script.js` to any static host.

Use a custom domain (e.g. `yourstore.com`) in the host’s settings for a more professional look.

### 5. Optional: use Gumroad / Paddle

If you prefer not to use Stripe directly:

- Create products on [Gumroad](https://gumroad.com) or [Paddle](https://paddle.com) and get “Buy” links.
- In `script.js`, set `STRIPE_LINKS.starter`, `.pro`, and `.bundle` to those Gumroad/Paddle URLs instead. The “Buy now” buttons will then open those checkout pages.

---

## Run locally

Open `index.html` in a browser, or use a simple server:

```bash
npx serve .
```

Then visit the URL shown (e.g. `http://localhost:3000`).

---

## Customize

- **Branding**: Change “Pixel Craft” and taglines in `index.html`.
- **Colors**: Edit the CSS variables at the top of `styles.css` (`--accent`, `--bg`, etc.).
- **Products**: Update the product grid and pricing cards in `index.html` to match your offers.

Once Stripe (or Gumroad) and a host are set up, the site is ready to accept payments and grow your email list.
