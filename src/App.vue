<script setup lang="ts">
import CapaSection from './components/CapaSection.vue'
import CardapioSection from './components/CardapioSection.vue'
import EncomendaSection from './components/EncomendaSection.vue'
import HistoriaSection from './components/HistoriaSection.vue'
import ChamadaSection from './components/ChamadaSection.vue'
import RodapeSection from './components/RodapeSection.vue'
import { aviso, avisoDestaque } from '@/content'
</script>

<template>
  <p class="aviso">
    {{ aviso }} <b>{{ avisoDestaque }}</b>
  </p>
  <CapaSection />
  <CardapioSection />
  <EncomendaSection />
  <HistoriaSection />
  <ChamadaSection />
  <RodapeSection />
</template>

<style scoped>
.aviso {
  margin: 0;
  background: var(--cacau);
  color: rgba(248, 237, 231, 0.72);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  text-align: center;
  padding: 0.75rem 6vw;
  line-height: 1.5;
}
.aviso b {
  color: var(--caramelo);
  font-weight: 400;
}
</style>
