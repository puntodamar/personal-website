
<template>
  <hero/>
</template>

<script setup>
  useSeoMeta({ title: "Punto Damar | About Me" })
  definePageMeta({
    overflowHidden : true,
  })
  import Hero from "~/components/Hero.vue";
</script>
