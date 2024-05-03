import { defineStore } from 'pinia'
import axiosClient from '@/axiosClient'

export const useChampionStore = defineStore('champions', {
  state: () => ({
    champions: [],
    team: [],
    champion: []
  }),
  getters: {
    passiveDescription: (state) => state.champion.passive.description.replace(/<.+?>/g, '')
  },
  actions: {
    getAllChampions() {
      axiosClient.get('champion.json').then(({ data }) => {
        this.champions = data.data
      })
    },
    getChampion(name) {
      axiosClient.get(`champion/${name}.json`).then(({ data }) => {
        this.champion = data.data[name]
      })
    },
    getChampionImage(id) {
      return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`
    },
    getSpellImage(id) {
      return `https://ddragon.leagueoflegends.com/cdn/14.9.1/img/spell/${id}.png`
    },
    getPassiveImage(name) {
      return `https://ddragon.leagueoflegends.com/cdn/14.9.1/img/passive/${name}`
    }
  }
})
