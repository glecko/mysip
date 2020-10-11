import React from 'react';
import { View, Text } from 'react-native';
import IntervalMonitor from '../../actions/interval-monitor/interval-monitor.component';
import { ALCOHOL_UNIT_ACTION_TYPE } from '../../../hooks/drinks/model';
import DeleteLastDrinkButton from '../delete-last-drink/delete-last-drink-button.component';
import styles from './interval-monitors-container.styles';

const IntervalMonitorsContainer = () => {
  const today = new Date();
  today.setHours(0);

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

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
          interval={{ start: today }}
          style={styles.monitorText}
        />
        <Text style={styles.monitorSubheader}>Alcohol units</Text>
        <Text style={styles.intervalDescriptionText}>Today</Text>
      </View>
      <View style={styles.rightContainer}>
        <IntervalMonitor
          type={ALCOHOL_UNIT_ACTION_TYPE}
          interval={{ start: sevenDaysAgo }}
          style={styles.monitorText}
        />
        <Text style={styles.monitorSubheader}>Alcohol units</Text>
        <Text style={styles.intervalDescriptionText}>Last 7 days</Text>
      </View>
    </View>
  );
};

export default IntervalMonitorsContainer;
