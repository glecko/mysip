import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ImageButtonModel } from './image-button.model';

const ImageButton = (props: ImageButtonModel) => (
  <View>
    <TouchableOpacity
      style={props.styles ? props.styles.button : undefined}
      activeOpacity={0.5}
      onPress={props.onPress}
    >
      <Image
        source={{ uri: props.imageUrl }}
        style={props.styles ? props.styles.image : undefined}
      />
      {props.text ? (<Text style={props.styles.text}>{props.text}</Text>) : undefined}
    </TouchableOpacity>
  </View>
);

export default ImageButton;
