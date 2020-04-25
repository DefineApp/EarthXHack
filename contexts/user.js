import React from "react";

const UserContext = React.createContext({
  user: {
    name: null,
    handle: null,
    followers: null,
    following: null,
    description: null,
    avatarUrl: null,
    challenges: null
  },
  setUser: null
});

export default UserContext;
