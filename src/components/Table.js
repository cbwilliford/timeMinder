import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(domain, time) {
  return { domain, time };
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

export default function BasicTable() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader sx={{ maxWidth: 500, minWidth: 350}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Domain</TableCell>
              <TableCell align="left">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.domain}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  {row.domain}
                </TableCell>
                <TableCell align="left">{row.time}</TableCell>
              </TableRow>
            ))}
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">Total:</TableCell>
                <TableCell align="left">8 Hours</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
