// Importing PropTypes library for defining component prop types
import PropTypes from 'prop-types';

// Importing the CSS module styles for the Profile component
import s from './Profile.module.css';

// Defining the Profile component as a default export
export default function Profile({ username, tag, location, avatar, stats }) {
  // Destructuring the 'stats' object to access followers, views, and likes
  const { followers, views, likes } = stats;

  // Rendering the JSX structure for the Profile component
  return (
    <div className={s.profile}>
      <div className={s.description}>
        {/* Displaying the avatar image */}
        <img src={avatar} alt={username} className={s.avatar} />

        {/* Displaying the username */}
        <p className={s.name}>{username}</p>

        {/* Displaying the user's tag */}
        <p className={s.tag}>@{tag}</p>

        {/* Displaying the user's location */}
        <p className={s.location}>{location}</p>
      </div>

      {/* Displaying the user's statistics */}
      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

// Defining PropTypes for the Profile component to specify expected prop types
Profile.propTypes = {
  username: PropTypes.string.isRequired, // String prop for username (required)
  tag: PropTypes.string.isRequired, // String prop for tag (required)
  location: PropTypes.string.isRequired, // String prop for location (required)
  avatar: PropTypes.string.isRequired, // String prop for avatar image URL (required)
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired, // Number prop for followers count (required)
    views: PropTypes.number.isRequired, // Number prop for views count (required)
    likes: PropTypes.number.isRequired, // Number prop for likes count (required)
  }),
};

// This module defines a React functional component named Profile, which represents a user's profile information and statistics.
// It utilizes PropTypes for type validation and CSS modules for styling
