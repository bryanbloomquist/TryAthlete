import React from 'react';
import { Input } from 'semantic-ui-react';

const FindFriends = (props) => (
  <Input name="friendSearch" icon='users' iconPosition='left' placeholder='Search for friends...' onChange={props.onFriendSearchChange} />
  )

export default FindFriends;