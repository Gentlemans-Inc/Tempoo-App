import React from 'react';
import {Container, Label} from './styles';

interface Props {
  label: string;
  onPress(): void;
}

const Button: React.FC<Props> = ({label, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Label>{label}</Label>
    </Container>
  );
};

export {Button};
