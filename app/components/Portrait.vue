<template>
  <div class="pointer-events-none hidden md:block absolute inset-y-0 right-0 w-1/2">
    <div class="h-full hidden lg:block">
      <div class="absolute  bottom-0 xl:top-20 lg:flex lg:items-center lg:justify-center">
<!--        <NuxtImg-->
<!--            src="/photo-full-downsized.png"-->
<!--            alt="portrait"-->
<!--            class="w-auto h-auto max-w-full sm:max-w-full md:max-w-none md:max-h-none shrink-0"-->
<!--            densities="1x 2x"-->
<!--        />-->

        <img
            src="/photo-full-downsized.png"
            alt="portrait"
            class="w-auto h-auto max-w-full sm:max-w-full md:max-w-none md:max-h-none shrink-0"
        />
      </div>
    </div>
  </div>

  <div class="absolute inset-x-0 bottom-0 overflow-hidden flex items-center justify-center lg:hidden [@media(orientation:landscape)]:hidden">
    <img
        src="/photo-full-downsized.png"
        alt="portrait"
        class="relative max-w-none w-[140%] translate-x-24 translate-y-16 object-contain drop-shadow-xl opacity-5 dark:opacity-5"
    />
  </div>

<!--  <div class="absolute inset-x-0 bottom-0 overflow-hidden hidden [@media(orientation:landscape)]:block">-->
<!--    <img-->
<!--        src="/portrait-head.png"-->
<!--        alt="portrait"-->
<!--        class="block mx-auto object-cover opacity-5"-->
<!--    />-->
<!--  </div>-->




</template>
<script setup lang="ts">
</script>