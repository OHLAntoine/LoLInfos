<template>
  <section class="lg:px-24 px-6">
    <h1 class="font-bold text-2xl mb-4">Bienvenue sur la page de visualisation de champion</h1>
    <form class="text-center">
      <label for="name" class="me-4 font-semibold">Champion recherché :</label>
      <select
        name="name"
        id="name"
        class="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        v-model="name"
        @change="store.getChampion(name)"
      >
        <option value="">Choisissez votre champion.</option>
        <option v-for="(item, index) in store.champions" :key="index" :value="index">
          {{ index }}
        </option>
      </select>
    </form>
  </section>

  <pre>{{ store.champion }}</pre>
</template>

<script setup>
import { useChampionStore } from '@/stores'
import { ref, onMounted } from 'vue'

const name = ref('')

const store = useChampionStore()
onMounted(() => {
  store.getAllChampions()
})
</script>
