// Importing the Container component from the specified path
import Container from './Container/Container';

// Importing the Profile component and the user data from the specified paths
import Profile from './Profile/Profile';
import user from '../data/user';

// Importing the Statistics component and the data for statistics from the specified paths
import Statistics from './Statistics/Statistics';
import data from '../data/data';

// Importing the FriendsList component and the friends data from the specified paths
import FriendsList from './FriendsList/FriendsList';
import friends from '../data/friends';

// Importing the TransactionHistory component and the transaction data from the specified paths
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions';

// Exporting the App component
export const App = () => {
  // Returning JSX content within the Container component
  return (
    <Container>
      {/* Rendering the Profile component with user data as props */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* Rendering the Statistics component with title and stats data as props */}
      <Statistics title="Upload stats" stats={data} />
      {/* Rendering the FriendsList component with friends data as props */}
      <FriendsList friends={friends} />
      {/* Rendering the TransactionHistory component with transaction data as props */}
      <TransactionHistory items={transactions} />
    </Container>
  );
};

// The App component is defined as a functional component.
//  It returns JSX content within the Container component.
//  Inside the Container, the following components are rendered with their respective data as props:

// Profile is rendered with user data.
// Statistics is rendered with title and stats data.
// FriendsList is rendered with friends data.
// TransactionHistory is rendered with transaction data.
// This composition creates the structure of the main application by combining these components and their associated data.
