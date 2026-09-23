# ClickType website

Marketing, support, privacy and legal pages for ClickType, a Quackbyte app for macOS.
Built with Astro 7 (Vite 8 under the hood) and TypeScript, bilingual EN/ES, deployed to
GitHub Pages at **https://quackbyte.dev/clicktype/**.

| Page | English | Español |
| --- | --- | --- |
| Home | `/clicktype/` | `/clicktype/es/` |
| Privacy policy | `/clicktype/privacy/` | `/clicktype/es/privacidad/` |
| Support | `/clicktype/support/` | `/clicktype/es/soporte/` |
| Legal notice (LSSI-CE) | `/clicktype/legal/` | `/clicktype/es/aviso-legal/` |

## Before publishing

Fill in every `TODO` in `src/config.ts`: legal name, NIF, business address, support email,
minimum macOS version and (once live) the App Store URL.

The privacy policy states that the app:

- stores snippets and settings only locally,
- makes no network connections and has no analytics, ads or tracking,
- uses the Accessibility permission only to send the keystrokes of a clicked snippet.

If any of that stops being true (iCloud sync, crash SDK, update checks…), update
`src/views/Privacy.astro` **and** your App Privacy answers in App Store Connect.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/clicktype/
npm run build    # astro check + static build into dist/
```

Requires Node 22.12 or later.

## Deploy

1. Create a repo named **`clicktype`** under the Quackbyte account/org and push:
   ```sh
   git remote add origin git@github.com:<quackbyte-account>/clicktype.git
   git push -u origin main
   ```
2. In the repo: **Settings › Pages › Build and deployment › Source: GitHub Actions**.
3. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

### How it ends up on quackbyte.dev/clicktype

A project repo named `clicktype` is served at `<account>.github.io/clicktype/`. If the
account's user/org site (`<account>.github.io` repo) has the custom domain `quackbyte.dev`,
GitHub serves every project site under it automatically, so this one appears at
`quackbyte.dev/clicktype/`. No `CNAME` file is needed in this repo.

If quackbyte.dev is hosted somewhere else, either proxy/redirect `/clicktype/` to the
GitHub Pages URL, or change `site`/`base` in `astro.config.mjs` to match where it lives.

## App Store Connect

- Privacy Policy URL: `https://quackbyte.dev/clicktype/privacy/`
- Support URL: `https://quackbyte.dev/clicktype/support/`
- Marketing URL: `https://quackbyte.dev/clicktype/`
- App Privacy: "Data Not Collected" (matches the policy above)
