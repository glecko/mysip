import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { IntervalMonitorModel } from './interval-monitor.model';
import { getActions } from '../../hooks/application';

function getMonitorActions(props: IntervalMonitorModel) {
  return getActions(props.type, undefined, props.interval);
}

const IntervalMonitor = (props: IntervalMonitorModel) => {
  const [actions, setActions] = useState(
    getMonitorActions(props)
  );

  useEffect(() => {
    const initialActions = getMonitorActions(props);
    setActions(initialActions);
    initialActions.addListener(() => {
      setActions(getMonitorActions(props));
    });
  }, [props.type, props.interval]);

  const totalAmount = actions.reduce((acc, action) => acc + action.amount, 0);

  const textStyle = { ...props.style };
  if (props.threshold && totalAmount >= props.threshold) textStyle.color = props.aboveThresholdColor;

  return (
    <Text style={textStyle}>{totalAmount.toFixed(1)}</Text>
  );
};

export default IntervalMonitor;
