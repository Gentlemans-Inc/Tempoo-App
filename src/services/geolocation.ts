import {Geolocation as GeoInterface} from '@models/Geolocation';
import Axios from 'axios';

const getDeviceIP = async () => {
  try {
    const response = await fetch('https://api.ipify.org');
    const ip = await response.text();
    return ip;
  } catch (e) {
    console.warn(e);
    return '';
  }
};

export const RequestGeolocation = async (): Promise<GeoInterface> => {
  const userIP = await getDeviceIP();
  try {
    const uri = 'https://api.ipgeolocationapi.com/geolocate/' + userIP;
    const {data} = await Axios.get(uri);
    const userGeo: GeoInterface = {
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    };
    return userGeo;
  } catch (e) {
    throw new Error('Cannot complete request: Request Geolocation');
  }
};
