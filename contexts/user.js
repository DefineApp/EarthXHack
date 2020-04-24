import React from 'react';

const UserContext = React.createContext({
  name: null,
  handle: null,
  challenges: {
    challengeId: {
      tasksDone: null
    }
  }
});

export default UserContext;
