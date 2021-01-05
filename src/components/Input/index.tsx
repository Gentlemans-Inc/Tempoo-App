import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import theme from '../../styles/theme';
import {Container, TextInput} from './styles';
import {TextInputProps} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface Props extends TextInputProps {
  refProp?: any;
  materialIcon?: string;
  theme?: any;
}

const Input: React.FC<Props> = (props) => {
  return (
    <Container theme={props.theme}>
      {props.materialIcon ? (
        <MaterialIcons
          color={theme.colors.mediumGray}
          name={props.materialIcon}
          size={hp(2.5)}
        />
      ) : null}
      <TextInput {...props} ref={props.refProp} />
    </Container>
  );
};

export {Input};
