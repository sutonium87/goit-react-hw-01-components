// Importing PropTypes library for defining component prop types
import PropTypes from 'prop-types';

// Importing the CSS module styles for the Statistics component
import s from './Statistics.module.css';

// Defining the Statistics component as a default export
export default function Statistics({ title, stats }) {
  // Array of colors to be used for styling each statistics item
  const colors = ['#89CFF0', '#800080', '#F26A66', '#40e0d0'];

  // Rendering the JSX structure for the Statistics component
  return (
    <section className={s.statistics}>
      {/* Rendering the title if provided */}
      {title && <h2 className={s.title}>{title}</h2>}

      {/* Rendering the list of statistics */}
      <ul className={s.list}>
        {/* Mapping over the 'stats' array and rendering each item */}
        {stats.map(({ id, label, percentage }, index) => (
          <li className={s.item} key={id} style={{ background: colors[index] }}>
            {/* Displaying the label */}
            <span className={s.label}>{label}</span>

            {/* Displaying the percentage */}
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Defining PropTypes for the Statistics component to specify expected prop types
Statistics.propTypes = {
  title: PropTypes.string, // Optional string prop for title
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // String prop for unique identifier (required)
      label: PropTypes.string.isRequired, // String prop for label (required)
      percentage: PropTypes.number.isRequired, // Number prop for percentage (required)
    }).isRequired // Each item in the 'stats' array is required
  ).isRequired, // 'stats' array as a whole is required
};

// This module defines a Statistics component that renders a section with a title(if provided) and a list of statistic items.
// The styles are defined using CSS modules for encapsulation, and prop types are defined to ensure the correct usage of the component.
