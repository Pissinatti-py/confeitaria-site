<script setup lang="ts">
import { ref } from 'vue'
import DoceIlustracao from './DoceIlustracao.vue'
import { NOME_CONFEITARIA, capa, whatsapp } from '@/content'
import { usePonteiro } from '@/ponteiro'
import capaNinho from '@/assets/fotos/site/capa-ninho.webp'
import capaMorangoffe from '@/assets/fotos/site/capa-morangoffe.webp'

const palco = ref<HTMLElement | null>(null)
const { mover, sair } = usePonteiro(palco)
</script>

<template>
  <header ref="palco" class="capa ganache grao" @pointermove="mover" @pointerleave="sair">
    <div class="capa-camada capa-brilho"></div>
    <div class="capa-doce capa-doce--a">
      <DoceIlustracao :foto="capaNinho" class="doce-a" />
    </div>
    <div class="capa-doce capa-doce--b">
      <DoceIlustracao :foto="capaMorangoffe" class="doce-b" />
    </div>
    <div class="capa-luz"></div>

    <div>
      <p class="marca">{{ NOME_CONFEITARIA }}</p>
      <h1>
        {{ capa.titulo }} <em>{{ capa.tituloEnfase }}</em>
      </h1>
      <p class="capa-sub">{{ capa.subtitulo }}</p>
      <a class="botao" :href="whatsapp(capa.mensagem)" target="_blank" rel="noopener">
        {{ capa.botao }}
      </a>
    </div>
    <p class="role">{{ capa.role }}</p>
  </header>
</template>

<style scoped>
.capa {
  --fio: 4%;
  position: relative;
  min-height: 100svh;
  display: grid;
  place-items: center;
  overflow: clip;
  isolation: isolate;
  text-align: center;
  padding: 10vh 6vw calc(var(--fundido) * 0.75 + 3rem);
  color: var(--merengue);
  transition:
    --mx 0.7s cubic-bezier(0.2, 0.7, 0.2, 1),
    --my 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.capa-camada {
  position: absolute;
  inset: -12%;
  z-index: -1;
  translate: calc(var(--mx, 0) * var(--f) * 1px) calc(var(--my, 0) * var(--f) * 1px);
}
.capa-brilho {
  --f: 32;
  background:
    radial-gradient(38% 42% at 30% 34%, rgba(170, 26, 72, 0.4), transparent 70%),
    radial-gradient(34% 38% at 72% 66%, rgba(176, 59, 84, 0.32), transparent 72%);
}
.capa-doce {
  position: absolute;
  z-index: -1;
  translate: calc(var(--mx, 0) * var(--f) * 1px) calc(var(--my, 0) * var(--f) * 1px);
  animation: servir 1.4s cubic-bezier(0.2, 0.7, 0.2, 1) 0.1s both;
}
.capa-doce::before {
  content: '';
  position: absolute;
  inset: 4%;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(0, 0, 0, 0.7) 45%, transparent);
  translate: calc(var(--mx, 0) * -30%) calc(14% + var(--my, 0) * -30%);
  animation: respira 6s ease-in-out infinite alternate;
}
.capa-doce--a {
  --f: 46;
  top: 11%;
  left: 7%;
}
.capa-doce--b {
  --f: 78;
  bottom: 5%;
  right: 4%;
  animation-delay: 0.35s;
}
.capa-doce--b::before {
  animation-duration: 7.5s;
}
.doce-a,
.doce-b {
  transform: perspective(600px) rotateX(calc(var(--my, 0) * -32deg))
    rotateY(calc(var(--mx, 0) * 32deg));
  animation: paira 6s ease-in-out infinite alternate;
}
.doce-a {
  width: clamp(130px, 19vw, 260px);
}
.doce-b {
  width: clamp(150px, 21vw, 300px);
  animation-duration: 7.5s;
}
.doce-a :deep(.doce-foto) {
  animation: gira 60s linear infinite;
}
@keyframes servir {
  from {
    opacity: 0;
    transform: translateY(8%) scale(0.94);
  }
}
@keyframes paira {
  to {
    translate: 0 -5%;
  }
}
@keyframes respira {
  to {
    opacity: 0.55;
    scale: 0.9;
  }
}
@keyframes gira {
  to {
    rotate: 1turn;
  }
}

.marca {
  display: inline-block;
  font-family: var(--cursiva);
  font-size: clamp(3rem, 7.5vw, 5.5rem);
  line-height: 1.15;
  margin: 0;
  padding: 0.1em 0.25em;
  color: var(--carmim-claro);
  filter: drop-shadow(0 0 18px rgba(170, 26, 72, 0.45))
    drop-shadow(0 2px 1px rgba(23, 16, 13, 0.6));
}
@supports (background-clip: text) or (-webkit-background-clip: text) {
  .marca {
    background:
      linear-gradient(110deg, transparent 40%, rgba(255, 247, 243, 0.85) 50%, transparent 60%) 105%
        0 / 250% 100% no-repeat,
      linear-gradient(180deg, #f08aa6 0%, var(--carmim-claro) 55%, var(--carmim) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: brilho-passa 6s ease-in-out infinite;
  }
}
@keyframes brilho-passa {
  0%,
  55% {
    background-position:
      105% 0,
      0 0;
  }
  100% {
    background-position:
      -5% 0,
      0 0;
  }
}
.capa-luz {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: linear-gradient(
    110deg,
    transparent 38%,
    rgba(255, 247, 243, 0.06) 50%,
    transparent 62%
  );
  translate: calc(-65% - 25svh) 0;
  animation: luz-passa 6s ease-in-out infinite;
}
@keyframes luz-passa {
  0%,
  55% {
    translate: calc(-65% - 25svh) 0;
  }
  100% {
    translate: calc(65% + 25svh) 0;
  }
}
h1 {
  font-size: clamp(2.7rem, 8.5vw, 6rem);
  line-height: 0.95;
  letter-spacing: -0.025em;
  margin: 0.3em 0 0.35em;
  max-width: 13ch;
}
h1 em {
  font-family: var(--cursiva);
  font-style: normal;
  font-size: 1.3em;
  letter-spacing: 0;
  line-height: 1;
}
.capa-sub {
  max-width: 42ch;
  margin: 0 auto;
  color: rgba(248, 237, 231, 0.78);
  font-size: clamp(1rem, 1.7vw, 1.18rem);
}
.botao {
  margin-top: 2.2rem;
  box-shadow:
    0 0 0 1px rgba(224, 88, 126, 0.5),
    0 10px 30px rgba(170, 26, 72, 0.45);
}
.botao:hover {
  translate: 0 -2px;
  box-shadow:
    0 0 0 1px var(--carmim-claro),
    0 14px 38px rgba(170, 26, 72, 0.65);
}
.role {
  position: absolute;
  left: 50%;
  bottom: calc(var(--fundido) * 0.75);
  translate: -50% 0;
  margin: 0;
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(248, 237, 231, 0.45);
}
@supports (animation-timeline: scroll()) {
  .role {
    animation: role-some linear both;
    animation-timeline: scroll(root);
    animation-range: 0 45vh;
  }
}
@keyframes role-some {
  to {
    opacity: 0;
  }
}

@media (max-width: 599px) {
  .capa-doce--a {
    top: 3%;
    left: -9%;
  }
  .capa-doce--b {
    bottom: 2%;
    right: -12%;
  }
  .doce-a {
    width: 120px;
  }
  .doce-b {
    width: 140px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .capa-camada,
  .capa-doce,
  .botao {
    transition: none;
    translate: none;
  }
  .marca,
  .capa-luz,
  .capa-doce,
  .capa-doce::before,
  .doce-a,
  .doce-b,
  .doce-a :deep(.doce-foto) {
    animation: none;
  }
}
</style>
