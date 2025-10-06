<template>
  <div>
    <div class="mx-auto max-w-7xl">
      <div class="relative z-10 pt-5 lg:pt-14 w-full px-6 lg:px-0 sm:max-w-lg md:w-screen sm:mx-auto sm:text-center lg:max-w-2xl lg:mx-0 lg:text-left">

        <div class="relative mx-6 my-auto h-screen lg:mt-0 flex items-center">
          <div class=" max-w-2xl lg:mx-0 lg:max-w-xl ">
            <div class="mx-auto size-30 mb-10 overflow-hidden rounded-full outline-[0.1rem] outline-heading lg:hidden landscape:hidden">
              <img
                  src="/portrait-head.png"
                  alt="portrait"
                  class="w-auto object-cover drop-shadow-xl"
              />
            </div>
            <h1 class="text-5xl font-semibold tracking-tight text-pretty text-heading sm:text-7xl text-center lg:text-left block">Punto Damar</h1>
            <!--          <div class="border-b-2 md:border-b-5  dark:border-text mt-5 max-w-100 mx-auto lg:mx-0"></div>-->
            <p class="mt-8 text-lg font-medium text-pretty text-accent sm:text-xl/8 text-center lg:text-left">
              A fullstack engineer who always strive for the best and hungry for new knowledge.
            </p>

            <div class="dark:font-light text-pretty text-app mt-8 text-center lg:text-left">
              <p>Thrives in agile and fast-paced startup settings, contributing to projects with tight deadlines.</p>
              <p class="mt-5 md:mt-0 lg:mt-5">Skilled in handling complex system configurations and with multiple business workflows.</p>
              <p class="mt-5 md:mt-0 lg:mt-5">Able to build systems that scale and perform reliably under high usage.</p>
            </div>

            <div class="flex flex-row justify-center md:justify-start mt-20 gap-2 md:gap-5">
              <a href="https://github.com/puntodamar" target="_blank" class="border-white rounded-full"> <image-hover text="Github" :src="appConfig.site.logo.github"/></a>
              <a href="https://www.linkedin.com/in/punto-damar-p-6b11b0107/" target="_blank"><image-hover text="Linkedin" :src="appConfig.site.logo.linkedin"/></a>
            </div>
            <!--          <div class="grid grid-cols-7 gap-5 mt-20 justify-center place-items-center md:place-items-start">-->
            <!--            <a href="https://github.com/puntodamar" target="_blank" class="border-white rounded-full"> <image-hover text="Github" :src="appConfig.site.logo.github"/></a>-->
            <!--            <a href="https://www.linkedin.com/in/punto-damar-p-6b11b0107/" target="_blank"><image-hover text="Linkedin" :src="appConfig.site.logo.linkedin"/></a>-->
            <!--          </div>-->
          </div>
        </div>
      </div>
    </div>

    <portrait/>
  </div>
</template>

<script setup>

  import ImageHover from "~/components/ImageHover.vue";
  import Portrait from "~/components/Portrait.vue";

  const appConfig = useAppConfig();
</script>