import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Any title</h2>

      <ul className={css.stats}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
