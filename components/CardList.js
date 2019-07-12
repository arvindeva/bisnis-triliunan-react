import React from 'react';

import { Card } from './Card';

const CardList = ({ results }) => (
  <div>
    {results.map(user => {
      return <Card key={user.id} user={user} />;
    })}
  </div>
);

export default CardList;
