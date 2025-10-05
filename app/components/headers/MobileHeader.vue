<template>
  <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
    <div class="fixed inset-0 z-50" />
    <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-app p-6 sm:max-w-sm">
      <div class="flex items-center justify-between">
        <NuxtLink href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">={{props.title}}</span>
          <img class="h-8 w-auto dark:hidden" :src="props.logo"  alt="" />
          <img class="h-8 w-auto not-dark:hidden" :src="props.logo" alt="" />
        </NuxtLink>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-app hover:cursor-pointer" @click="mobileMenuOpen = false">
          <span class="sr-only">Close menu</span>
          <XMarkIcon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y ">
          <div class="space-y-2 py-6">
            <div v-for="item in props.navigation" :key="item.name" class="flex flex-col">
              <NuxtLink
                  @click="mobileMenuOpen = false"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold "
                  :class="navClass(item)"
                  :to="item.href" >
                {{ item.name }}
              </NuxtLink>
              <div class="border-b-2 border-b-accent-2" :class="navBorderClass(item)"></div>
            </div>

          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</template>
<script setup>
import {Dialog, DialogPanel} from "@headlessui/vue";
import {XMarkIcon} from "@heroicons/vue/24/outline";


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