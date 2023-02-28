import React from 'react';
import {Image, Text, View} from 'react-native';
import {TvShow} from '../../redux/actions/authTypes';
import {TextComponent} from './Text';

interface MoviePosterProps {
  tv: TvShow;
  width: number;
  flexDirection: any;
  favorites?: boolean;
}

export const MoviePoster: React.FC<MoviePosterProps> = ({
  tv: {name, backdrop_path, id, overview, poster_path, vote_average},
  width,
  flexDirection,
  favorites,
}) => {
  const uri = 'https://image.tmdb.org/t/p/w500' + poster_path;

  return (
    <View
      style={{
        width: width,
        height: 300,
        display: 'flex',
        flexDirection: flexDirection,
      }}>
      <View
        style={{
          borderRadius: 18,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 24,
          shadowRadius: 3.84,
          elevation: 10,
          flex: 1,
        }}>
        <Image
          source={{uri}}
          style={{flex: 1, borderRadius: 20, marginTop: 25, marginBottom: 25}}
        />
      </View>
      {favorites && (
        <Text
          style={{
            fontSize: 16,
            color: '8C8C8C',
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: 5,
            alignSelf: 'center',
          }}
          onPress={() => {}}>
          +{' '}
        </Text>
      )}
      <TextComponent color="#FFFFFF" size={24} text={name} />
      
    </View>
  );
};
