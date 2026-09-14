<script setup lang="ts">
import { WHATSAPP_URL, chamada } from '@/content'
</script>

<template>
  <section class="chamada">
    <div class="chamada-interno">
      <h2>{{ chamada.titulo }}</h2>
      <p>{{ chamada.texto }}</p>
      <a class="botao" :href="WHATSAPP_URL" target="_blank" rel="noopener">{{ chamada.botao }}</a>
      <p class="prazo">{{ chamada.prazo }}</p>
    </div>
  </section>
</template>

<style scoped>
.chamada {
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
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
}
p {
  margin: 0;
  color: var(--fumaca);
}
.botao {
  margin-top: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--framboesa);
  color: var(--merengue-2);
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 1.9rem;
  border-radius: 999px;
  text-decoration: none;
}
.botao:hover {
  background: #973146;
}
.prazo {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--pistache);
}
</style>
