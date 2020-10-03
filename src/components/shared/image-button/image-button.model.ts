import { GestureResponderEvent } from 'react-native';

export interface ImageButtonModel {
  imageUrl: string;
  onPress: (event: GestureResponderEvent) => void;
  styles?: {
    container: any;
    button: any;
    image: any;
  };
}
