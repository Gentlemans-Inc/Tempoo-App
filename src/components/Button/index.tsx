import React from 'react';
import {Container, Label} from './styles';

interface Props {
  label: string;
  style?: Object;
  onPress(): void;
}

const Button: React.FC<Props> = ({label, onPress, style}) => {
  return (
    <Container onPress={onPress} style={style}>
      <Label>{label}</Label>
    </Container>
  );
};

export {Button};
