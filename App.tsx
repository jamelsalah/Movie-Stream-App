import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native'

const StyledText = styled.Text`
  color: white;
`
const StyledView = styled.View`
  backgroundColor: black;
`

export default function App() {
  return (
    <StyledView>
      <StyledText>Movie Stream</StyledText>
    </StyledView>
  );
}


