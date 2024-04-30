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
        this.champion = data.data
      })
    }
  }
})
