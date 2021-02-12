import Axios, {AxiosResponse} from 'axios';

export class GeolocationService {
  private static getDeviceIP(): Promise<AxiosResponse> {
    return Axios.get('https://api.ipify.org');
  }

  static requestGeolocation(): Promise<AxiosResponse> {
    return this.getDeviceIP().then(({data}) =>
      Axios.get(`https://api.ipgeolocationapi.com/geolocate/${data}`),
    );
  }
}
