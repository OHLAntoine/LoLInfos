<template>
  <div class="lg:px-24 px-6 pb-4 text-center">
    <h1 class="font-bold text-2xl">Bienvenue sur la page de visualisation d'équipe</h1>
  </div>

  <div class="px-6 xl:grid xl:grid-rows-1 xl:grid-cols-5">
    <div class="inline-flex flex-col">
      <form class="text-center">
        <label for="topChampion" class="me-4 font-semibold">Top Lane :</label>
        <select
          name="topChampion"
          id="topChampion"
          class="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          v-model="topChampion"
          @change="store.getTopChampion(topChampion)"
        >
          <option value="">Choisissez votre champion.</option>
          <option v-for="(item, index) in store.champions" :key="index" :value="index">
            {{ index }}
          </option>
        </select>
      </form>

      <div class="inline-flex flex-col">
        <h4 v-if="topChampion !== ''" class="font-semibold text-xl mb-2">Sorts :</h4>
        <ul class="inline-flex flex-col justify-around gap-4">
          <li v-for="(spell, index) in store.topChampion.spells" :key="index">
            <div class="flex items-center gap-4">
              <img
                :src="store.getSpellImage(spell.id)"
                alt="Image du sort"
                style="height: 64px; width: 64px"
              />
              <div class="flex flex-col text-sm">
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

    <div class="inline-flex flex-col">
      <form class="text-center">
        <label for="jungleChampion" class="me-4 font-semibold">Jungle :</label>
        <select
          name="jungleChampion"
          id="jungleChampion"
          class="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          v-model="jungleChampion"
          @change="store.getJungleChampion(jungleChampion)"
        >
          <option value="">Choisissez votre champion.</option>
          <option v-for="(item, index) in store.champions" :key="index" :value="index">
            {{ index }}
          </option>
        </select>
      </form>

      <div class="inline-flex flex-col">
        <h4 v-if="jungleChampion !== ''" class="font-semibold text-xl mb-2">Sorts :</h4>
        <ul class="inline-flex flex-col justify-around gap-4">
          <li v-for="(spell, index) in store.jungleChampion.spells" :key="index">
            <div class="flex items-center gap-4">
              <img
                :src="store.getSpellImage(spell.id)"
                alt="Image du sort"
                style="height: 64px; width: 64px"
              />
              <div class="flex flex-col text-sm">
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

    <div class="inline-flex flex-col">
      <form class="text-center">
        <label for="midChampion" class="me-4 font-semibold">Mid Lane :</label>
        <select
          name="midChampion"
          id="midChampion"
          class="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          v-model="midChampion"
          @change="store.getMidChampion(midChampion)"
        >
          <option value="">Choisissez votre champion.</option>
          <option v-for="(item, index) in store.champions" :key="index" :value="index">
            {{ index }}
          </option>
        </select>
      </form>

      <div class="inline-flex flex-col">
        <h4 v-if="midChampion !== ''" class="font-semibold text-xl mb-2">Sorts :</h4>
        <ul class="inline-flex flex-col justify-around gap-4">
          <li v-for="(spell, index) in store.midChampion.spells" :key="index">
            <div class="flex items-center gap-4">
              <img
                :src="store.getSpellImage(spell.id)"
                alt="Image du sort"
                style="height: 64px; width: 64px"
              />
              <div class="flex flex-col text-sm">
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

    <div class="inline-flex flex-col">
      <form class="text-center">
        <label for="bopChampion" class="me-4 font-semibold">Bot Lane :</label>
        <select
          name="botChampion"
          id="botChampion"
          class="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          v-model="botChampion"
          @change="store.getBotChampion(botChampion)"
        >
          <option value="">Choisissez votre champion.</option>
          <option v-for="(item, index) in store.champions" :key="index" :value="index">
            {{ index }}
          </option>
        </select>
      </form>

      <div class="inline-flex flex-col">
        <h4 v-if="botChampion !== ''" class="font-semibold text-xl mb-2">Sorts :</h4>
        <ul class="inline-flex flex-col justify-around gap-4">
          <li v-for="(spell, index) in store.botChampion.spells" :key="index">
            <div class="flex items-center gap-4">
              <img
                :src="store.getSpellImage(spell.id)"
                alt="Image du sort"
                style="height: 64px; width: 64px"
              />
              <div class="flex flex-col text-sm">
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

    <div class="inline-flex flex-col">
      <form class="text-center">
        <label for="supportChampion" class="me-4 font-semibold">Support :</label>
        <select
          name="supportChampion"
          id="supportChampion"
          class="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          v-model="supportChampion"
          @change="store.getSupportChampion(supportChampion)"
        >
          <option value="">Choisissez votre champion.</option>
          <option v-for="(item, index) in store.champions" :key="index" :value="index">
            {{ index }}
          </option>
        </select>
      </form>

      <div class="inline-flex flex-col">
        <h4 v-if="supportChampion !== ''" class="font-semibold text-xl mb-2">Sorts :</h4>
        <ul class="inline-flex flex-col justify-around gap-4">
          <li v-for="(spell, index) in store.supportChampion.spells" :key="index">
            <div class="flex items-center gap-4">
              <img
                :src="store.getSpellImage(spell.id)"
                alt="Image du sort"
                style="height: 64px; width: 64px"
              />
              <div class="flex flex-col text-sm">
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
</template>

<script setup>
import { useChampionStore } from '@/stores'
import { ref, onMounted } from 'vue'

const spellBind = ['Q', 'W', 'E', 'R']

const topChampion = ref('')
const jungleChampion = ref('')
const midChampion = ref('')
const botChampion = ref('')
const supportChampion = ref('')

const store = useChampionStore()
onMounted(() => {
  store.getAllChampions()
})
</script>
