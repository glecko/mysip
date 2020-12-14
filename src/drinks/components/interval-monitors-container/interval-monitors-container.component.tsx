import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import IntervalMonitor from '../../../actions/components/interval-monitor/interval-monitor.component';
import { ALCOHOL_UNIT_ACTION_TYPE, INTERVAL_MONITORS_REFRESH_RATE } from '../../models/model';
import DeleteLastDrinkButton from '../delete-last-drink/delete-last-drink-button.component';
import styles from './interval-monitors-container.styles';
import { IntervalModel } from '../../../actions/hooks/aggregation/model';
import { DAILY_ALCOHOL_UNITS_THRESHOLD, WEEKLY_ALCOHOL_UNITS_THRESHOLD } from '../../data/constants';
import BloodConcentrationMonitor from '../blood-concentration-monitor/blood-concentration-monitor.component';

function getIntervalUntilPresent(start: Date): IntervalModel {
  const end = new Date();
  // We need to add the interval refresh rate to avoid missing new actions added until the interval refreshes
  end.setSeconds(end.getSeconds() + INTERVAL_MONITORS_REFRESH_RATE);
  return { start, end };
}

function getTodayInterval(): IntervalModel {
  const start = new Date();
  start.setHours(start.getHours() - 24);
  return getIntervalUntilPresent(start);
}

function getLastWeekInterval(): IntervalModel {
  const start = new Date();
  start.setDate(start.getDate() - 7);
  return getIntervalUntilPresent(start);
}

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
        <DeleteLastDrinkButton />
        <View style={styles.bloodConcentrationContainer}>
          <BloodConcentrationMonitor style={styles.bloodConcentrationText} />
          <Text style={styles.bloodConcentrationDescription}>Blood content</Text>
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
