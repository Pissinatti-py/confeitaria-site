<script setup lang="ts">
withDefaults(
  defineProps<{
    variante?: 'pistache' | 'framboesa' | 'caramelo'
    frutas?: number
    foto?: string
  }>(),
  { frutas: 0 },
)
</script>

<template>
  <div
    class="doce"
    :class="[variante && `doce--${variante}`, foto && 'doce--foto']"
    aria-hidden="true"
  >
    <img v-if="foto" class="doce-foto" :src="foto" alt="" decoding="async" />
    <span v-for="n in frutas" :key="n" class="fruta" />
  </div>
</template>

<style scoped>
.doce {
  position: relative;
  width: clamp(160px, 24vw, 280px);
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(
      circle at calc(38% + var(--mx, 0) * 70%) calc(32% + var(--my, 0) * 70%),
      rgba(255, 255, 255, 0.32),
      transparent 55%
    ),
    conic-gradient(from 20deg, #3e2418, #6a4227, #3e2418, #5a3620, #3e2418);
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.14) inset,
    0 12px 22px -14px rgba(0, 0, 0, 0.6);
}
.doce::before {
  content: '';
  position: absolute;
  inset: 11%;
  border-radius: 50%;
  background: radial-gradient(circle at 42% 36%, #7e4a2c, #351f14 78%);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.07) inset;
}
.doce--pistache::before {
  background: radial-gradient(circle at 42% 36%, #a8bc88, #4c5f38 78%);
}
.doce--framboesa::before {
  background: radial-gradient(circle at 42% 36%, #d06178, #741f2f 78%);
}
.doce--caramelo::before {
  background: radial-gradient(circle at 42% 36%, #edb877, #a5642c 78%);
}
.doce-foto {
  position: absolute;
  inset: 11%;
  width: 78%;
  height: 78%;
  border-radius: 50%;
  object-fit: cover;
}
.doce--foto::after {
  content: '';
  position: absolute;
  inset: 11%;
  border-radius: 50%;
  background:
    radial-gradient(
      circle at calc(34% + var(--mx, 0) * 80%) calc(28% + var(--my, 0) * 80%),
      rgba(255, 247, 243, 0.2),
      transparent 42%
    ),
    radial-gradient(circle, transparent 58%, rgba(23, 16, 13, 0.42) 100%),
    rgba(206, 133, 68, 0.1);
  pointer-events: none;
}
.fruta {
  position: absolute;
  width: 15%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #d9576f, #6c1a29 75%);
  box-shadow: 0 6px 12px -4px rgba(0, 0, 0, 0.6);
}
.fruta:nth-child(1) {
  top: 24%;
  left: 30%;
}
.fruta:nth-child(2) {
  top: 44%;
  left: 55%;
}
.fruta:nth-child(3) {
  top: 62%;
  left: 32%;
}
.doce--pistache .fruta {
  background: radial-gradient(circle at 35% 30%, #b7ce93, #4e6236 75%);
}
</style>
