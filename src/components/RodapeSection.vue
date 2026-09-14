<script setup lang="ts">
import { rodape } from '@/content'
</script>

<template>
  <footer class="rodape">
    <div class="rodape-interno">
      <p>
        {{ rodape.paragrafo1Inicio }} <b>{{ rodape.paragrafo1Destaque }}</b
        >{{ rodape.paragrafo1Fim }}
      </p>
      <p>{{ rodape.paragrafo2 }}</p>
    </div>
  </footer>
</template>

<style scoped>
.rodape {
  background: var(--cacau);
  color: rgba(248, 237, 231, 0.62);
  padding: 3rem 6vw;
  text-align: center;
  font-size: 0.92rem;
}
.rodape-interno {
  max-width: 52ch;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
b {
  color: var(--caramelo);
  font-weight: 500;
}
</style>
