import React from "react";

const UserContext = React.createContext({
  name: "Leon Si",
  handle: "LeonZaLion",
  followers: 345,
  following: 756,
  profilePicture:
    "https://media-exp1.licdn.com/dms/image/C4D03AQEUgiIGoubZSg/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=8cd7oLeqjImne2aab1KtX_IqZZRP2dTbBK7ewgpa5HA",
  challenges: {
    challengeId: {
      tasksDone: null,
    },
  },
});

export default UserContext;
