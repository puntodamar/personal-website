<template>
  <div class="px-8 mx-auto max-w-7xl">

    <div class="flex flex-col items-center justify-center h-screen lg:items-start">
      <div class="md:my-auto lg:my-0">
        <h1 class="text-5xl font-semibold tracking-tight text-pretty text-accent-2 sm:text-7xl text-center lg:text-left">
          Contact Me
        </h1>


        <dl class="w-full mt-15   divide-y divide-app/10 rounded-xl bg-bg text-app">

          <div class="flex flex-col lg:flex-row items-center gap-2 lg:gap-6 py-3" v-for="d in data" :key="d.field">
            <dt class="lg:basis-40 lg:shrink-0 font-semibold">{{d.field}}</dt>
            <dd class="break-words">
              <a :href="href(d)"
                 class="underline-offset-2 font-light text-sm md:text-base text-text hover:text-accent-2 block mx-auto max-w-[22ch] text-center [text-wrap:balance] break-words hyphens-auto md:inline md:max-w-none md:text-left md:[text-wrap:pretty] md:break-normal md:hyphens-none">
                {{ d.value }}
              </a>


            </dd>
          </div>

        </dl>
      </div>

    </div>

    <portrait/>
  </div>
</template>
<script setup>
import Portrait from "~/components/Portrait.vue";

const data = [
  {field: "Email", value: "punto.damar2@gmail.com"},
  {field: "Phone", value: "+6285729084638"},
  {field: "LinkedIn", value: "https://www.linkedin.com/in/punto-damar-p-6b11b0107/"},
  {field: "Address", value: "Bantul, D.I. Yogyakarta, Indonesia"},
]

const href = (d) => {
  switch (d.field) {
    case "Email":
      return `mailto:${d.email}`;
      case "Phone":
        return '#';
      case "LinkedIn":
        return d.value;

  }
}

useSeoMeta({ title: "Punto Damar | Contact" })
</script>