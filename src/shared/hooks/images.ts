import { ImageSourcePropType } from 'react-native';
import { DRINK_IMAGE_NAME_MAPPING } from '../../drinks/data/images';

export function getDrinkImage(imageName: string): ImageSourcePropType {
  const image = DRINK_IMAGE_NAME_MAPPING[imageName];
  if (image) {
    return image;
  }
  return DRINK_IMAGE_NAME_MAPPING.default;
}
