import axios from 'axios'
import { type Level } from '../lib'

export const getCurrentTestDescription = async (title: string, level: Level) => {
  const response = await axios.get(`/api/get-current-test-description`, {
    params: {
      title,
      level,
    }
  })

  return response.data
}

