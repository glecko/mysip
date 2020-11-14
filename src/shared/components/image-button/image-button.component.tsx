import React from 'react';
import {
  View, Image, TouchableOpacity
} from 'react-native';
import { ImageButtonModel } from './image-button.model';

const ImageButton = (props: ImageButtonModel) => (
  <View>
    <TouchableOpacity
      style={props.styles ? props.styles.button : undefined}
      activeOpacity={0.5}
      onPress={props.onPress}
    >
      {
        props.image || props.imageUrl
          ? (
            <Image
              source={props.image ? props.image : { uri: props.imageUrl }}
              style={props.styles ? props.styles.image : undefined}
            />
          ) : undefined
      }
      {props.textElement}
    </TouchableOpacity>
  </View>
);

export default ImageButton;
