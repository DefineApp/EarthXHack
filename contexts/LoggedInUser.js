import React from "react";

const LoggedInUserContext = React.createContext({
  user: {
    name: '',
    handle: '',
    followers: null,
    following: null,
    description: null,
    avatarUrl: null,
    challenges: null,
    socialMedia: null
  },
  setUser: null
});

export default LoggedInUserContext;
