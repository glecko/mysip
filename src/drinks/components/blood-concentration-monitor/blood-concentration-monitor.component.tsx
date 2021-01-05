import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { BloodConcentrationMonitorModel } from './blood-concentration-monitor.model';
import {
  getBloodActiveDrinks,
  getCurrentBloodConcentration
} from '../../hooks/blood-concentration';
import { INTERVAL_MONITORS_REFRESH_RATE } from '../../models/constants';

const BloodConcentrationMonitor = (props: BloodConcentrationMonitorModel) => {
  const [concentration, setConcentration] = useState(0);

  const updateConcentrationListener = () => {
    const actions = getBloodActiveDrinks();
    getCurrentBloodConcentration(actions).then((result: number) => setConcentration(result));
  };

  /* Executed only once on component mount */
  useEffect(() => {
    const actions = getBloodActiveDrinks();
    getCurrentBloodConcentration(actions).then((result: number) => setConcentration(result));
    actions.addListener(updateConcentrationListener);
    const interval = setInterval(updateConcentrationListener, INTERVAL_MONITORS_REFRESH_RATE);
    return () => {
      clearInterval(interval);
      actions.removeListener(updateConcentrationListener);
    };
  }, []);

  const displayString = concentration.toFixed(2);
  return (
    <Text style={props.style}>{displayString}</Text>
  );
};

export default BloodConcentrationMonitor;
