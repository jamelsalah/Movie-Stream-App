import React from 'react';
import { View, Text } from "react-native";
import { Featured, Image, Text1, Text2, Text3 } from './styles.js'


export default ({item}:any) => {
    console.log(item.feature)
  return (
    <View>
       <Featured >
             <Image source={{uri: `https://image.tmdb.org/t/p/original${item.feature.backdrop_path}`}} >
             </Image>
                <Text1>{item.feature.original_title}</Text1>
                <Text2>{item.feature.overview}</Text2>
                <Text3>{item.feature.vote_average}/10</Text3>
       </Featured>
    </View>
  );
}