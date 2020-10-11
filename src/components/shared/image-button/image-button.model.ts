import { ImageStyle, ViewStyle } from 'react-native';

export interface ImageButtonModel {
  imageUrl?: string;
  onPress: () => void;
  textElement?: JSX.Element;
  styles?: {
    container: ViewStyle;
    button: ViewStyle;
    image: ImageStyle;
  };
}
