import React from 'react';
import { View, Text } from "react-native";
import { Title, ListArea, List, Item, Image, StyledText } from './styles.js'


export default ({title, items}:any) => {
    //console.log(items)
  return (
    <View>
        <Title>{title}</Title>

        <ListArea> 
            <List>
                {items.results.length > 0 && items.results.map((item: any, key: any) => (
                    <Item key={key}>
                        <Image source={{uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`}} />
                        <StyledText>{item.title}</StyledText>
                    </Item>
                ))}
            </List>
        </ListArea>

    </View>
  );
}