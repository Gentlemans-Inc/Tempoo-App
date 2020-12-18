import {DrawerContentOptions} from '@react-navigation/drawer';
import React from 'react';
import {Section} from './Section';
import {Container} from './styles';

interface Props extends DrawerContentOptions {}

const DrawerContent: React.FC<Props> = () => {
  return (
    <Container>
      <Section
        subTitle="Sub Title"
        title="Teste"
        onPress={() => console.log('teste')}
      />
    </Container>
  );
};

export {DrawerContent};
