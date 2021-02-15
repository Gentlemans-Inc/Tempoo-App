import React, {useContext, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from '@components';
import {useMount} from '@hooks';
import {StatusBar} from 'react-native';
import {AppContext} from '@models/AppContext';
import {CurrentWeather} from '@models/Weather';
import {WeatherService} from '@services/weather';
import {GeolocationService} from '@services/geolocation';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {darkTheme, lightTheme} from '@theme';
import {
  Card,
  Container,
  Header,
  Image,
  ImageContainer,
  Label,
  LabelContainer,
  Row,
  SwitchContainer,
  Switcher,
  Temperature,
  Title,
  Value,
} from './styles';

const Home: React.FC = () => {
  const {context, setContext} = useContext(AppContext);
  const [scheme, setScheme] = useState<'dark' | 'light'>(context.colorScheme);
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

  const onPressSwitch = () => {
    setScheme(scheme === 'dark' ? 'light' : 'dark');
    toggleTheme();
  };

  const toggleTheme = () => {
    setContext({
      ...context,
      colorScheme: context.colorScheme === 'dark' ? 'light' : 'dark',
      theme: context.colorScheme === 'dark' ? lightTheme : darkTheme,
    });
  };

  return (
    <Container>
      <StatusBar
        barStyle={
          context.colorScheme === 'dark' ? 'light-content' : 'dark-content'
        }
        backgroundColor={context.theme.colors.background}
      />
      <Header>
        <Title>Home</Title>
        <SwitchContainer>
          <Feather
            color={context.colorScheme === 'dark' ? '#FFF' : '#000'}
            name={context.colorScheme === 'dark' ? 'moon' : 'sun'}
            size={hp(3.5)}
          />
          <Switcher onPress={onPressSwitch}>
            <MaterialCommunityIcons
              color={
                context.colorScheme === 'light'
                  ? context.theme.colors.primary
                  : '#fff'
              }
              name={scheme === 'light' ? 'toggle-switch' : 'toggle-switch-off'}
              size={hp(5.5)}
            />
          </Switcher>
        </SwitchContainer>
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
            <Fontisto
              color={context.colorScheme === 'light' ? '#000' : '#fff'}
              name="wind"
              size={hp(3)}
            />
            <Label>Wind:</Label>
          </LabelContainer>
          <Value>{currentWeather.windSpeed.toFixed(1)}km/h</Value>
        </Row>
        <Row>
          <LabelContainer>
            <Feather
              color={context.colorScheme === 'light' ? '#000' : '#fff'}
              name="droplet"
              size={hp(3.1)}
            />
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
