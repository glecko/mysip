import { ImageSourcePropType } from 'react-native';
import { DEFAULT_DRINK_IMAGE, IMAGE_NAME_MAPPING } from '../../settings/data/images';

export function getDrinkImage(imageName: string): ImageSourcePropType {
  const image = IMAGE_NAME_MAPPING[imageName];
  if (image) {
    return image;
  }
  return DEFAULT_DRINK_IMAGE;
}
