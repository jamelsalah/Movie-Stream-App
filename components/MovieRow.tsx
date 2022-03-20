import React from 'react';
import { View, Text } from "react-native";
import styled from 'styled-components/native'

const Title = styled.Text`
     color: white;
     font-size: 20px;
     margin-bottom: 10px;
`
const ListArea = styled.View`
    margin-bottom: 15px;
`
const Item = styled.View`
    margin-right: 10px;
`
const Image = styled.Image`
    opacity: 1;
    width: 100px;
    height: 150px;
`
const List = styled.FlatList`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 9999999px;
`

export default ({title, items}:any) => {
  return (
    <View>
        <Title>{title}</Title>

        <ListArea> 
            <List 
                data={ items.results }
                renderItem={ ({item}) => (
                    <Item>
                        <Image 
                            source={{uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`}}
                        ></Image>
                    </Item>
                )}
                keyExtractor={(item) => item.id}
            />
        </ListArea>
    </View>
  );
}