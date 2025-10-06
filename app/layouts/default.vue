<template>
  <div class="bg-app min-h-dvh" :class="[overflowHidden ? 'overflow-hidden' : '']">
    <the-header />

    <main class="relative">
      <div class="relative z-10">
        <slot />
      </div>
    </main>

    <div class="pointer-events-none hidden lg:block fixed inset-y-0 right-0 w-1/2 z-0">
      <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon
            :class="accentFillClass"
        points="18,0 100,0 100,100 0,100"
        />
      </svg>
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>


<script setup>
import TheHeader from '~/components/headers/TheHeader.vue'
const route = useRoute()

const accentFillClass = computed(() =>
    route.meta.accentFillColor ?? 'fill-gray-200 dark:fill-gray-800'
)
const overflowHidden = computed(() => route.meta.overflowHidden === true)
</script>
