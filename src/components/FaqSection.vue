<script setup lang="ts">
import { faq } from '@/content'
</script>

<template>
  <section class="faq">
    <div class="faq-interno">
      <h2>{{ faq.titulo }}</h2>
      <details v-for="item in faq.itens" :key="item.pergunta" name="faq">
        <summary>
          {{ item.pergunta }}
          <span class="sinal" aria-hidden="true"></span>
        </summary>
        <p>{{ item.resposta }}</p>
      </details>
    </div>
  </section>
</template>

<style scoped>
.faq {
  --fio: 4%;
  min-height: 100svh;
  display: grid;
  place-items: center;
  background: var(--cacau);
  color: var(--merengue);
  padding: clamp(6rem, 14vh, 9rem) 6vw;
}
.faq-interno {
  width: min(44rem, 100%);
}
h2 {
  margin-bottom: 2.4rem;
  text-align: center;
  font-size: clamp(2.6rem, 6.5vw, 4.2rem);
  line-height: 1.15;
}
details {
  border-top: 1px solid rgba(224, 88, 126, 0.35);
}
details:last-of-type {
  border-bottom: 1px solid rgba(224, 88, 126, 0.35);
}
summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1.3rem 0;
  cursor: pointer;
  list-style: none;
  font-family: var(--display);
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  line-height: 1.3;
  transition: color 0.25s ease;
}
summary::-webkit-details-marker {
  display: none;
}
summary:hover,
details[open] summary {
  color: var(--carmim-claro);
}
.sinal {
  position: relative;
  flex: none;
  width: 14px;
  height: 14px;
  transition: rotate 0.3s ease;
}
.sinal::before,
.sinal::after {
  content: '';
  position: absolute;
  inset: 6.5px 0;
  background: var(--carmim-claro);
}
.sinal::after {
  rotate: 90deg;
}
details[open] .sinal {
  rotate: 45deg;
}
details p {
  margin: 0 0 1.4rem;
  max-width: 60ch;
  color: rgba(248, 237, 231, 0.76);
  line-height: 1.65;
  opacity: 0;
  translate: 0 -0.4rem;
  transition:
    opacity 0.25s ease,
    translate 0.25s ease;
}
details[open] p {
  opacity: 1;
  translate: 0 0;
}
.faq {
  interpolate-size: allow-keywords;
}
details::details-content {
  block-size: 0;
  overflow: hidden;
  transition:
    block-size 0.25s ease,
    content-visibility 0.25s allow-discrete;
}
details[open]::details-content {
  block-size: auto;
}

@media (prefers-reduced-motion: reduce) {
  summary,
  .sinal,
  details p,
  details::details-content {
    transition: none;
  }
}
</style>
