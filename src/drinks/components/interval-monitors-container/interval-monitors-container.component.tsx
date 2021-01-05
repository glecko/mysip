import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import IntervalMonitor from '../../../actions/components/interval-monitor/interval-monitor.component';
import { ALCOHOL_UNIT_ACTION_TYPE, INTERVAL_MONITORS_REFRESH_RATE } from '../../models/constants';
import styles from './interval-monitors-container.styles';
import { DAILY_ALCOHOL_UNITS_THRESHOLD, WEEKLY_ALCOHOL_UNITS_THRESHOLD } from '../../data/constants';
import BloodConcentrationMonitor from '../blood-concentration-monitor/blood-concentration-monitor.component';
import { getLastWeekInterval, getTodayInterval } from '../../hooks/monitors';

const IntervalMonitorsContainer = () => {
  const [todayInterval, setTodayInterval] = useState(getTodayInterval());
  const [lastWeekInterval, setLastWeekInterval] = useState(getLastWeekInterval());

  useEffect(() => {
    const interval = setInterval(() => {
      setTodayInterval(getTodayInterval());
      setLastWeekInterval(getLastWeekInterval());
    }, INTERVAL_MONITORS_REFRESH_RATE * 1000);
    // Clear timer if the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
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
      <View style={styles.centerContainer}>
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
      <View style={styles.rightContainer}>
        <BloodConcentrationMonitor style={styles.monitorText} />
        <Text style={styles.monitorSubheader}>grams / liter</Text>
        <Text style={styles.intervalDescriptionText}>Blood content</Text>
      </View>
    </View>
  );
};

export default IntervalMonitorsContainer;
