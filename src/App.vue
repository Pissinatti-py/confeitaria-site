<script setup lang="ts">
import CapaSection from './components/CapaSection.vue'
import CardapioSection from './components/CardapioSection.vue'
import EncomendaSection from './components/EncomendaSection.vue'
import HistoriaSection from './components/HistoriaSection.vue'
import FaqSection from './components/FaqSection.vue'
import ChamadaSection from './components/ChamadaSection.vue'
import RodapeSection from './components/RodapeSection.vue'
import IconeWhatsapp from './components/IconeWhatsapp.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { capa, whatsapp } from '@/content'

const fio = ref<HTMLElement | null>(null)
const secaoAtual = ref('')
let observador: IntersectionObserver | undefined

onMounted(() => {
  observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting || !fio.value) continue
        secaoAtual.value = entrada.target.tagName
        const estilo = getComputedStyle(entrada.target)
        const x = estilo.getPropertyValue('--fio').trim()
        if (!x) continue
        fio.value.style.setProperty('--fio-x', x)
        fio.value.style.setProperty(
          '--fio-cor',
          estilo.getPropertyValue('--fio-cor').trim() || null,
        )
      }
    },
    { rootMargin: '-50% 0px -50% 0px' },
  )
  document
    .querySelectorAll('#app > :is(header, section, footer)')
    .forEach((el) => observador!.observe(el))
})

onUnmounted(() => observador?.disconnect())
</script>

<template>
  <div ref="fio" class="fio" aria-hidden="true"></div>
  <CapaSection />
  <CardapioSection />
  <EncomendaSection />
  <HistoriaSection />
  <FaqSection />
  <ChamadaSection />
  <RodapeSection />
  <a
    class="flutuante"
    :class="{ visivel: secaoAtual === 'SECTION' }"
    :inert="secaoAtual !== 'SECTION'"
    :href="whatsapp(capa.mensagem)"
    target="_blank"
    rel="noopener"
    aria-label="Pedir pelo WhatsApp"
  >
    <IconeWhatsapp width="26" height="26" />
  </a>
</template>

<style scoped>
@property --fio-cor {
  syntax: '<color>';
  inherits: false;
  initial-value: #e0587e;
}
.fio {
  --fio-x: 4%;
  position: absolute;
  top: 0;
  bottom: 13em;
  left: var(--fio-x);
  z-index: 5;
  width: 1px;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--fio-cor) 22vh,
    var(--fio-cor) calc(100% - 22vh),
    transparent
  );
  transition:
    left 0.9s cubic-bezier(0.6, 0, 0.2, 1),
    --fio-cor 0.6s;
}
@media (max-width: 899px) {
  .fio {
    display: none;
  }
}
.flutuante {
  position: fixed;
  right: clamp(1rem, 3vw, 2rem);
  bottom: clamp(1rem, 3vw, 2rem);
  z-index: 20;
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: var(--carmim);
  color: var(--merengue-2);
  box-shadow:
    0 0 0 1px rgba(224, 88, 126, 0.5),
    0 10px 28px rgba(0, 0, 0, 0.45);
  opacity: 0;
  translate: 0 1rem;
  pointer-events: none;
  transition:
    opacity 0.35s ease,
    translate 0.35s ease,
    background 0.25s ease;
}
.flutuante.visivel {
  opacity: 1;
  translate: 0 0;
  pointer-events: auto;
}
.flutuante:hover {
  background: var(--carmim-escuro);
}
@media (prefers-reduced-motion: reduce) {
  .fio,
  .flutuante {
    transition: none;
  }
}
</style>
