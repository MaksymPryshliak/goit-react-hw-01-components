import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomRgbColor() {
  let r = function () {
    return Math.floor(Math.random() * 256);
  };
  return `rgb(${r()},${r()},${r()})`;
}

export const Statistics = ({ title, stats }) => (
  <div className={css.container}>
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}
      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            className={css.item}
            style={{ backgroundColor: getRandomRgbColor() }}
            key={stat.id}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
