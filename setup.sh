#!/usr/bin/env bash
# Запускати з папки medical_book на вашому комп'ютері
set -e
npm install astro @astrojs/starlight sharp
git add -A
git commit -m "Додано шаблон Starlight та першу статтю про дисліпідемії"
git push
