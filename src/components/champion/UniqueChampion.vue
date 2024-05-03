<template>
  <section class="h-full lg:px-24 px-6 flex flex-col items-center lg:flex-row lg:items-start gap-8">
    <img :src="store.getChampionImage(champion.id)" alt="image" class="h-full lg:w-auto w-1/2" />
    <div class="flex flex-col gap-2 h-full">
      <div class="flex items-center gap-2 justify-center md:justify-start">
        <h2 class="font-bold text-2xl">{{ champion.name }}</h2>
        <span
          v-for="(tag, index) in champion.tags"
          :key="index"
          class="bg-gray-300 rounded px-1 mb-1"
          >{{ tag }}</span
        >
      </div>
      <div class="flex gap-8 flex-grow flex-col md:flex-row items-center md:items-stretch">
        <div class="flex flex-col justify-start w-full md:w-1/2 gap-2">
          <h4 class="font-semibold text-xl italic text-gray-800">{{ champion.title }}</h4>
          <ul class="flex flex-col flex-grow justify-around items-start gap-4">
            <li v-for="(tip, index) in champion.enemytips" :key="index" class="flex justify-center">
              <img
                src="../../assets/icons/icons8-erreur-50.png"
                alt="warning icon"
                style="height: 1rem; width: 1rem"
                class="mt-1 me-4"
              />
              {{ tip }}
            </li>
            <li class="flex flex-col gap-2">
              <h4 class="font-semibold text-xl">
                {{ passiveName }} <span class="font-normal">(passif)</span>
              </h4>
              <div class="flex items-center gap-4">
                <img
                  :src="store.getPassiveImage(passiveImage)"
                  alt="Passive image"
                  style="height: 64px; width: 64px"
                />
                <p>{{ passiveDescription }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex flex-col justify-start w-full md:w-1/2">
          <h4 class="font-semibold text-xl mb-2">Sorts :</h4>
          <ul class="flex flex-col flex-grow justify-around">
            <li v-for="(spell, index) in champion.spells" :key="index">
              <div class="flex items-center gap-4">
                <img
                  :src="store.getSpellImage(spell.id)"
                  alt="Image du sort"
                  style="height: 64px; width: 64px"
                />
                <div class="flex flex-col">
                  <h5 class="font-semibold">{{ spellBind[index] + ' - ' + spell.name }}</h5>
                  <p>
                    Délai de récupération :
                    <span class="font-medium">{{ spell.cooldownBurn }}</span>
                  </p>
                  <p>
                    Coût en mana : <span class="font-medium">{{ spell.costBurn }}</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useChampionStore } from '@/stores'
const store = useChampionStore()
const spellBind = ['Q', 'W', 'E', 'R']
defineProps({
  champion: Object,
  passiveName: String,
  passiveDescription: String,
  passiveImage: String
})
</script>
