// Único lugar com textos e placeholders. Troque aqui quando a marca existir.

export const NOME_CONFEITARIA = '[ nome da confeitaria ]'
export const WHATSAPP_URL = '#' // ponytail: placeholder, trocar por https://wa.me/55DDDNUMERO

export const aviso = 'Prévia de conceito · as áreas coloridas serão substituídas pelas'
export const avisoDestaque = 'fotos reais dos seus doces'

export const capa = {
  titulo: 'Bolo feito no dia em que você',
  tituloEnfase: 'vai comer',
  subtitulo:
    'Encomendas para aniversário, casamento e festa. Retirada na loja ou entrega na sua região.',
  role: 'role para ver',
}

export interface ItemCardapio {
  titulo: string
  descricao: string
  preco: string
}

export const cardapio: ItemCardapio[] = [
  {
    titulo: 'Bolo de fubá cremoso',
    descricao:
      'Milho, erva-doce e uma casquinha que estala. Sai do forno de manhã e acaba antes das quatro.',
    preco: 'a partir de R$ 00',
  },
  {
    titulo: 'Torta de limão siciliano',
    descricao:
      'Massa amanteigada, creme azedinho na medida e merengue maçaricado na hora de servir.',
    preco: 'a partir de R$ 00',
  },
  {
    titulo: 'Naked cake de frutas da estação',
    descricao: 'Do tamanho que a mesa pedir. Escolha o recheio e a fruta na hora da encomenda.',
    preco: 'a partir de R$ 00 · mínimo 15 fatias',
  },
  {
    titulo: 'Mesa de doces para festa',
    descricao: 'Brigadeiro gourmet, bem-casado e docinho fino. Montamos no local, no dia.',
    preco: 'orçamento sob medida',
  },
]

export const encomenda = {
  titulo: 'Sua festa tem data. O bolo também.',
  texto:
    'Encomende com 48 horas de antecedência e escolha sabor, tamanho e decoração no atendimento.',
}

export const historia = {
  titulo: 'Tudo sai de uma cozinha só',
  texto:
    'Sem fôrma congelada e sem cobertura pronta. Se está no cardápio, foi feito aqui — e quem faz atende você.',
}

export const chamada = {
  titulo: 'Vamos combinar o seu bolo?',
  texto: 'Manda a data e a quantidade de pessoas que a gente monta o orçamento no mesmo dia.',
  botao: 'Pedir orçamento no WhatsApp',
  prazo: 'encomendas com 48h · entrega e retirada',
}

export const rodape = {
  paragrafo1Inicio: 'Esta página é uma',
  paragrafo1Destaque: 'prévia de conceito',
  paragrafo1Fim:
    ', feita para mostrar como o site se comporta: como as imagens se movem, como o cardápio aparece e como o cliente chega até o pedido.',
  paragrafo2:
    'As manchas de cor ocupam o lugar das fotografias. Os nomes, textos e preços são exemplos e serão trocados pelos seus.',
}
