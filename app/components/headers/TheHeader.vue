<template>
  <header :class="headerClasses">
    <desktop-header :navigation="navigation" :title="appConfig.site.title" :logo="appConfig.site.nuxtLogo" />
    <mobile-header :navigation="navigation" :title="appConfig.site.title" :logo="appConfig.site.nuxtLogo"  />
    <page-theme class="absolute top-6 right-20"/>
  </header>
</template>
<script setup>
import { ref } from 'vue'

import MobileHeader from "~/components/headers/MobileHeader.vue";
import DesktopHeader from "~/components/headers/DesktopHeader.vue";

const appConfig = useAppConfig()
const props = defineProps({
  absolute: {type: Boolean, default: true},
})

const headerClasses = computed(() => props.absolute ? 'inset-x-0 top-0 z-50 absolute' : 'inset-x-0 top-0 z-50' )
const navigation = [
  { name: 'About Me', href: '/' },
  { name: 'Experience', href: '#' },
  { name: 'Side Projects', href: '#' },
  { name: 'Contact', href: '/contact' },
]

const mobileMenuOpen = ref(false)
provide('mobileMenuOpen', mobileMenuOpen)
</script>