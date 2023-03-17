import PropTypes from 'prop-types';
import css from './StatisticsList.module.css';
import { getRandomHexColor } from '../../../utils/GetRandomColor';

export const StatisticsList = ({ id, label, percentage }) => {
  return (
    <li
      key={id}
      className={css.item}
      style={{ backgroundColor: `${getRandomHexColor()}` }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsList.propTypes = {
  // id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
