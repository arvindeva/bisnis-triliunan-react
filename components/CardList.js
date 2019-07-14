import React from 'react';

import { Card } from './Card';

const CardList = ({ results }) => (
  <div>
    <h2>{results.length} results found</h2>
    {results.map(user => {
      return <Card key={user.id} user={user} />;
    })}
  </div>
);

export default CardList;
