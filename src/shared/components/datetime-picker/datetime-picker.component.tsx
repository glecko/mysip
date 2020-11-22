import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Button as NativeButton, Platform } from 'react-native';
import moment from 'moment';
import { DatetimePickerModel } from './datetime-picker.model';
import styles from './datetime-picker.styles';

const DatetimePickerComponent = (props: DatetimePickerModel) => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [datePickerMode, setDatePickerMode] = useState<'date' | 'time'>('date');

  const onDateSelectionChange = (event: Event, selectedDate?: Date) => {
    setDatePickerVisible(false);
    const currentDate = selectedDate || props.date;
    props.setDate(currentDate);
  };

  const editDate = (mode: 'date' | 'time') => {
    setDatePickerMode(mode);
    setDatePickerVisible(true);
  };

  if (Platform.OS === 'ios') {
    return (
      <DateTimePicker
        testID="dateTimePicker"
        value={props.date}
        mode="datetime"
        display="default"
        onChange={onDateSelectionChange}
      />
    );
  }

  // Android + windows
  const dateString = moment(props.date).format('ddd Do MMM YYYY');
  const timeString = moment(props.date).format('HH:mm');
  return (
    <View>
      <View style={styles.dateButtonsContainer}>
        <NativeButton onPress={() => editDate('date')} title={dateString} />
        <NativeButton onPress={() => editDate('time')} title={timeString} />
      </View>
      {datePickerVisible && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.date}
          is24Hour
          mode={datePickerMode}
          display="default"
          onChange={onDateSelectionChange}
        />
      )}
    </View>
  );
};

export default DatetimePickerComponent;
