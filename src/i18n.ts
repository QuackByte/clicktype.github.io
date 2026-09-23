export const langs = ['en', 'es'] as const;
export type Lang = (typeof langs)[number];

export const routes = {
  home: { en: '', es: 'es/' },
  privacy: { en: 'privacy/', es: 'es/privacidad/' },
  support: { en: 'support/', es: 'es/soporte/' },
  legal: { en: 'legal/', es: 'es/aviso-legal/' },
} as const;
export type Route = keyof typeof routes;

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function href(route: Route, lang: Lang, hash = ''): string {
  return base + routes[route][lang] + hash;
}

export function asset(path: string): string {
  return base + path.replace(/^\//, '');
}

export function formatDate(iso: string, lang: Lang): string {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export const ui = {
  en: {
    nav: { support: 'Support', privacy: 'Privacy' },
    switchTo: 'Español',
    switchLabel: 'Leer en español',
    footer: {
      madeBy: 'A Quackbyte app, made in Málaga.',
      privacy: 'Privacy policy',
      support: 'Support',
      legal: 'Legal notice',
    },
    skip: 'Skip to content',
  },
  es: {
    nav: { support: 'Soporte', privacy: 'Privacidad' },
    switchTo: 'English',
    switchLabel: 'Read in English',
    footer: {
      madeBy: 'Una app de Quackbyte, hecha en Málaga.',
      privacy: 'Política de privacidad',
      support: 'Soporte',
      legal: 'Aviso legal',
    },
    skip: 'Saltar al contenido',
  },
} as const;
