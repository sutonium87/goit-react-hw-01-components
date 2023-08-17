// Importing PropTypes library for defining component prop types
import PropTypes from 'prop-types';

// Importing the CSS module styles for the Friend component
import s from '../Friend/Friend.module.css';

// Defining the Friend component as a default export
export default function Friend({ avatar, name, isOnline }) {
  return (
    // Rendering a list item with a CSS module class
    <li className={s.item}>
      {/* Rendering a status indicator based on 'isOnline' prop */}
      <span className={isOnline ? s.active : s.status}></span>

      {/* Rendering the user avatar */}
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />

      {/* Rendering the user's name */}
      <p className={s.name}>{name}</p>
    </li>
  );
}

// Defining PropTypes for the Friend component to specify expected prop types
Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired, // String prop for avatar image URL (required)
    name: PropTypes.string.isRequired, // String prop for name (required)
    isOnline: PropTypes.bool.isRequired, // Boolean prop for online status (required)
  }).isRequired, // 'friend' object with specified structure is required
};

// This module defines the Friend component, which renders an individual friend item.
// It displays the user's avatar, name, and an online status indicator.
// The CSS module classes provide scoped styling, and the propTypes ensure that the friend prop is used correctly.
