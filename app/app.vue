<template>
  <Analytics />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { Analytics } from '@vercel/analytics/nuxt';
useHead({
  // htmlAttrs: { class: 'dark' },
  bodyAttrs: { class: 'antialiased' }
})
</script>