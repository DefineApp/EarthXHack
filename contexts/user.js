import React from "react";

const UserContext = React.createContext({
  name: null,
  handle: null,
  followers: null,
  following: null,
  description: null,
  avatarUrl: null,
  challenges: null
});

export default UserContext;
