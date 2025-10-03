<template>
  <div class="bg-app max-h-screen">
    <the-header />
    <div class="h-dvh max-h-screen my-auto" :class="[overflowHidden ? 'overflow-hidden' : '']">
      <main>
        <slot />
      </main>
    </div>
  </div>

</template>
<script setup>
const route = useRoute()
const overflowHidden = computed(() => route.meta.overflowHidden === true)
console.log(overflowHidden.value)
import TheHeader from "~/components/headers/TheHeader.vue";
</script>