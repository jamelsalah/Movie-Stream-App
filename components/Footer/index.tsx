import React from 'react';
import { View } from "react-native";
import { Text1, Text2, Text3, Content } from './styles.js'


export default ({item}:any) => {
  return (
    <View>
       <Text1>{item.text}</Text1>
    </View>
  );
}