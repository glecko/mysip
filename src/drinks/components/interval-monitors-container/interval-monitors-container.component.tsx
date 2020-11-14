import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import IntervalMonitor from '../../../actions/components/interval-monitor/interval-monitor.component';
import { ALCOHOL_UNIT_ACTION_TYPE } from '../../models/model';
import DeleteLastDrinkButton from '../delete-last-drink/delete-last-drink-button.component';
import styles from './interval-monitors-container.styles';
import { IntervalModel } from '../../../actions/hooks/aggregation/model';
import { DAILY_ALCOHOL_UNITS_THRESHOLD, WEEKLY_ALCOHOL_UNITS_THRESHOLD } from '../../data/constants';

function getTodayInterval(): IntervalModel {
  const start = new Date();
  start.setHours(start.getHours() - 24);
  return { start };
}

function getLastWeekInterval(): IntervalModel {
  const start = new Date();
  start.setDate(start.getDate() - 7);
  return { start };
}

const IntervalMonitorsContainer = () => {
  const [todayInterval, setTodayInterval] = useState(getTodayInterval());
  const [lastWeekInterval, setLastWeekInterval] = useState(getLastWeekInterval());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTodayInterval(getTodayInterval());
      setLastWeekInterval(getLastWeekInterval());
    }, 10000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <DeleteLastDrinkButton />
        <View style={styles.bloodConcentrationContainer}>
          <Text style={styles.bloodConcentrationText}>0.00%</Text>
          <Text style={styles.bloodConcentrationDescription}>Blood concentration</Text>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <IntervalMonitor
          type={ALCOHOL_UNIT_ACTION_TYPE}
          interval={todayInterval}
          style={styles.monitorText}
          threshold={DAILY_ALCOHOL_UNITS_THRESHOLD}
          aboveThresholdColor="red"
        />
        <Text style={styles.monitorSubheader}>Alcohol units</Text>
        <Text style={styles.intervalDescriptionText}>Last 24h</Text>
      </View>
      <View style={styles.rightContainer}>
        <IntervalMonitor
          type={ALCOHOL_UNIT_ACTION_TYPE}
          interval={lastWeekInterval}
          style={styles.monitorText}
          threshold={WEEKLY_ALCOHOL_UNITS_THRESHOLD}
          aboveThresholdColor="red"
        />
        <Text style={styles.monitorSubheader}>Alcohol units</Text>
        <Text style={styles.intervalDescriptionText}>Last 7 days</Text>
      </View>
    </View>
  );
};

export default IntervalMonitorsContainer;
