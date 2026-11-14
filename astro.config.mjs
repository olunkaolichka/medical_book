// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// TODO: замініть YOUR_GITHUB_USERNAME на ваш логін GitHub
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  base: '/medical_book',
  integrations: [
    starlight({
      title: 'Медична книга',
      description: 'Клінічні настанови, протоколи та статті з медицини українською мовою.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Українська', lang: 'uk' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/YOUR_GITHUB_USERNAME/medical_book' },
      ],
      editLink: {
        baseUrl: 'https://github.com/YOUR_GITHUB_USERNAME/medical_book/edit/main/',
      },
      lastUpdated: true,
      sidebar: [
        { label: 'Початок', items: [{ label: 'Про проєкт', slug: 'about' }] },
        {
          label: 'Кардіологія',
          autogenerate: { directory: 'kardiolohiia' },
        },
        // Додавайте нові розділи так:
        // { label: 'Ендокринологія', autogenerate: { directory: 'endokrynolohiia' } },
      ],
    }),
  ],
});
