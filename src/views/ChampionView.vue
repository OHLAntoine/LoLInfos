<template>
  <section class="lg:px-24 px-6">
    <h1 class="font-bold text-2xl mb-4">Bienvenue sur la page de visualisation de champion</h1>
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

  <section class="max-h-96 lg:px-24 px-6 flex gap-8" v-if="champ != ''">
    <img :src="store.getChampionImage(champ)" alt="image" style="height: 100%; width: 20%" />
    <div class="flex flex-col justify-start w-5/12">
      <div class="flex items-center gap-2">
        <h2 class="font-bold text-2xl">{{ store.champion.name }}</h2>
        <span
          v-for="(tag, index) in store.champion.tags"
          :key="index"
          class="bg-gray-300 rounded px-1 mb-1"
          >{{ tag }}</span
        >
      </div>
      <h4 class="font-semibold text-xl">{{ store.champion.title }}</h4>
      <ul class="flex flex-col flex-grow justify-around items-start">
        <li
          v-for="(tip, index) in store.champion.enemytips"
          :key="index"
          class="flex justify-center"
        >
          <img
            src="../assets/icons/icons8-erreur-50.png"
            alt="warning icon"
            style="height: 1rem; width: 1rem"
            class="mt-1 me-4"
          />
          {{ tip }}
        </li>
        <li>
          <h4 class="font-semibold text-xl">
            {{ store.champion.passive.name }} <span class="font-normal">(passif)</span>
          </h4>
          <div class="flex items-center gap-2">
            <img
              :src="store.getPassiveImage(store.champion.passive.image.full)"
              alt="Passive image"
              style="height: 64px; width: 64px"
            />
            <p>{{ store.champion.passive.description.replace(/\<.+?\>/g, '') }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex flex-col justify-start">
      <h4 class="font-semibold text-xl mb-2">Sorts :</h4>
      <ul class="flex flex-col flex-grow justify-around">
        <li v-for="(spell, index) in store.champion.spells" :key="index">
          <div class="flex items-center gap-4">
            <img
              :src="store.getSpellImage(spell.id)"
              alt="Image du sort"
              style="height: 64px; width: 64px"
            />
            <div class="flex flex-col">
              <h5 class="font-semibold">{{ spell.name }}</h5>
              <p>
                Délai de récupération : <span class="font-medium">{{ spell.cooldownBurn }}</span>
              </p>
              <p>
                Coût en mana : <span class="font-medium">{{ spell.costBurn }}</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useChampionStore } from '@/stores'
import { ref, onMounted } from 'vue'

const champ = ref('')

const store = useChampionStore()
onMounted(() => {
  store.getAllChampions()
})
</script>
