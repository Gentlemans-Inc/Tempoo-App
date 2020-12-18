import React from 'react';
import {Container, Title, SubTitle} from './styles';

interface Props {
  focused?: boolean;
  subTitle?: string;
  title?: string;
  onPress: any;
}

const Section: React.FC<Props> = ({focused, title, subTitle, onPress}) => {
  return (
    <Container focused={focused} onPress={onPress}>
      <Title focused={focused}>{title}</Title>
      <SubTitle focused={focused}>{subTitle}</SubTitle>
    </Container>
  );
};

export {Section};
