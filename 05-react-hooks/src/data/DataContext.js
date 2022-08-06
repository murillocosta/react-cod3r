import React from 'react';

export const data = {
  number: 420,
  text: 'Context API...',
};

const DataContext = React.createContext(data);

export default DataContext;
