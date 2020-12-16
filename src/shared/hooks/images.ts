import { ImageSourcePropType } from 'react-native';
import { IMAGE_NAME_MAPPING } from '../../drinks/data/images';

export function getDrinkImage(imageName: string): ImageSourcePropType {
  const image = IMAGE_NAME_MAPPING[imageName];
  if (image) {
    return image;
  }
  return IMAGE_NAME_MAPPING.default;
}
