import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { ImageButtonModel } from './image-button.model';

const ImageButton = (props: ImageButtonModel) => (
  <View style={props.styles ? props.styles.container : undefined}>
    <TouchableOpacity
      style={props.styles ? props.styles.button : undefined}
      activeOpacity={0.5}
      onPress={props.onPress}
    >
      <Image
        source={{ uri: props.imageUrl }}
        style={props.styles ? props.styles.image : undefined}
      />
    </TouchableOpacity>
  </View>
);

export default ImageButton;
