<template>
  <div class="mx-auto max-w-7xl">
    <div class="px-6 pt-6 lg:max-w-2xl lg:pr-0 lg:pl-8">
      <nav class="flex items-center justify-between lg:justify-start" aria-label="Global">
        <NuxtLink href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">{{props.title}}</span>
          <img :alt="props.title" class="h-8 w-auto dark:hidden" :src="props.logo" />
          <img :alt="props.title" class="h-8 w-auto not-dark:hidden" :src="props.logo" />
        </NuxtLink>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-text lg:hidden hover:cursor-pointer" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
        <div class="hidden lg:ml-12 lg:flex lg:gap-x-14 lg:visible">
          <div  v-for="item in props.navigation" :key="item.name"  class="flex flex-col">
            <NuxtLink
                :to="item.href"
                class="text-sm/6 font-semibold "
                :class="navClass(item)">
              {{ item.name }}
            </NuxtLink>
            <div class="border-b-2 border-b-accent-2" :class="navBorderClass(item)"></div>
          </div>


        </div>
      </nav>
    </div>
  </div>
</template>
<script setup>
import {Bars3Icon} from "@heroicons/vue/24/outline";
const props = defineProps({
  navigation: {type: Array, required: true},
  title: {type: String, required: true},
  logo: {type: String, required: true},
})

const route = useRoute()
const navBorderClass = (item) =>  route.name === item.route ? 'visible' : 'hidden'
const navClass = (item)  =>  route.name === item.route ? 'text-accent-2' : 'text-text'

const mobileMenuOpen = inject("mobileMenuOpen")
</script>