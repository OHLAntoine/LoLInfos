import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://ddragon.leagueoflegends.com/cdn/14.8.1/data/fr_FR/'
})

export default axiosClient