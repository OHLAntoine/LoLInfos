<template>
  <div class="lg:px-24 px-6 text-center">
    <h1 class="font-bold text-2xl">Bienvenue sur la page de visualisation d'équipe</h1>
  </div>
  <!-- <pre>{{ store.champions }}</pre> -->
</template>

<script setup>
import { useChampionStore } from '@/stores'
import { onMounted } from 'vue'

const store = useChampionStore()
onMounted(() => {
  store.getAllChampions()
})
</script>
