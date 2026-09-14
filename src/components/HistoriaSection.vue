<script setup lang="ts">
import DoceIlustracao from './DoceIlustracao.vue'
import { historia } from '@/content'
</script>

<template>
  <section class="historia ganache grao">
    <div class="historia-camada h-lenta">
      <DoceIlustracao class="doce-fundo" />
    </div>
    <div class="historia-camada h-media">
      <DoceIlustracao variante="pistache" :frutas="2" class="doce-frente" />
    </div>
    <div class="historia-texto">
      <h2>{{ historia.titulo }}</h2>
      <p>{{ historia.texto }}</p>
    </div>
  </section>
</template>

<style scoped>
.historia {
  position: relative;
  min-height: 110svh;
  display: grid;
  place-items: center;
  overflow: clip;
  isolation: isolate;
  color: var(--merengue);
  text-align: center;
  padding: 8vh 6vw;
}
.historia-camada {
  position: absolute;
  inset: -22% 0;
  display: grid;
  place-items: center;
}
.doce-fundo {
  opacity: 0.35;
  width: min(72vw, 540px);
}
.doce-frente {
  opacity: 0.8;
}
.historia-texto {
  position: relative;
  z-index: 3;
  max-width: 26ch;
}
.historia-texto h2 {
  font-size: clamp(1.8rem, 4.6vw, 3.1rem);
  line-height: 1.08;
}
.historia-texto p {
  color: rgba(248, 237, 231, 0.78);
  margin-top: 1rem;
}

@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .historia {
      view-timeline-name: --sec-historia;
    }
    .h-lenta {
      animation: flutua-lento linear both;
      animation-timeline: --sec-historia;
      animation-range: entry 0% exit 100%;
    }
    .h-media {
      animation: flutua-medio linear both;
      animation-timeline: --sec-historia;
      animation-range: entry 0% exit 100%;
    }
  }
}
</style>
