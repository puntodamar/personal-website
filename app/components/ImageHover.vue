<template>
  <div class="flex flex-col items-center justify-center gap-y-2 group ">
    <img class="size-7 object-contain group-hover:cursor-pointer" :src="props.src" :alt="props.text">
    <div class="text-accent text-center text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
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