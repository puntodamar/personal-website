<template>
  <div class="mx-auto max-w-7xl">
    <div class="relative z-10 pt-14 w-full px-6 lg:px-0 sm:max-w-lg md:w-screen sm:mx-auto sm:text-center lg:max-w-2xl lg:mx-0 lg:text-left">

      <div class="relative mx-6 my-auto h-screen md:mt-20 lg:mt-0 flex items-center">
        <div class=" max-w-2xl lg:mx-0 lg:max-w-xl ">
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


          <div class="grid grid-cols-7 gap-5 mt-20 justify-center place-items-center md:place-items-start">

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

  <portrait/>
</template>

<script setup>

  import ImageHover from "~/components/ImageHover.vue";
  import Portrait from "~/components/Portrait.vue";
</script>