import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { NOME_CONFEITARIA, faq, loja } from './content'

const site = import.meta.env.VITE_SITE_URL
const dados = [
  {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: NOME_CONFEITARIA,
    url: `${site}/`,
    image: `${site}/og.jpg`,
    telephone: loja.telefone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: loja.endereco,
      addressLocality: loja.cidade,
      postalCode: loja.cep,
      addressCountry: 'BR',
    },
    openingHours: loja.horarios.flatMap((h) => h.schema ?? []),
    sameAs: [loja.instagramUrl],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.itens.map((item) => ({
      '@type': 'Question',
      name: item.pergunta,
      acceptedAnswer: { '@type': 'Answer', text: item.resposta },
    })),
  },
]
const script = document.createElement('script')
script.type = 'application/ld+json'
script.textContent = JSON.stringify(dados)
document.head.append(script)

createApp(App).mount('#app')
