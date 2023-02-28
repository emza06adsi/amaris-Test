import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {TvShow} from '../../redux/actions/authTypes';
import {MoviePoster} from '../atoms/moviePoster';

interface CarouselProps {
  data: TvShow[];
}

const {width: viewportWidth} = Dimensions.get('window');

const Carousel: React.FC<CarouselProps> = ({data}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const renderSlides = () => {
    return data.map((item, index) => (
      <View key={index}>
        <MoviePoster tv={item} />
      </View>
    ));
  };

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
    scrollViewRef.current?.scrollTo({
      x: index * viewportWidth,
      y: 0,
      animated: true,
    });
  };

  const handleScroll = (event: any) => {
    const slideIndex = Math.round(
      event.nativeEvent.contentOffset.x / viewportWidth,
    );
    setActiveSlide(slideIndex);
  };

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={scrollViewRef}>
        {renderSlides()}
      </ScrollView>
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeSlide && styles.paginationDotActive,
            ]}
            onTouchEnd={() => handleSlideChange(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 200,
  },
  slideImage: {
    width: viewportWidth,
    height: 200,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    margin: 5,
  },
  paginationDotActive: {
    backgroundColor: '#333',
  },
});

export default Carousel;
