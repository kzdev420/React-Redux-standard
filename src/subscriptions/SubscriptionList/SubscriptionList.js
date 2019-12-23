import React, { Component } from 'react';

import SprintListItem from '../sprint/ListItem';
import AttListItem from '../att/ListItem';
import Box from 'common/Box';

export const SubscriptionList = ({ sprintSubs, attSubs, onSprintClick, onAttClick }) => {
  if (!sprintSubs && !attSubs) { return null; }

  return (
    <div>
      {sprintSubs.map(sub => (
        <Box key={sub.id}>
          <SprintListItem subscription={sub} onClick={onSprintClick} />
        </Box>
      ))}
      {attSubs.map(sub => (
        <Box key={sub.id}>
          <AttListItem subscription={sub} onClick={onAttClick} />
        </Box>
      ))}
    </div>
  )
}

export default SubscriptionList;
