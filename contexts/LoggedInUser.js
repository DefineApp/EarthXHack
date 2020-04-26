import React from "react";

const LoggedInUserContext = React.createContext({
  user: {
    id: null,
    name: '',
    handle: '',
    followers: null,
    following: null,
    description: null,
    avatarUrl: null,
    challenges: null,
    socialMedia: null,
    followedPeople: []
  },
  setUser: null
});

export default LoggedInUserContext;
