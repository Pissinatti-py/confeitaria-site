<script setup lang="ts">
import DoceIlustracao from './DoceIlustracao.vue'
import { encomenda } from '@/content'
</script>

<template>
  <section class="encomenda">
    <div class="encomenda-quadro">
      <div class="encomenda-foto framboesa-fundo grao">
        <DoceIlustracao variante="pistache" :frutas="3" class="doce-grande" />
      </div>
    </div>
    <div class="encomenda-texto">
      <h2>{{ encomenda.titulo }}</h2>
      <p>{{ encomenda.texto }}</p>
    </div>
  </section>
</template>

<style scoped>
.encomenda {
  position: relative;
  height: 100svh;
  display: grid;
  align-items: end;
  justify-items: center;
  padding-bottom: 6vh;
  color: var(--merengue);
}
.encomenda-quadro {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
/* o quadro precisa de um objeto com bordas: escala em fundo liso não se enxerga */
.encomenda-foto {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}
.doce-grande {
  width: clamp(200px, 32vw, 420px);
}
.encomenda-texto {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 2rem 0;
  max-width: 24ch;
}
.encomenda-texto h2 {
  font-size: clamp(2rem, 5.5vw, 3.6rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
}
.encomenda-texto p {
  margin: 1rem auto 0;
  color: rgba(248, 237, 231, 0.8);
  max-width: 30ch;
}

@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .encomenda {
      view-timeline-name: --sec-encomenda;
    }
    .encomenda-foto {
      animation: aproxima linear both;
      animation-timeline: --sec-encomenda;
      animation-range: cover 0% cover 100%;
    }
  }
}
</style>
