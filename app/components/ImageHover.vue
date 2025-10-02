<template>

  <div class="relative aspect-square w-8 flex items-center justify-center group ">
    <img :src="src" :alt="text" class="max-w-[80%] max-h-[80%] object-contain group-hover:cursor-pointer">
    <div class="absolute top-10 left-1/2 -translate-x-1/2 w-20 text-accent text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 rounded-lg">
      {{ props.text }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  src: {type: String, required: true},
  text: {type: String, required: true},
})
</script>