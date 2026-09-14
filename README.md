# confeitaria-site

Prévia de conceito do site de uma confeitaria, em Vue 3 + TypeScript + Vite. O nome da marca, textos, preços e o link do WhatsApp são placeholders.

## Rodar

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + build em dist/
npm run lint
```

## Onde trocar as coisas

- Textos, cardápio, nome da confeitaria e link do WhatsApp: `src/content.ts`
- Cores e fontes: `src/assets/main.css`
- As manchas de cor (`.ganache`, `.creme`, ...) e o círculo `DoceIlustracao.vue` ocupam o lugar das fotos reais.
