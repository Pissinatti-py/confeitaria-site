<script setup lang="ts">
import logo from '@/assets/logo.svg'
import IconeInstagram from './IconeInstagram.vue'
import { NOME_CONFEITARIA, WHATSAPP_URL, desenvolvedor, loja } from '@/content'

const mapaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${loja.endereco}, ${loja.cidade}, ${loja.cep}`,
)}`
const telefoneUrl = `tel:+55${loja.telefone.replace(/\D/g, '')}`
const ano = new Date().getFullYear()

function voltarAoTopo() {
  const suave = window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  window.scrollTo({ top: 0, behavior: suave ? 'smooth' : 'auto' })
}

let toques = 0
let ultimoToque = 0

function tocarLogo() {
  const agora = Date.now()
  toques = agora - ultimoToque < 800 ? toques + 1 : 1
  ultimoToque = agora
  if (toques === 5) location.assign('/admin/')
}
</script>

<template>
  <footer class="rodape">
    <img
      class="marca"
      :src="logo"
      :alt="NOME_CONFEITARIA"
      width="795"
      height="318"
      @click="tocarLogo"
    />
    <span class="ornamento" aria-hidden="true"></span>

    <div class="colunas">
      <section>
        <h3>Visite</h3>
        <address>
          {{ loja.endereco }}<br />
          {{ loja.cidade }} · {{ loja.cep }}
        </address>
        <a class="link" :href="mapaUrl" target="_blank" rel="noopener">Como chegar ↗</a>
      </section>

      <section>
        <h3>Fale com a gente</h3>
        <ul>
          <li>
            <a class="link" :href="WHATSAPP_URL" target="_blank" rel="noopener">WhatsApp</a>
          </li>
          <li>
            <a class="link" :href="telefoneUrl">{{ loja.telefone }}</a>
          </li>
          <li>
            <a class="link link-icone" :href="loja.instagramUrl" target="_blank" rel="noopener">
              <IconeInstagram />
              {{ loja.instagram }}
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Horário</h3>
        <dl>
          <div v-for="h in loja.horarios" :key="h.dias">
            <dt>{{ h.dias }}</dt>
            <dd>{{ h.horas }}</dd>
          </div>
        </dl>
      </section>
    </div>

    <p class="assinatura">
      © {{ ano }} {{ NOME_CONFEITARIA }} · Site por
      <a :href="desenvolvedor.url" target="_blank" rel="noopener">{{ desenvolvedor.nome }}</a>
      <a
        class="circulo insta-circulo"
        :href="loja.instagramUrl"
        target="_blank"
        rel="noopener"
        :aria-label="`Instagram da ${NOME_CONFEITARIA}`"
      >
        <IconeInstagram />
      </a>
      <button class="circulo topo" type="button" aria-label="Voltar ao início" @click="voltarAoTopo">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M6 14l6-6 6 6" />
        </svg>
      </button>
    </p>
  </footer>
</template>

<style scoped>
.rodape {
  --fio: 4%;
  position: relative;
  background: var(--cacau);
  color: rgba(248, 237, 231, 0.72);
  padding: clamp(4rem, 9vw, 6rem) 6vw 2rem;
  text-align: center;
  font-size: 0.95rem;
}
.rodape > * {
  position: relative;
  z-index: 7;
}
.marca {
  display: block;
  width: clamp(14rem, 30vw, 21rem);
  height: auto;
  margin-inline: auto;
  padding: 1.1rem 1.6rem;
  background: var(--merengue-2);
  border-radius: 12px;
  outline: 1px solid var(--carmim);
  outline-offset: -6px;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.35);
  touch-action: manipulation;
}
.ornamento {
  position: relative;
  display: block;
  width: 6.5rem;
  height: 1px;
  margin: 1.6rem auto 3rem;
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
.colunas {
  display: grid;
  gap: 2.6rem;
  max-width: 60rem;
  margin-inline: auto;
}
h3 {
  margin-bottom: 0.9rem;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--carmim-claro);
}
address {
  font-style: normal;
  line-height: 1.7;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.45rem;
}
dl {
  margin: 0;
  display: grid;
  gap: 0.45rem;
}
dl div {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
}
dt::after {
  content: ':';
}
dd {
  margin: 0;
  color: var(--merengue);
}
.link {
  color: var(--merengue);
  text-decoration: none;
  background: linear-gradient(var(--carmim-claro), var(--carmim-claro)) 0 100% / 0 1px no-repeat;
  transition: background-size 0.3s ease;
}
.link:hover {
  background-size: 100% 1px;
}
address + .link {
  display: inline-block;
  margin-top: 0.6rem;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--carmim-claro);
}
.link-icone {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}
.assinatura {
  margin: 4rem auto 0;
  padding-top: 1.6rem;
  max-width: 60rem;
  border-top: 1px solid rgba(248, 237, 231, 0.1);
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(248, 237, 231, 0.42);
  padding-inline: 3.4rem;
}
.circulo {
  position: absolute;
  top: calc(50% + 0.8rem);
  translate: 0 -50%;
  display: grid;
  place-items: center;
  width: 2.6rem;
  height: 2.6rem;
  padding: 0;
  border: 1px solid var(--carmim-claro);
  border-radius: 50%;
  background: transparent;
  color: var(--carmim-claro);
  cursor: pointer;
  transition:
    background 0.25s ease,
    color 0.25s ease;
}
.topo {
  right: 0;
}
.insta-circulo {
  left: 0;
}
.circulo:hover {
  background: var(--carmim);
  border-color: var(--carmim);
  color: var(--merengue-2);
}
.topo svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.assinatura a:not(.circulo) {
  color: rgba(248, 237, 231, 0.7);
  text-underline-offset: 3px;
}
.assinatura a:not(.circulo):hover {
  color: var(--carmim-claro);
}

@media (min-width: 900px) {
  .colunas {
    grid-template-columns: repeat(3, 1fr);
    text-align: left;
  }
  .colunas section:nth-child(2) {
    text-align: center;
  }
  .colunas section:nth-child(3) {
    text-align: right;
  }
  .colunas section:nth-child(3) dl div {
    justify-content: flex-end;
  }
}

@media (prefers-reduced-motion: reduce) {
  .link,
  .circulo {
    transition: none;
  }
}
</style>
