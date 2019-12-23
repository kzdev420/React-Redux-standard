import moment from 'moment';

export const daysLeftInCycle = () => {
  const cycleEndDate = 4;
  const today = moment().date();
  const lastDay = moment().date(cycleEndDate);
  today > cycleEndDate && lastDay.add(1, 'month');
  const daysLeft = moment.duration(lastDay.diff(moment())).asDays();
  return Math.ceil(daysLeft);
}
