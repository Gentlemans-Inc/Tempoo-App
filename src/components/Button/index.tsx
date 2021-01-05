import React from 'react';
import {Container, Label} from './styles';

interface Props {
  label: string;
  style?: Object;
  onPress(): void;
  theme?: any;
}

const Button: React.FC<Props> = ({label, onPress, style, theme}) => {
  return (
    <Container onPress={onPress} style={style} theme={theme}>
      <Label>{label}</Label>
    </Container>
  );
};

export {Button};
