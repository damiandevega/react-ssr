import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>Home Component</div>
      <button onClick={() => console.log('hi')}>Press me!</button>
    </div>
  );
};

export default {
  component: HomePage,
};
