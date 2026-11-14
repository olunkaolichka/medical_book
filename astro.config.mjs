// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://olunkaolichka.github.io',
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
        { icon: 'github', label: 'GitHub', href: 'https://github.com/olunkaolichka/medical_book' },
      ],
      editLink: {
        baseUrl: 'https://github.com/olunkaolichka/medical_book/edit/main/',
      },
      lastUpdated: true,
      sidebar: [
        {
          label: 'Початок',
          items: [{ label: 'Про проєкт', slug: 'about' }],
        },
        {
          label: 'Кардіологія',
          items: [{ autogenerate: { directory: 'kardiolohiia' } }],
        },
        // Новий розділ додавайте так:
        // {
        //   label: 'Ендокринологія',
        //   items: [{ autogenerate: { directory: 'endokrynolohiia' } }],
        // },
      ],
    }),
  ],
});
