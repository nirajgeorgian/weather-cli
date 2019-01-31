import * as dotenv from 'dotenv'
dotenv.config()

import { getWeather } from './util/getWeather'
import { Data } from './util/sample_data'

getWeather(Data)
