import type { Ref } from 'vue'

const semReducao = window.matchMedia('(prefers-reduced-motion: no-preference)').matches

export function usePonteiro(alvo: Ref<HTMLElement | null>) {
  function mover(e: PointerEvent) {
    if (!semReducao || !alvo.value) return
    const r = alvo.value.getBoundingClientRect()
    alvo.value.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    alvo.value.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }

  function sair() {
    alvo.value?.style.setProperty('--mx', '0')
    alvo.value?.style.setProperty('--my', '0')
  }

  return { mover, sair }
}
