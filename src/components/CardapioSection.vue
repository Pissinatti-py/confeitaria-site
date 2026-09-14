<script setup lang="ts">
import DoceIlustracao from './DoceIlustracao.vue'
import { cardapio } from '@/content'
</script>

<template>
  <section class="cardapio">
    <div class="cardapio-fundo creme grao">
      <DoceIlustracao variante="caramelo" :frutas="3" />
    </div>
    <div class="cardapio-lista">
      <article v-for="item in cardapio" :key="item.titulo" class="item">
        <h3>{{ item.titulo }}</h3>
        <p>{{ item.descricao }}</p>
        <span class="preco">{{ item.preco }}</span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.cardapio {
  position: relative;
  color: var(--merengue);
}
.cardapio-fundo {
  position: sticky;
  top: 0;
  height: 100svh;
  margin-bottom: -100svh;
  display: grid;
  place-items: center;
}
.cardapio-lista {
  position: relative;
  padding: 30vh 6vw 36vh;
  display: flex;
  flex-direction: column;
  gap: 24vh;
  align-items: center;
}
.item {
  background: rgba(23, 16, 13, 0.74);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(248, 237, 231, 0.14);
  padding: 2.1rem 2.3rem;
  max-width: 32ch;
  border-radius: 3px;
}
.item:nth-child(even) {
  align-self: flex-end;
}
.item h3 {
  font-size: 1.55rem;
  line-height: 1.15;
}
.item p {
  margin: 0.5rem 0 0;
  color: rgba(248, 237, 231, 0.72);
  font-size: 0.96rem;
}
.preco {
  display: block;
  margin-top: 0.9rem;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--caramelo);
}

@media (max-width: 640px) {
  .item:nth-child(even) {
    align-self: flex-start;
  }
  .cardapio-lista {
    gap: 20vh;
  }
}
</style>
