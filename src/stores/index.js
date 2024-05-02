import { defineStore } from 'pinia'
import axiosClient from '@/axiosClient'

export const useChampionStore = defineStore('champions', {
  state: () => ({
    champions: [],
    team: [],
    champion: []
  }),
  getters: '',
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
    getChampionImage(name) {
      return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`
    },
    getSpellImage(id) {
      return `https://ddragon.leagueoflegends.com/cdn/14.9.1/img/spell/${id}.png`
    },
    getPassiveImage(name) {
      return `https://ddragon.leagueoflegends.com/cdn/14.9.1/img/passive/${name}`
    }
  }
})
