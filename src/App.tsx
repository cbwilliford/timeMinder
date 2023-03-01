import { useEffect, useState } from 'react';
import {Hostname} from './types';
import TimeTable from './components/Table';
import Header from './components/Header';
import { Typography } from '@mui/material';

function App() {
  const [rows, setRows] = useState<{[key: string]: Hostname}>()

  useEffect(() => {
    chrome.storage.local.get("hostnames")
    .then(storage => setRows(storage.hostnames))
  }, []);

  return (
    <div className="App">
      <Header/>
      <body>
        {(typeof rows === 'undefined')
          ? <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              color: 'inherit',
            }}> No page views </ Typography>
            :  <TimeTable rows={rows} />
          }
      </body>
    </div>
  );
}

export default App;
