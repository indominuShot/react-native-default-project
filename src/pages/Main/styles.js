import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: ${StatusBar + 10}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 38px;
  word-spacing: 5px;
`;
