<script setup lang="ts">
import { ref } from 'vue'
import DoceIlustracao from './DoceIlustracao.vue'
import { NOME_CONFEITARIA, capa } from '@/content'

const palco = ref<HTMLElement | null>(null)
const semReducao = window.matchMedia('(prefers-reduced-motion: no-preference)').matches

function mover(e: PointerEvent) {
  if (!semReducao || !palco.value) return
  const r = palco.value.getBoundingClientRect()
  palco.value.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
  palco.value.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
}

function sair() {
  palco.value?.style.setProperty('--mx', '0')
  palco.value?.style.setProperty('--my', '0')
}
</script>

<template>
  <header ref="palco" class="capa ganache grao" @pointermove="mover" @pointerleave="sair">
    <div class="capa-camada capa-brilho"></div>
    <div class="capa-doce capa-doce--a">
      <DoceIlustracao variante="pistache" :frutas="2" class="doce-a" />
    </div>
    <div class="capa-doce capa-doce--b">
      <DoceIlustracao variante="framboesa" :frutas="3" class="doce-b" />
    </div>

    <div>
      <p class="marca">{{ NOME_CONFEITARIA }}</p>
      <h1>
        {{ capa.titulo }} <em>{{ capa.tituloEnfase }}</em>
      </h1>
      <p class="capa-sub">{{ capa.subtitulo }}</p>
      <p class="role">{{ capa.role }}</p>
    </div>
  </header>
</template>

<style scoped>
.capa {
  position: relative;
  min-height: 94svh;
  display: grid;
  place-items: center;
  overflow: clip;
  isolation: isolate;
  text-align: center;
  padding: 10vh 6vw;
  color: var(--merengue);
}
.capa-camada {
  position: absolute;
  inset: -12%;
  z-index: -1;
  translate: calc(var(--mx, 0) * var(--f) * 1px) calc(var(--my, 0) * var(--f) * 1px);
  transition: translate 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.capa-brilho {
  --f: 32;
  background:
    radial-gradient(38% 42% at 30% 34%, rgba(206, 133, 68, 0.4), transparent 70%),
    radial-gradient(34% 38% at 72% 66%, rgba(176, 59, 84, 0.32), transparent 72%);
}
.capa-doce {
  position: absolute;
  z-index: -1;
  translate: calc(var(--mx, 0) * var(--f) * 1px) calc(var(--my, 0) * var(--f) * 1px);
  transition: translate 0.45s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.capa-doce--a {
  --f: 46;
  top: 11%;
  left: 7%;
}
.capa-doce--b {
  --f: 78;
  bottom: 7%;
  right: 8%;
}
.doce-a {
  width: clamp(90px, 13vw, 170px);
}
.doce-b {
  width: clamp(110px, 16vw, 210px);
}

.marca {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--caramelo);
}
h1 {
  font-size: clamp(2.7rem, 8.5vw, 6rem);
  line-height: 0.95;
  letter-spacing: -0.025em;
  margin: 0.3em 0 0.35em;
  max-width: 13ch;
}
h1 em {
  font-style: italic;
}
.capa-sub {
  max-width: 42ch;
  margin: 0 auto;
  color: rgba(248, 237, 231, 0.78);
  font-size: clamp(1rem, 1.7vw, 1.18rem);
}
.role {
  margin-top: 2.6rem;
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(248, 237, 231, 0.45);
}

@media (prefers-reduced-motion: reduce) {
  .capa-camada,
  .capa-doce {
    transition: none;
    translate: none;
  }
}
</style>
