<template>
  <section class="lg:px-24 px-6">
    <form class="text-center">
      <label for="name" class="me-4 font-semibold">Champion recherché :</label>
      <select
        name="name"
        id="name"
        class="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        v-model="champ"
        @change="store.getChampion(champ)"
      >
        <option value="">Choisissez votre champion.</option>
        <option v-for="(item, index) in store.champions" :key="index" :value="index">
          {{ index }}
        </option>
      </select>
    </form>
  </section>

  <section class="flex justify-center items-center h-full" v-if="champ == ''">
    <h2 class="font-bold text-2xl text-center">
      Veuillez selectionner un champion pour afficher ses informations.
    </h2>
  </section>
  <unique-champion
    :champion="store.champion"
    :passive-name="store.champion.passive.name"
    :passive-description="store.passiveDescription"
    :passive-image="store.champion.passive.image.full"
    v-else
  />
</template>

<script setup>
import { useChampionStore } from '@/stores'
import { ref, onMounted } from 'vue'
import UniqueChampion from '@/components/champion/UniqueChampion.vue'

const champ = ref('')

const store = useChampionStore()
onMounted(() => {
  store.getAllChampions()
})
</script>
