<template>
  <div class="bg-app max-h-screen">
    <the-header />
    <div class="h-dvh max-h-screen overflow-hidden my-auto">
      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 pt-14 w-full px-6 sm:max-w-lg md:max-w-3xl sm:mx-auto sm:text-center lg:max-w-2xl lg:mx-0 lg:text-left">

          <div class="relative mx-6 my-auto h-screen md:mt-20 lg:mt-0 flex items-center">
            <div class=" max-w-2xl lg:mx-0 lg:max-w-xl ">
              <h1 class="text-5xl font-semibold tracking-tight text-pretty text-app sm:text-7xl text-center lg:text-left block">Punto Damar P.</h1>
              <div class="border-b-2 md:border-b-5 border-accent-2 mt-5 max-w-120 mx-auto lg:mx-0"></div>
              <p class="mt-8 text-lg font-medium text-pretty text-app sm:text-xl/8 text-center lg:text-left">
                A fullstack engineer who always strive for the best and hungry for new knowledge.
              </p>

              <div class="font-light text-pretty text-app mt-8 text-center lg:text-left">
                <p>I can thrive in agile and fast-paced startup settings, contributing to projects with tight deadlines.</p>
                <p class="mt-5 md:mt-0">Skilled in handling complex system configurations and with multiple business workflows.</p>
                <p class="mt-5 md:mt-0">Able to build systems that scale and perform reliably under high usage.</p>
              </div>


              <div class="grid auto-cols-max grid-flow-col gap-5  mt-20 justify-center place-items-center md:place-items-start">

<!--                <img class="size-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/330px-PHP-logo.svg.png" alt="php">-->
                <image-hover text="Golang" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Go_gopher_mascot_bw.png/250px-Go_gopher_mascot_bw.png"/>
                <image-hover text="Nuxt" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/330px-Nuxt_logo.svg.png"/>
                <image-hover text="Tailwind CSS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/330px-Tailwind_CSS_Logo.svg.png"/>
                <image-hover text="Vue.js" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/330px-Vue.js_Logo_2.svg.png"/>
                <image-hover text="Ruby on Rails" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png"/>
                <image-hover text="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/250px-Typescript_logo_2020.svg.png"/>
                <image-hover text="React.js" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/330px-React-icon.svg.png"/>

<!--                <img class="size-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/198px-Ruby_logo.svg.png" alt="ruby">-->

              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div class="absolute lg:hidden bottom-0 right-0 flex items-center justify-center">
        <img
            src="/photo-full-downsized.png"
            alt="portrait"
            class="w-auto object-cover drop-shadow-xl opacity-10"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

  import TheHeader from "~/components/headers/TheHeader.vue";
  import ImageHover from "~/components/ImageHover.vue";
</script>