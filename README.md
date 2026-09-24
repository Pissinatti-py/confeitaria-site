# confeitaria-site

Site da confeitaria, em Vue 3 + TypeScript + Vite. O link do WhatsApp ainda é placeholder.

## Rodar

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + build em dist/
npm run lint
```

## Onde trocar as coisas

- Textos, cardápio, nome da confeitaria e link do WhatsApp: `src/content.ts`
- Cores e fontes: `src/assets/main.css` (as fontes Fraunces e Great Vibes vêm do Google Fonts, pelo `<link>` no `index.html`)
- As manchas de cor (`.ganache`, `.creme`, ...) e o círculo `DoceIlustracao.vue` ocupam o lugar das fotos reais.
