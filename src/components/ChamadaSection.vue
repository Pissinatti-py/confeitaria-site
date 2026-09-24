<script setup lang="ts">
import IconeInstagram from './IconeInstagram.vue'
import { chamada, loja, whatsapp } from '@/content'
</script>

<template>
  <section class="chamada">
    <div class="chamada-interno">
      <h2>{{ chamada.titulo }}</h2>
      <p>{{ chamada.texto }}</p>
      <a class="botao" :href="whatsapp(chamada.mensagem)" target="_blank" rel="noopener">{{ chamada.botao }}</a>
      <a
        class="insta"
        :href="loja.instagramUrl"
        target="_blank"
        rel="noopener"
        :aria-label="`${chamada.instagram} no Instagram`"
      >
        <IconeInstagram />
        {{ chamada.instagram }}
      </a>
      <p class="prazo">{{ chamada.prazo }}</p>
    </div>
  </section>
</template>

<style scoped>
.chamada {
  --fio: calc(50% - 20rem);
  --fio-cor: var(--carmim);
  min-height: 100svh;
  display: grid;
  place-items: center;
  background: var(--merengue-2);
  padding: clamp(5rem, 12vw, 9rem) 6vw;
  text-align: center;
}
.chamada-interno {
  max-width: 46ch;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
}
h2 {
  font-size: clamp(2.6rem, 6.5vw, 4.2rem);
  line-height: 1.15;
}
p {
  margin: 0;
  color: var(--fumaca);
}
.botao {
  margin-top: 0.8rem;
}
.insta {
  color: var(--carmim);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  padding-bottom: 3px;
  background: linear-gradient(currentColor, currentColor) 0 100% / 0 1px no-repeat;
  transition: background-size 0.3s ease;
}
.insta:hover {
  background-size: 100% 1px;
}
@media (prefers-reduced-motion: reduce) {
  .insta {
    transition: none;
  }
}
.prazo {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--pistache);
}
</style>
