import axios from './index';
import {API_URL} from '@env';
import {Geolocation} from '@models/Geolocation';
import {AxiosResponse} from 'axios';

export class WeatherService {
  static getCurrentWeather({
    latitude,
    longitude,
  }: Geolocation): Promise<AxiosResponse> {
    return axios.get(
      `${API_URL}/weather/current?lat=${latitude}&lon=${longitude}`,
    );
  }
}
