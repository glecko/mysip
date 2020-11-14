import { ImageSourcePropType, ImageStyle, ViewStyle } from 'react-native';

export interface ImageButtonModel {
  imageUrl?: string;
  image?: ImageSourcePropType;
  onPress: () => void;
  textElement?: JSX.Element;
  styles?: {
    container: ViewStyle;
    button: ViewStyle;
    image: ImageStyle;
  };
}
