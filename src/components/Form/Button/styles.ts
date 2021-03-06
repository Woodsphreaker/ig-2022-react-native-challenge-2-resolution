import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  background-color: #ffcc00;

  height: ${RFValue(56)}px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`
export const ButtonText = styled.Text`
  font-family: 'Rubik_500Medium';
  font-size: ${RFValue(15)}px;
  color: #3d434d;
`
