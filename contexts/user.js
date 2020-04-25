import React from "react";

const UserContext = React.createContext({
  user: {
    name: '',
    handle: '',
    followers: null,
    following: null,
    description: null,
    avatarUrl: null,
    challenges: null
  },
  setUser: null
});

export default UserContext;
