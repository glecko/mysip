import React, { useState } from 'react';
import { View } from 'react-native';
import RoundedCheckbox from 'react-native-rounded-checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ColorSelectorModel } from './color-selector.model';
import styles from './color-selector.styles';

const ColorSelectorComponent = (props: ColorSelectorModel) => {
  const [selectedColor, setSelectedColor] = useState(props.initialColor);

  const checkBoxes = props.options.map((color: string) => {
    const valueSelected = () => {
      props.onChange(color);
      setSelectedColor(color);
    };
    const checked = selectedColor === color;
    const icon = checked ? (
      <Icon size={20} name="check" color="black" />
    ) : (<View />);
    return (
      <RoundedCheckbox
        component={icon}
        key={color}
        active={checked}
        onPress={valueSelected}
        checkedColor={color}
        uncheckedColor={color}
      />
    );
  });

  return (
    <View style={styles.container}>
      {checkBoxes}
    </View>
  );
};

export default ColorSelectorComponent;
