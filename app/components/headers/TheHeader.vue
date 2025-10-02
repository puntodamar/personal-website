<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <div class="mx-auto max-w-7xl">
      <div class="px-6 pt-6 lg:max-w-2xl lg:pr-0 lg:pl-8">
        <nav class="flex items-center justify-between lg:justify-start" aria-label="Global">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">{{appConfig.site.title}}</span>
            <img :alt="appConfig.site.title" class="h-8 w-auto dark:hidden" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" />
            <img :alt="appConfig.site.title" class="h-8 w-auto not-dark:hidden" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-text lg:hidden " @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
          <div class="hidden lg:ml-12 lg:flex lg:gap-x-14">
            <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm/6 font-semibold text-text">{{ item.name }}</a>
          </div>
        </nav>
      </div>
    </div>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-app p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10  dark:sm:ring-gray-100/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">={{appConfig.site.title}}</span>
            <img class="h-8 w-auto dark:hidden" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            <img class="h-8 w-auto not-dark:hidden" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5">{{ item.name }}</a>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5">Log in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
const appConfig = useAppConfig()

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
  { name: 'Log in', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>