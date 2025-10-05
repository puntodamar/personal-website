<template>
  <button @click="onClick" :class="buttonClasses">
    <component :is="isDark ? SunIcon : MoonIcon" class="size-5" aria-hidden="true" />
  </button>
</template>

<script setup>

import { useDarkMode } from '@/composables/useDarkMode.js';
import { useRippleToggle } from '@/composables/useRippleToggle.js';
import {SunIcon, MoonIcon} from "@heroicons/vue/24/solid";
const { isDark, toggle } = useDarkMode()

const buttonClasses = computed(() => `float-right rounded-lg p-2 outline-1 ${props.bg} ${props.text}`)

const props = defineProps({
  bg: {type: String, default: 'bg-[#3A3E4F] dark:bg-[#FAF9F6]'},
  text: {type: String, default: 'text-[#FAF9F6] dark:text-[#3A3E4F]'},
})


const ripple = useRippleToggle({
  duration: 550,
  opacity: 0.9,
})

const onClick = (e) => {
  ripple(e, () => {
    toggle()

  })

}
</script>
