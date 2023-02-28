import {useEffect, useMemo, useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useMovies, useTopMovies} from '../../hooks/useMovies';
import {MoviePoster} from '../atoms/moviePoster';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useWindowDimensions} from 'react-native';
import {TextComponent} from '../atoms/Text';
import {useDispatch, useSelector} from 'react-redux';
import {TopRatedRequest} from '../../api/TopRated';

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [top, setTop] = useState();
  const dispatch = useDispatch();

  const {tvShows} = useMovies();
  const {topRated} = useTopMovies();

  const {width, height} = useWindowDimensions();

  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
      <View style={{height: 350, backgroundColor: '#191919'}}>
        <TextComponent
          color="#FFFFFF"
          size={24}
          text={'Popular'}
          fontWeight={800}
          marginLeft={25}
        />

        <Carousel
          data={tvShows}
          renderItem={({item}: any) => (
            <MoviePoster
              key={item.id}
              width={150}
              flexDirection={'column'}
              tv={item}
            />
          )}
          sliderWidth={width}
          itemWidth={170}
          sliderHeight={500}
          onSnapToItem={index => setActiveIndex(index)}
        />
      </View>
      <View
        style={{
          height: 350,
          backgroundColor: '#191919',
          marginBottom: 50,
        }}>
        <TextComponent
          color="#FFFFFF"
          size={24}
          text={'Recomendations'}
          fontWeight={800}
          marginLeft={25}
        />
        
        <Carousel
          data={topRated}
          renderItem={({item}: any) => (
            <MoviePoster
              key={item.id}
              width={350}
              flexDirection={'row'}
              tv={item}
              favorites={true}
            />
          )}
          sliderWidth={width}
          itemWidth={170}
          sliderHeight={height}
          onSnapToItem={index => setActiveIndex(index)}
          itemHeight={300}
          vertical={true}
          activeSlideAlignment={'start'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 250,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
  inactiveDotStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  
});

export default HomePage;
