import Axios from 'axios'

import { baseURL } from './App'

export const Http = Axios.create({ baseURL })