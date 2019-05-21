import React from 'react';
import { Input } from 'semantic-ui-react';

const FindFriends = (props) => (
  <Input name="friendSearch" icon='users' iconPosition='left' placeholder='Search by email...' onChange={props.onFriendSearchChange} style={{ width: '20%'}}/>
  )

export default FindFriends;