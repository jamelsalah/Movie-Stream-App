import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ThemeProvider } from 'styled-components'
import MovieRow from './components/MovieRow'
import api from './api'
import themes from './themes'
import { StyledText, Content} from './styles'



export default function App() {
  const [ movieList, setMovieList ] = useState([] as any)
  const [ featureData, setFeatureData ] = useState(null)
  const [ theme, setTheme ] = useState(0);
  useEffect(() => {
    const loadAll = async () => {
      const list = await api.getHomeList()
      setMovieList(list)
    }
    loadAll();
  }, [])
  return (
    <ThemeProvider theme={themes[theme]}>
      <Content>
        <FlatList 
            data={ movieList }
            renderItem={ ({item}) => (
              <MovieRow title={item.title} items={item.items}></MovieRow>
            )}
            keyExtractor={ (item, index: any) => index} 
          />
      </Content>
    </ThemeProvider>
  );
}


