import React from 'react';
import { View, Text } from "react-native";
import { useTheme } from "styled-components"
import { Text1, TextInput, HeaderContent } from './styles.js'



export default ({item}:any) => {
    const theme = useTheme()
  return (
    <HeaderContent>
        <Text1>{item.text}</Text1>

        

        <TextInput>
           
        </TextInput>
    </HeaderContent>
  );
}