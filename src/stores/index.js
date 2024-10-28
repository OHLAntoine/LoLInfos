import { defineStore } from 'pinia'
import axiosClient from '@/axiosClient'

export const useChampionStore = defineStore('champions', {
  state: () => ({
    champions: [],
    champion: [],
    topChampion: [],
    jungleChampion: [],
    midChampion: [],
    botChampion: [],
    supportChampion: []
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
    getTopChampion(name) {
      axiosClient.get(`champion/${name}.json`).then(({ data }) => {
        this.topChampion = data.data[name]
      })
    },
    getJungleChampion(name) {
      axiosClient.get(`champion/${name}.json`).then(({ data }) => {
        this.jungleChampion = data.data[name]
      })
    },
    getMidChampion(name) {
      axiosClient.get(`champion/${name}.json`).then(({ data }) => {
        this.midChampion = data.data[name]
      })
    },
    getBotChampion(name) {
      axiosClient.get(`champion/${name}.json`).then(({ data }) => {
        this.botChampion = data.data[name]
      })
    },
    getSupportChampion(name) {
      axiosClient.get(`champion/${name}.json`).then(({ data }) => {
        this.supportChampion = data.data[name]
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
