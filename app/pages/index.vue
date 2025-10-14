
<template>
  <hero/>
</template>

<script setup>
  useSeoMeta({
    title: "Punto Damar | About Me",
    ogTitle:  "Punto Damar | About Me",
    description: 'A fullstack engineer who always strive for the best and hungry for new knowledge',
    ogDescription: 'A fullstack engineer who always strive for the best and hungry for new knowledge',
  })

  definePageMeta({
    overflowHidden : true,


  })
  import Hero from "~/components/Hero.vue";
</script>
