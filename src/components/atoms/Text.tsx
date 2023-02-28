import {Text} from 'react-native';

interface MoviePosterProps {
  text: string;
  size: number;
  color: string;
  fontWeight?:any;
  marginLeft?:number;
}

export const TextComponent: React.FC<MoviePosterProps> = ({
  text,
  color,
  size,
  fontWeight,
  marginLeft
}) => {
  return <Text style={{marginLeft:marginLeft,fontWeight:fontWeight,fontSize: size, color: color}}>{text}</Text>;
};
