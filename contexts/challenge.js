import React from 'react';

const ChallengeContext = React.createContext({
  id: null,
  name: null,
  description: null,
  startDate: null,
  showStartDate: true,
  endDate: null,
  showEndDate: true,
  tags: null,
  logoUrl: null,
  type: null,
  showProgressBar: null,
  showProgressCircle: null,
  totalTasks: null
});

export default ChallengeContext;
