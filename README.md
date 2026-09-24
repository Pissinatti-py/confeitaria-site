# confeitaria-site

Site da confeitaria, em Vue 3 + TypeScript + Vite. O número do WhatsApp ainda está vazio: preencha pelo painel, em "Contato e horários".

## Rodar

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + build em dist/
npm run lint
```

## Onde trocar as coisas

- Textos, preços, fotos, contato, horários e FAQ: pelo painel (`/admin/`), que grava em `src/conteudo/*.json` e `public/fotos/`
- Nome da confeitaria, mensagem do pedido pelo WhatsApp e crédito do site: `src/content.ts`
- Cores e fontes: `src/assets/main.css` (as fontes Fraunces e Great Vibes vêm do Google Fonts, pelo `<link>` no `index.html`)
- As manchas de cor (`.ganache`, `.creme`, ...) e o círculo `DoceIlustracao.vue` ocupam o lugar das fotos reais.

## Painel

Decap CMS com editorial workflow, hospedado na Netlify. Configuração em `public/admin/config.yml`.

- **Acesso:** `https://<site>/admin/` (salve nos favoritos) ou 5 toques rápidos no logo do rodapé. O login é com a conta do GitHub.
- **Quem edita:** colaboradores do repositório (GitHub → Settings → Collaborators). A `main` exige aprovação, então só o dono do repositório consegue publicar.
- **Fluxo:** editar → **Salvar** (vira um PR com prévia da Netlify) → mover para **Pronto** → o dono confere em **Ver prévia** e clica em **Publicar**.
- **Fotos:** até 1 MB. Foto de celular maior que isso deve ser comprimida antes, no [squoosh.app](https://squoosh.app).
- **Editar localmente:** rode `BIND_HOST=127.0.0.1 npx decap-server` junto com `npm run dev` e abra `http://localhost:5173/admin/index.html`. As alterações vão direto para os arquivos, sem PR.
