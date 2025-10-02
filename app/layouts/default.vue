<template>
  <div class="bg-app max-h-screen">
    <the-header />
    <div class="h-dvh max-h-screen overflow-hidden my-auto">
      <main>
        <slot />
      </main>
    </div>
  </div>

</template>
<script setup lang="ts">
import TheHeader from "~/components/headers/TheHeader.vue";
</script>