<script setup lang="ts">
import { encomenda, whatsapp } from '@/content'
</script>

<template>
  <section class="encomenda">
    <div class="encomenda-quadro">
      <figure class="encomenda-foto">
        <img
          :src="encomenda.foto"
          :alt="encomenda.fotoAlt"
          width="1280"
          height="1600"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </div>
    <div class="encomenda-texto">
      <h2>{{ encomenda.titulo }}</h2>
      <span class="ornamento" aria-hidden="true"></span>
      <p>{{ encomenda.texto }}</p>
      <a class="botao" :href="whatsapp(encomenda.mensagem)" target="_blank" rel="noopener">
        {{ encomenda.botao }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.encomenda {
  --fio: calc(100% - 6vw);
  --zoom: 1.15;
  position: relative;
  height: 100svh;
  display: grid;
  align-items: end;
  justify-items: center;
  padding-bottom: 6vh;
  color: var(--merengue);
  background: var(--cacau);
}
.encomenda-quadro {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.encomenda-quadro::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(23, 16, 13, 0.92),
    rgba(23, 16, 13, 0.62) 38%,
    transparent 66%
  );
  pointer-events: none;
}
.encomenda-foto {
  position: absolute;
  inset: 0;
  margin: 0;
  overflow: hidden;
}
.encomenda-foto img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 38%;
}
.encomenda-texto {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 2rem 0;
  max-width: min(92vw, 30rem);
}
.encomenda-texto h2 {
  font-size: clamp(2.6rem, 7vw, 4.6rem);
  line-height: 1.15;
  white-space: pre-line;
  text-shadow:
    0 1px 2px rgba(23, 16, 13, 0.5),
    0 4px 22px rgba(23, 16, 13, 0.65);
}
.ornamento {
  position: relative;
  display: block;
  width: 6.5rem;
  height: 1px;
  margin: 1.2rem auto;
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
.encomenda-texto p {
  margin: 0 auto;
  color: rgba(248, 237, 231, 0.88);
  max-width: 30ch;
  line-height: 1.65;
}
.botao {
  margin-top: 1.8rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

@media (min-width: 900px) {
  .encomenda {
    --zoom: 1.04;
    align-items: center;
    justify-items: center;
    padding: 0 4vw 0 calc(6vw + min(42vw, 67svh) + 12px);
    background:
      radial-gradient(70% 78% at 72.5% 50%, transparent 42%, rgba(0, 0, 0, 0.6) 100%),
      #241409;
  }
  .encomenda-quadro::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 22% 31%, rgba(255, 226, 170, 0.32) 0, transparent 7px) 37px 91px / 443px 389px,
      radial-gradient(circle at 71% 64%, rgba(255, 226, 170, 0.26) 0, transparent 6px) 211px 13px / 557px 479px,
      radial-gradient(circle at 17% 23%, rgba(236, 196, 128, 0.85) 0 1.2px, transparent 2.2px) 0 47px / 197px 173px,
      radial-gradient(circle at 63% 71%, rgba(255, 232, 190, 0.7) 0 1px, transparent 1.9px) 83px 0 / 241px 211px,
      radial-gradient(circle at 81% 12%, rgba(212, 169, 90, 0.65) 0 1.6px, transparent 2.8px) 149px 131px / 317px 293px,
      radial-gradient(circle at 38% 88%, rgba(255, 240, 214, 0.5) 0 0.8px, transparent 1.6px) 19px 67px / 137px 151px,
      radial-gradient(circle at 52% 44%, rgba(212, 169, 90, 0.4) 0 0.9px, transparent 1.7px) 59px 23px / 101px 127px;
    mask-image: radial-gradient(26% 34% at 72.5% 50%, transparent 55%, #000 100%);
    pointer-events: none;
  }
  .encomenda::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: var(--grao);
    opacity: 0.08;
    pointer-events: none;
  }
  .encomenda-quadro::after {
    background: radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(23, 16, 13, 0.55));
  }
  .encomenda-foto {
    inset: auto;
    top: 50%;
    left: 6vw;
    translate: 0 -50%;
    width: min(42vw, 67svh);
    aspect-ratio: 4 / 5;
    outline: 1px solid rgba(212, 169, 90, 0.5);
    outline-offset: 12px;
    box-shadow: 0 40px 90px -30px rgba(0, 0, 0, 0.8);
  }
  .encomenda-foto img {
    object-position: 50% 50%;
  }
  .encomenda-texto {
    padding: 0;
    max-width: 32rem;
  }
  .encomenda-texto h2 {
    font-size: clamp(2.8rem, 4.6vw, 4.4rem);
    line-height: 1.2;
  }
  .ornamento {
    width: 8rem;
    margin: 1.6rem auto 1.5rem;
  }
  .encomenda-texto p {
    font-size: 1.12rem;
    max-width: 32ch;
  }
}

@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .encomenda {
      view-timeline-name: --sec-encomenda;
    }
    .encomenda-foto img {
      animation: aproxima-leve linear both;
      animation-timeline: --sec-encomenda;
      animation-range: cover 0% cover 100%;
    }
  }
}
@keyframes aproxima-leve {
  from {
    scale: 1;
  }
  to {
    scale: var(--zoom);
  }
}
</style>
