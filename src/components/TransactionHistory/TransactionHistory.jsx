// Importing PropTypes library for defining component prop types
import PropTypes from 'prop-types';

// Importing the CSS module styles for the TransactionHistory component
import s from './TransactionHistory.module.css';

// Defining the TransactionHistory component as a default export
export default function TransactionHistory({ items }) {
  return (
    // Rendering a table with a CSS module class
    <table className={s.transaction}>
      {/* Table header */}
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {/* Table body */}
      <tbody>
        {/* Mapping over the 'items' array and rendering each transaction */}
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            {/* Displaying the transaction type */}
            <td>{type}</td>

            {/* Displaying the transaction amount */}
            <td>{amount}</td>

            {/* Displaying the transaction currency */}
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Defining PropTypes for the TransactionHistory component to specify expected prop types
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // String prop for unique identifier (required)
      type: PropTypes.string.isRequired, // String prop for transaction type (required)
      amount: PropTypes.string.isRequired, // String prop for transaction amount (required)
      currency: PropTypes.string.isRequired, // String prop for transaction currency (required)
    })
  ), // 'items' array of objects with specified structure
};

// This module defines the TransactionHistory component, which renders a table displaying transaction history.
// The transaction data is provided through the items prop, and prop type validation is in place to ensure correct usage.
// The CSS module classes provide scoped styling for the component.
