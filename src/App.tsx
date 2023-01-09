import React from 'react';
import Alert from '@mui/material/Alert';
import BasicTable from './components/Table';

function App() {
  return (
    <div className="App">
      <header>
        <Alert severity="success">TimeMinder is live!</Alert>
      </header>
      <body>
        <BasicTable/>
      </body>
    </div>
  );
}

export default App;
