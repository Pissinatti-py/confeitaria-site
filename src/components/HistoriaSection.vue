<script setup lang="ts">
import IconeInstagram from './IconeInstagram.vue'
import { historia, loja } from '@/content'
</script>

<template>
  <section class="historia ganache grao">
    <div class="historia-camada h-lenta">
      <img class="foto foto-a" :src="historia.fotoA" alt="" loading="lazy" decoding="async" />
    </div>
    <div class="historia-camada h-media">
      <img class="foto foto-b" :src="historia.fotoB" alt="" loading="lazy" decoding="async" />
    </div>
    <div class="historia-texto">
      <h2>{{ historia.titulo }}</h2>
      <span class="ornamento" aria-hidden="true"></span>
      <p>{{ historia.texto }}</p>
      <a class="insta" :href="loja.instagramUrl" target="_blank" rel="noopener">
        <IconeInstagram />
        {{ historia.instagram }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.historia {
  --fio: 3%;
  position: relative;
  min-height: 100svh;
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
}
.foto {
  position: absolute;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  filter: saturate(0.9) brightness(0.82);
  mask-image:
    linear-gradient(to right, transparent, #000 20%, #000 80%, transparent),
    linear-gradient(to bottom, transparent, #000 16%, #000 84%, transparent);
  mask-composite: intersect;
}
.foto-a {
  top: 24%;
  left: 6vw;
  width: clamp(190px, 26vw, 390px);
}
.foto-b {
  bottom: 23%;
  right: 6vw;
  width: clamp(170px, 24vw, 350px);
}
.historia-texto {
  position: relative;
  z-index: 3;
  max-width: min(92vw, 30rem);
}
.historia-texto h2 {
  font-size: clamp(3rem, 7.4vw, 5.4rem);
  line-height: 1.12;
  text-shadow:
    0 1px 2px rgba(23, 16, 13, 0.5),
    0 4px 22px rgba(23, 16, 13, 0.7);
}
.ornamento {
  position: relative;
  display: block;
  width: 6.5rem;
  height: 1px;
  margin: 1.4rem auto;
  background: linear-gradient(
    to right,
    transparent,
    rgba(224, 88, 126, 0.7) 30%,
    rgba(224, 88, 126, 0.7) 70%,
    transparent
  );
}
.ornamento::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  translate: -50% -50%;
  rotate: 45deg;
  background: var(--carmim-claro);
}
.historia-texto p {
  color: rgba(248, 237, 231, 0.86);
  margin: 0 auto;
  max-width: 32ch;
  line-height: 1.65;
  text-shadow: 0 1px 10px rgba(23, 16, 13, 0.75);
}
.insta {
  margin-top: 1.8rem;
  color: var(--carmim-claro);
  text-shadow: 0 1px 10px rgba(23, 16, 13, 0.75);
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


@media (min-width: 900px) {
  .ornamento {
    width: 8rem;
    margin: 1.8rem auto 1.6rem;
  }
  .historia-texto p {
    font-size: 1.18rem;
  }
}

@media (max-width: 899px) {
  .foto {
    opacity: 0.4;
  }
  .foto-a {
    top: 12%;
    left: 0;
    width: 56vw;
  }
  .foto-b {
    bottom: 10%;
    right: 0;
    width: 52vw;
  }
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
