import axios from 'axios'

export const API_URL = ' http://starlord.hackerearth.com/kickstarter'

export const getHighlyRatedKickstarterProjects = async () => {
  const res = await axios.get(API_URL)
  return res.data
}
