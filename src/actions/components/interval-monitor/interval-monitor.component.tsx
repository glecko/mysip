import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { IntervalMonitorModel } from './interval-monitor.model';
import { getActions, listenToActionCollection } from '../../hooks/application';

const IntervalMonitor = (props: IntervalMonitorModel) => {
  const [actions, setActions] = useState(getActions(props.type, undefined, props.interval));

  useEffect(() => listenToActionCollection(setActions, props.type, undefined, props.interval), [props.type, props.interval]);

  const totalAmount = actions.reduce((acc, action) => acc + action.amount, 0);

  const textStyle = { ...props.style };
  if (props.threshold && totalAmount >= props.threshold) textStyle.color = props.aboveThresholdColor;

  return (
    <Text style={textStyle}>{totalAmount.toFixed(1)}</Text>
  );
};

export default IntervalMonitor;
