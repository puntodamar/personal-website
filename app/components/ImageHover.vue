<template>
  <div
      class="relative aspect-square w-8 flex items-center justify-center"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      @focusin="hover = true"
      @focusout="hover = false">
    <img
        :src="props.src"
        :alt="props.text"
        class="max-w-[80%] max-h-[80%] object-contain"
        tabindex="0"
    />


    <div
        class="absolute z-50 top-10 left-1/2 -translate-x-1/2 w-20 text-center text-accent text-xs font-semibold px-2 py-1 rounded-lg bg-app transition-opacity duration-300"
        :class="hover ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        role="status"
        :aria-hidden="!hover">
      {{ props.text }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src:  { type: String, required: true },
  text: { type: String, required: true },
})

const hover = ref(false)
</script>
