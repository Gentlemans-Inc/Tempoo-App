import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface RowProps {
  border?: boolean;
}

export const Card = styled.View`
  background-color: ${(props) => props.theme.colors.topBackground};
  border-radius: 12px;
  margin-bottom: ${hp(5)}px;
  margin-top: ${hp(15)}px;
  padding-bottom: ${hp(3)}px;
  padding-horizontal: ${wp(3.5)}px;
  width: 92%;
`;

export const Container = styled.View`
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
  width: 100%;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${wp(4)}px;
  padding-top: ${hp(2)}px;
  width: 100%;
`;

export const Label = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${hp(3)}px;
  text-align: right;
`;

export const LabelContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: ${wp(25)}px;
`;

export const Image = styled.Image`
  height: 100%;
  resize-mode: cover;
  width: 100%;
`;

export const ImageContainer = styled.View`
  align-self: center;
  background-color: transparent;
  height: ${wp(35)}px;
  margin-top: ${hp(-7)}px;
  width: ${wp(55)}px;
`;

export const Row = styled.View<RowProps>`
  align-items: center;
  border-bottom-width: ${(props) => (props.border ? '1px' : '0px')};
  border-color: ${(props) => props.theme.colors.lightGray};
  flex-direction: row;
  justify-content: space-between;
`;

export const SwitchContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Switcher = styled.TouchableOpacity`
  margin-left: ${wp(2)}px;
`;

export const Temperature = styled.Text`
  align-self: center;
  color: ${(props) => props.theme.colors.primary};
  margin-left: ${hp(1.1)}px;
  font-size: ${hp(10)}px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${hp(3)}px;
  font-weight: bold;
`;

export const Value = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${hp(3)}px;
  font-weight: bold;
`;
