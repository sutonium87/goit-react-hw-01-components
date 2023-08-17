// Importing the Friend component from the specified path
import Friend from '../Friend/Friend';

// Importing PropTypes library for defining component prop types
import PropTypes from 'prop-types';

// Importing the CSS module styles for the FriendsList component
import s from './FriendsList.module.css';

// Defining the FriendsList component as a default export
export default function FriendsList({ friends }) {
  return (
    // Rendering an unordered list with a CSS module class
    <ul className={s.friendList}>
      {/* Mapping over the 'friends' array and rendering each Friend component */}
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend key={id} isOnline={isOnline} avatar={avatar} name={name} />
      ))}
    </ul>
  );
}

// Defining PropTypes for the FriendsList component to specify expected prop types
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Number prop for unique identifier (required)
      isOnline: PropTypes.bool.isRequired, // Boolean prop for online status (required)
      avatar: PropTypes.string.isRequired, // String prop for avatar image URL (required)
      name: PropTypes.string.isRequired, // String prop for name (required)
    })
  ), // 'friends' array of objects with specified structure
};

// This module defines the FriendsList component, which renders a list of friends using the Friend component.
// The friend data is provided through the friends prop, and prop type validation is in place to ensure correct usage.
