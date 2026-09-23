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

This repo (`QuackByte/clicktype.github.io`) is not its own GitHub Pages site. The org site
`QuackByte/quackbyte.github.io` checks it out, builds it with `base: /clicktype`, and copies
`dist/` into `public/clicktype/` before deploying to **quackbyte.dev**. This mirrors how
`quacktop.github.io` and `quackbit.github.io` are published.

- Pushes here only run `.github/workflows/check.yml` (type-check + build).
- To publish a change, push here, then re-run the org site's **Deploy to GitHub Pages**
  workflow (or push to `quackbyte.github.io`):
  ```sh
  gh workflow run deploy.yml -R QuackByte/quackbyte.github.io
  ```
- This repo must stay public: the org workflow checks it out without a token.

## App Store Connect

- Privacy Policy URL: `https://quackbyte.dev/clicktype/privacy/`
- Support URL: `https://quackbyte.dev/clicktype/support/`
- Marketing URL: `https://quackbyte.dev/clicktype/`
- App Privacy: "Data Not Collected" (matches the policy above)
