import React from 'react';

const ChallengeContext = React.createContext({
  name: null,
  description: null,
  startDate: null,
  endDate: null,
  tags: null,
  logoUrl: null,
  type: null,
  showProgressBar: null,
  showProgressCircle: null
});

export default ChallengeContext;
