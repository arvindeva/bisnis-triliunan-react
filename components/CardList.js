import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Spin } from 'antd';

import { Card } from './Card';

const USERS_QUERY = gql`
  query {
    users {
      id
      name
      profile_photo
      booked_count
      rating
      verified
      age
    }
  }
`;

const CardList = () => (
  <Query query={USERS_QUERY} ssr={false}>
    {({ data, loading, error }) => {
      if (loading) return <Spin size="large" />;
      if (error) return `Error! ${error}`;
      console.log(data.users);
      return (
        <div>
          {data.users.map(user => {
            return <Card key={user.id} user={user} />;
          })}
        </div>
      );
    }}
  </Query>
);

export default CardList;
