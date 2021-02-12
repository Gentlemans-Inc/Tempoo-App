import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StatusBar} from 'react-native';
import {Button} from '@components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  Card,
  Container,
  Header,
  Image,
  ImageContainer,
  Label,
  LabelContainer,
  Row,
  Temperature,
  Title,
  Value,
} from './styles';
import {CurrentWeather} from '@models/Weather';
import {useMount} from '@hooks';
import {WeatherService} from '@services/weather';
import {GeolocationService} from '@services/geolocation';

const Home: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({
    currentTemperature: 0,
    description: '',
    humidity: 0,
    main: '',
    maximumTemperature: 0,
    minimumTemperature: 0,
    windSpeed: 0,
    status: '',
  });
  useMount(() => {
    GeolocationService.requestGeolocation()
      .then(({data}) => {
        return {
          latitude: data.geo.latitude,
          longitude: data.geo.longitude,
        };
      })
      .then(async (geo) => {
        const {data} = await WeatherService.getCurrentWeather(geo);
        setCurrentWeather({
          currentTemperature: data.data.current_temperature,
          description: data.data.description,
          humidity: data.data.humidity,
          main: data.data.main,
          maximumTemperature: data.data.maximum_temperature,
          minimumTemperature: data.data.minimum_temperature,
          windSpeed: data.data.wind_speed,
          status: data.data.status,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header>
        <Title>Home</Title>
        <MaterialIcons color="#000" name="notifications-none" size={hp(3.8)} />
      </Header>
      <Card>
        <ImageContainer>
          <Image source={require('../../assets/images/sun-cloud.png')} />
        </ImageContainer>
        <Temperature>
          {currentWeather.currentTemperature.toFixed(1)}°
        </Temperature>
        <Row>
          <LabelContainer>
            <Fontisto color="#000" name="wind" size={hp(3)} />
            <Label>Wind:</Label>
          </LabelContainer>
          <Value>{currentWeather.windSpeed.toFixed(1)}km/h</Value>
        </Row>
        <Row>
          <LabelContainer>
            <Feather color="#000" name="droplet" size={hp(3.1)} />
            <Label>Hum:</Label>
          </LabelContainer>
          <Value>{currentWeather.humidity}%</Value>
        </Row>
      </Card>
      <Button label="Forecast Report" onPress={() => {}} />
    </Container>
  );
};

export {Home};
