import { StyleSheet } from 'react-native';
import { ACTION_TIMELINE_CHART_HEIGHT } from '../timeline-chart/action-timeline-chart.model';

const TIMELINE_CHART_TITLE_HEIGHT = 25;

const SwipeableTimelineChartStyles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    paddingLeft: 16,
    marginBottom: 2,
    height: TIMELINE_CHART_TITLE_HEIGHT,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'gray'
  },
  chartContainer: {
    flex: 1,
  },
  wrapper: {
    height: ACTION_TIMELINE_CHART_HEIGHT + TIMELINE_CHART_TITLE_HEIGHT,
    marginBottom: 8,
  },
  swiper: {},
});

export default SwipeableTimelineChartStyles;
