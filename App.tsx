import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ThemeProvider } from 'styled-components';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeatureMovie';
import Header from './components/Header';
import Footer from './components/Footer';
import api from './api';
import themes from './themes';
import { StyledText, Content} from './styles';



export default function App() {
  const [ movieList, setMovieList ] = useState([] as any);
  const [ feature, setFeature ] = useState({} as any);
  const [ featureData, setFeatureData ] = useState({} as any);
  const [ theme, setTheme ] = useState(0);

  useEffect(() => {
    const loadAll = async () => {
      const list = await api.getHomeList();
       setMovieList(list);
       
      let movies  = list.filter(i=>i.slug === 'toprated');
      let randomChosen = Math.floor(Math.random() * (movies[0].items.results.length - 1))
      let chosen = movies[0].items.results[randomChosen];
      let chosenInfo = api.getMovieInfo(chosen.id, 'movie');
      setFeature(chosen);
      setFeatureData(chosenInfo)
    }
    loadAll();
  }, [])
  return (
    <ThemeProvider theme={themes[theme]}>
      <Content>
        <Header item={{text: 'GazinFilms'}}></Header>

       {Object.values(feature).length > 0 && <FeaturedMovie item={{ feature, featureData }}></FeaturedMovie>}

        <FlatList 
            data={ movieList }
            renderItem={ ({item}) => (
              <MovieRow title={item.title} items={item.items}></MovieRow>
            )}
            keyExtractor={ (item, index: any) => index} 
          />

          <Footer item={{text: 'GazinFilms'}}></Footer>
      </Content>
    </ThemeProvider>
  );
}


