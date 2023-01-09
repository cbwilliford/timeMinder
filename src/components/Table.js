import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExpandableRow from './ExpandableRow';

function createData(domain, time) {
  return { domain, time, pages: [
      {
        url: 'https://mui.com/material-ui/material-icons/',
        time: '12 minutes',
      },
      {
        url: 'https://www.youtube.com/watch?v=o1chMISeTC0',
        time: '1 minute',
      },
    ]
  };
}

const rows = [
  createData('Youtube.com', '12 hours'),
  createData('Facebook.com', '1 hours'),
  createData('HubSpot.com', '2 hours'),
  createData('Twitter.com', '110 hours'),
  createData('Youtube.com', '12 hours'),
  createData('Facebook.com', '1 hours'),
  createData('HubSpot.com', '2 hours'),
  createData('Twitter.com', '110 hours'),
  createData('Youtube.com', '12 hours'),
  createData('Facebook.com', '1 hours'),
  createData('HubSpot.com', '2 hours'),
  createData('Twitter.com', '110 hours'),
  createData('Youtube.com', '12 hours'),
  createData('Facebook.com', '1 hours'),
  createData('HubSpot.com', '2 hours'),
  createData('Twitter.com', '110 hours'),
  createData('Youtube.com', '12 hours'),
  createData('Facebook.com', '1 hours'),
  createData('HubSpot.com', '2 hours'),
  createData('Twitter.com', '110 hours'),
  createData('Youtube.com', '12 hours'),
  createData('Facebook.com', '1 hours'),
  createData('HubSpot.com', '2 hours'),
  createData('Twitter.com', '110 hours'),
];

export default function TimeTable() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader sx={{ maxWidth: 500, minWidth: 350}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="left">Domain</TableCell>
              <TableCell align="left">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <ExpandableRow key={row.domain} row={row} />
            ))}
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell></TableCell>
                <TableCell component="th" scope="row" align="right">Total:</TableCell>
                <TableCell align="left">8 Hours</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
