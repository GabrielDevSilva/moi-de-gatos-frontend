import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RoutesAPI from './routes';

function App() {
  return (
    <BrowserRouter>
      <RoutesAPI/>
    </BrowserRouter>
  );
}

export default App;
