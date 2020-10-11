import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { IntervalMonitorModel } from './interval-monitor.model';
import { getActions } from '../../../hooks/actions/hooks';

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

  return (
    <Text style={props.style}>{actions.length}</Text>
  );
};

export default IntervalMonitor;
