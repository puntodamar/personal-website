<template>
  <div class="pointer-events-none hidden md:block absolute inset-y-0 right-0 w-1/2">
    <div class="h-full hidden lg:block bg-gray-800 [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
      <div class="absolute  bottom-0 xl:top-20 lg:flex lg:items-center lg:justify-center">
        <img
            src="/photo-full-downsized.png"
            alt="portrait"
            class="w-auto object-cover drop-shadow-xl opacity-10 lg:opacity-100"
        />
      </div>
    </div>
  </div>

  <div class="absolute inset-x-0 bottom-0 lg:hidden overflow-hidden flex items-center justify-center">
    <img
        src="/photo-full-downsized.png"
        alt="portrait"
        class="relative max-w-none w-[140%] translate-x-24 translate-y-16 object-contain drop-shadow-xl opacity-5 dark:opacity-3"
    />
  </div>


</template>
<script setup lang="ts">
</script>