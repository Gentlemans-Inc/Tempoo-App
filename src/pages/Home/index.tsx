import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';
import {StatusBar} from 'react-native';
import {Button} from '@components';
import {useMount} from '@hooks';
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

const Home: React.FC = () => {
  useMount(() => {
    Geolocation.getCurrentPosition((data) => console.log(data));
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
        <Temperature>29°</Temperature>
        <Row>
          <LabelContainer>
            <Fontisto color="#000" name="wind" size={hp(3)} />
            <Label>Wind:</Label>
          </LabelContainer>
          <Value>10km/h</Value>
        </Row>
        <Row>
          <LabelContainer>
            <Feather color="#000" name="droplet" size={hp(3.1)} />
            <Label>Hum:</Label>
          </LabelContainer>
          <Value>55%</Value>
        </Row>
      </Card>
      <Button label="Forecast Report" onPress={() => {}} />
    </Container>
  );
};

export {Home};
