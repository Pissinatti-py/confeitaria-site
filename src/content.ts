// Único lugar com textos e placeholders. Troque aqui quando a marca existir.

import fotoFuba from '@/assets/fotos/site/cardapio-fuba.webp'
import fotoLimao from '@/assets/fotos/site/cardapio-limao.webp'
import fotoMorango from '@/assets/fotos/site/cardapio-morango.webp'
import fotoDoces from '@/assets/fotos/site/cardapio-doces.webp'

export const NOME_CONFEITARIA = 'Chantilly Americano'
export const WHATSAPP_NUMERO = ''
export const whatsapp = (mensagem?: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ''}`
export const WHATSAPP_URL = whatsapp()
export const pedidoItem = (titulo: string) =>
  `Olá! Vim pelo site e tenho interesse no *${titulo}*. Pode me passar mais detalhes?`

export const capa = {
  titulo: 'Bolo feito no dia em que você',
  tituloEnfase: 'vai comer',
  subtitulo:
    'Encomendas para aniversário, casamento e festa. Retirada na loja ou entrega na sua região.',
  botao: 'Fazer meu pedido',
  mensagem: 'Olá! Vim pelo site e quero fazer um pedido. Pode me ajudar?',
  role: 'role para ver',
}

export interface ItemCardapio {
  titulo: string
  descricao: string
  preco: number
  foto: string
  tom: string
  realce: string
}

export const cardapio: ItemCardapio[] = [
  {
    titulo: 'Bolo de fubá cremoso',
    descricao:
      'Milho, erva-doce e uma casquinha que estala. Sai do forno de manhã e acaba antes das quatro.',
    preco: 45,
    foto: fotoFuba,
    tom: '#3b2213',
    realce: '#c98b2b',
  },
  {
    titulo: 'Caseirinho de limão',
    descricao:
      'Massa fofinha de limão coberta com calda branca e raspas de limão tahiti por cima.',
    preco: 38,
    foto: fotoLimao,
    tom: '#1f2a17',
    realce: '#8fb04a',
  },
  {
    titulo: 'Bolo de camadas com morango',
    descricao:
      'Massa, mousse de chocolate e creme, finalizado com raspas de chocolate e morangos frescos.',
    preco: 95,
    foto: fotoMorango,
    tom: '#3a1419',
    realce: '#c0263f',
  },
  {
    titulo: 'Barca de doces',
    descricao: 'Brigadeiro, beijinho e docinhos finos arrumados numa barca pronta para presentear.',
    preco: 120,
    foto: fotoDoces,
    tom: '#2a1630',
    realce: '#9a2f72',
  },
]

export const encomenda = {
  titulo: 'Sua festa tem data.\nO\u00a0bolo também.',
  texto:
    'Encomende com 48 horas de antecedência e escolha sabor, tamanho e decoração no atendimento.',
  botao: 'Quero encomendar',
  mensagem: 'Olá! Quero encomendar um bolo para uma festa.',
}

export const historia = {
  titulo: 'Tudo sai de uma cozinha só',
  texto:
    'Sem fôrma congelada e sem cobertura pronta. Se está no cardápio, foi feito aqui — e quem faz atende você.',
  instagram: 'Acompanhe a cozinha no Instagram',
}

export const chamada = {
  titulo: 'Vamos combinar o seu bolo?',
  texto: 'Manda a data e a quantidade de pessoas que a gente monta o orçamento no mesmo dia.',
  botao: 'Pedir orçamento no WhatsApp',
  mensagem: 'Olá! Quero um orçamento.\nData: \nPessoas: \nSabor: ',
  prazo: 'encomendas com 48h · entrega e retirada',
  instagram: 'Veja mais bolos',
}

export const loja = {
  endereco: 'Rua Exemplo, 123 · Bairro Centro',
  cidade: 'Cidade · UF',
  cep: '00000-000',
  telefone: '(00) 00000-0000',
  instagram: '@chantillyamericano1',
  instagramUrl: 'https://www.instagram.com/chantillyamericano1',
  horarios: [
    { dias: 'Terça a sexta', horas: '9h às 18h', schema: 'Tu-Fr 09:00-18:00' },
    { dias: 'Sábado', horas: '9h às 14h', schema: 'Sa 09:00-14:00' },
    { dias: 'Domingo e segunda', horas: 'fechado' },
  ],
}

export const faq = {
  titulo: 'Perguntas frequentes',
  itens: [
    {
      pergunta: 'Quantas pessoas cada tamanho serve?',
      resposta:
        'P (15 cm) serve de 10 a 12 fatias, M (20 cm) cerca de 20 e G (25 cm) cerca de 30. Para festas maiores, montamos bolos de andares.',
    },
    {
      pergunta: 'Com quanto tempo de antecedência preciso encomendar?',
      resposta:
        'Pedimos 48 horas para bolos do cardápio. Bolos de casamento e decorações especiais pedem pelo menos duas semanas.',
    },
    {
      pergunta: 'Vocês entregam? Qual a região e a taxa?',
      resposta:
        'Entregamos na cidade e em bairros próximos. A taxa depende da distância e é informada no orçamento. Também dá para retirar na loja.',
    },
    {
      pergunta: 'Quais as formas de pagamento?',
      resposta: 'Pix, cartão de crédito e débito e dinheiro. Encomendas são confirmadas com 50% de sinal.',
    },
    {
      pergunta: 'Fazem opções sem lactose, sem glúten ou sem açúcar?',
      resposta:
        'Temos opções sem lactose e com menos açúcar. Consulte pelo WhatsApp, porque a cozinha não é livre de glúten.',
    },
    {
      pergunta: 'Posso personalizar sabor e decoração?',
      resposta:
        'Sim. Você escolhe massa, recheio, cobertura e tema, e mandamos uma prévia antes de começar.',
    },
  ],
}

export const desenvolvedor = {
  nome: 'Marcus',
  url: 'https://pissinatti-py.github.io/portfolio/',
}
