import loja from '@/conteudo/loja.json'
import cardapioJson from '@/conteudo/cardapio.json'

export { loja }
export { default as capa } from '@/conteudo/capa.json'
export { default as encomenda } from '@/conteudo/encomenda.json'
export { default as historia } from '@/conteudo/historia.json'
export { default as chamada } from '@/conteudo/chamada.json'
export { default as faq } from '@/conteudo/faq.json'

export const NOME_CONFEITARIA = 'Chantilly Americano'
export const WHATSAPP_NUMERO = loja.whatsapp
export const whatsapp = (mensagem?: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ''}`
export const WHATSAPP_URL = whatsapp()
export const pedidoItem = (titulo: string) =>
  `Olá! Vim pelo site e tenho interesse no *${titulo}*. Pode me passar mais detalhes?`

export interface ItemCardapio {
  titulo: string
  descricao: string
  preco: number
  foto: string
  tom: string
  realce: string
}

export const cardapio: ItemCardapio[] = cardapioJson.itens

export const desenvolvedor = {
  nome: 'Marcus',
  url: 'https://pissinatti-py.github.io/portfolio/',
}
