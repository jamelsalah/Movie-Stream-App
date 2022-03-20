import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components/native'
import MovieRow from './components/MovieRow'
import api from './api'

const StyledText = styled.Text`
  color: white;
  font-size: 20px;
  display: flex;
`
const StyledView = styled.View`
  backgroundColor: black;
`

export default function App() {
  var [ movieList, setMovieList ] = useState([] as any)
  const [featureData, setFeatureData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      const list = await api.getHomeList()
      setMovieList(list)
    }
    loadAll();
  }, [])
  return (
    <View style={{marginTop: 20, padding: 10}}>
      <FlatList 
          data={ movieList }
          renderItem={ ({ item }) => (
            <MovieRow title={item.title} items={item.items}></MovieRow>
          )}
          keyExtractor={ item => item.id } 
        />
    </View>
  );
}


