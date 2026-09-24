<script setup lang="ts">
import { ref } from 'vue'
import IconeWhatsapp from './IconeWhatsapp.vue'
import { cardapio, pedidoItem, whatsapp } from '@/content'
import { usePonteiro } from '@/ponteiro'

const reais = (valor: number) => valor.toFixed(2).split('.')
const vitrine = ref<HTMLElement | null>(null)
const { mover, sair } = usePonteiro(vitrine)
</script>

<template>
  <section class="cardapio grao" @pointermove="mover" @pointerleave="sair">
    <div ref="vitrine" class="vitrine">
      <figure
        v-for="item in cardapio"
        :key="item.titulo"
        class="quadro"
        :style="{ '--tom': item.tom, '--realce': item.realce }"
      >
        <img class="foto" :src="item.foto" :alt="item.titulo" loading="lazy" decoding="async" />
      </figure>
    </div>
    <div class="lista">
      <article
        v-for="item in cardapio"
        :key="item.titulo"
        class="item"
        :style="{ '--tom': item.tom }"
      >
        <div class="item-texto">
          <h3>{{ item.titulo }}</h3>
          <p>{{ item.descricao }}</p>
          <a
            class="pedido"
            :href="whatsapp(pedidoItem(item.titulo))"
            target="_blank"
            rel="noopener"
            :aria-label="`Quero este: ${item.titulo}, a partir de R$ ${reais(item.preco).join(',')}, pedir pelo WhatsApp`"
          >
            <span class="preco">
              <span class="preco-rotulo">a partir de</span>
              <span class="preco-valor">
                <span class="moeda">R$</span>{{ reais(item.preco)[0]
                }}<span class="centavos">,{{ reais(item.preco)[1] }}</span>
              </span>
            </span>
            <span class="botao"><IconeWhatsapp />Quero este</span>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.cardapio {
  --fio: calc(50% + max(6vw, 25% - 13rem));
  position: relative;
  background: var(--cacau);
  color: var(--merengue);
  timeline-scope: --item-1, --item-2, --item-3, --item-4;
}
.vitrine {
  position: sticky;
  top: 0;
  height: 100svh;
  margin-bottom: -100svh;
  overflow: hidden;
  transition:
    --mx 0.7s cubic-bezier(0.2, 0.7, 0.2, 1),
    --my 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.vitrine::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(23, 16, 13, 0.55), transparent 45%);
  pointer-events: none;
}
@media (hover: hover) {
  .vitrine::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 70vmax;
    aspect-ratio: 1;
    translate: calc(-50% + var(--mx, 0) * 100vw) calc(-50% + var(--my, 0) * 100svh);
    background: radial-gradient(closest-side, rgba(255, 236, 214, 0.1), transparent);
    pointer-events: none;
  }
}
.quadro {
  position: absolute;
  inset: 0;
  margin: 0;
  background: var(--tom);
}
.quadro::before {
  content: '';
  position: absolute;
  inset: -8%;
  background:
    radial-gradient(
      38% 48% at 58% 28%,
      color-mix(in oklab, var(--realce) 42%, transparent),
      transparent 70%
    ),
    radial-gradient(
      32% 42% at 94% 86%,
      color-mix(in oklab, var(--realce) 26%, transparent),
      transparent 72%
    ),
    radial-gradient(30% 40% at 78% 52%, rgba(0, 0, 0, 0.28), transparent 70%);
  translate: calc(var(--mx, 0) * 48px) calc(var(--my, 0) * 48px);
}
.quadro:not(:first-child) {
  opacity: 0;
}
.foto {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(0.08) saturate(1.05);
}
.lista {
  position: relative;
}
.item {
  min-height: 100svh;
  display: grid;
  place-items: end start;
  padding: 12vh 6vw;
}
.item-texto {
  background: color-mix(in srgb, var(--tom) 84%, transparent);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(248, 237, 231, 0.14);
  padding: 1.8rem 2rem;
  max-width: 32ch;
  border-radius: 3px;
}
.item h3 {
  font-size: 1.55rem;
  line-height: 1.15;
}
.item p {
  margin: 0.5rem 0 0;
  color: rgba(248, 237, 231, 0.86);
  font-size: 0.96rem;
}
.pedido {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-top: 1.3rem;
  color: inherit;
  text-decoration: none;
}
.pedido .botao {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.9rem 1.6rem;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
}
.pedido:hover .botao,
.pedido:focus-visible .botao {
  background: var(--carmim-escuro);
  translate: 0 -2px;
}
.preco {
  --etiqueta: polygon(1.1rem 0, 100% 0, 100% 100%, 1.1rem 100%, 0 50%);
  position: relative;
  isolation: isolate;
  display: inline-grid;
  gap: 0.35rem;
  padding: 0.75rem 1.3rem 0.85rem 2.6rem;
  rotate: -2deg;
  transform-origin: left center;
  background: var(--merengue-2);
  clip-path: var(--etiqueta);
  mask: radial-gradient(circle at 1.2rem 50%, transparent 4px, #000 4.5px);
  transition: rotate 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pedido:hover .preco,
.pedido:focus-visible .preco {
  rotate: 2deg;
}
.preco::before,
.preco::after {
  content: '';
  position: absolute;
  inset: 3px;
  z-index: -1;
  background: var(--carmim);
  clip-path: var(--etiqueta);
  mask: radial-gradient(circle at calc(1.2rem - 3px) 50%, transparent 6px, #000 6.5px);
}
.preco::after {
  inset: 4px;
  background: var(--merengue-2);
  mask: radial-gradient(circle at calc(1.2rem - 4px) 50%, transparent 7px, #000 7.5px);
}
.preco-rotulo {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--fumaca);
}
.preco-valor {
  font-family: var(--display);
  font-weight: 300;
  font-variation-settings:
    'SOFT' 100,
    'opsz' 144;
  font-variant-numeric: lining-nums;
  font-size: 2.4rem;
  line-height: 1;
  letter-spacing: -0.01em;
  color: var(--carmim);
}
@media (prefers-reduced-motion: reduce) {
  .preco {
    transition: none;
  }
}
.moeda {
  margin-right: 0.2em;
  font-size: 0.4em;
  font-weight: 400;
  letter-spacing: 0.04em;
  vertical-align: 1.15em;
}
.centavos {
  margin-left: 0.05em;
  font-size: 0.5em;
  vertical-align: 0.8em;
}

.item:nth-child(1) {
  view-timeline-name: --item-1;
}
.item:nth-child(2) {
  view-timeline-name: --item-2;
}
.item:nth-child(3) {
  view-timeline-name: --item-3;
}
.item:nth-child(4) {
  view-timeline-name: --item-4;
}

@supports (animation-timeline: view()) {
  .quadro:not(:first-child) {
    animation: revela linear both;
    animation-range: cover 15% cover 40%;
  }
  .quadro:nth-child(2) {
    animation-timeline: --item-2;
  }
  .quadro:nth-child(3) {
    animation-timeline: --item-3;
  }
  .quadro:nth-child(4) {
    animation-timeline: --item-4;
  }
}
@keyframes revela {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (min-width: 900px) {
  .cardapio {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .vitrine {
    grid-area: 1 / 1 / 2 / 3;
    align-self: start;
    margin-bottom: 0;
  }
  .vitrine::after {
    content: none;
  }
  .foto {
    width: 50%;
    mask-image: linear-gradient(
      to left,
      transparent 0%,
      rgba(0, 0, 0, 0.18) 7%,
      rgba(0, 0, 0, 0.5) 18%,
      rgba(0, 0, 0, 0.82) 30%,
      #000 42%
    );
  }
  .lista {
    grid-area: 1 / 2;
  }
  .item {
    place-items: center;
    padding: 0 6vw;
  }
  .item-texto {
    position: relative;
    width: min(26rem, 100%);
    max-width: none;
    background: none;
    backdrop-filter: none;
    border: 0;
    border-radius: 0;
    padding: 0 0 0 2.4rem;
  }
  .item-texto::before {
    content: '';
    position: absolute;
    left: -4px;
    top: 1.15rem;
    width: 9px;
    height: 9px;
    rotate: 45deg;
    background: var(--carmim-claro);
  }
  .item h3 {
    font-size: clamp(2.2rem, 3.4vw, 3.1rem);
    line-height: 1.08;
  }
  .item p {
    margin-top: 1rem;
    max-width: 34ch;
    font-size: 1.12rem;
  }
  .pedido {
    margin-top: 1.8rem;
  }
  .preco-valor {
    font-size: clamp(2.3rem, 3vw, 2.9rem);
  }
}
</style>
