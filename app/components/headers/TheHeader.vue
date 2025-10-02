<template>
  <header class="absolute inset-x-0 top-0 z-50">

    <desktop-header :navigation="navigation" :title="appConfig.site.title" :logo="appConfig.site.nuxtLogo" />
    <mobile-header :navigation="navigation" :title="appConfig.site.title" :logo="appConfig.site.nuxtLogo"  />

  </header>
</template>
<script setup>
import { ref } from 'vue'

import MobileHeader from "~/components/headers/MobileHeader.vue";
import DesktopHeader from "~/components/headers/DesktopHeader.vue";
const appConfig = useAppConfig()

const navigation = [
  { name: 'About Me', href: '#' },
  { name: 'Experience', href: '#' },
  { name: 'Side Projects', href: '#' },
  { name: 'Contact Me', href: '#' },
]

const mobileMenuOpen = ref(false)
provide('mobileMenuOpen', mobileMenuOpen)
</script>