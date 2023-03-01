import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExpandableRow from './ExpandableRow';
import {Hostnames} from '../types';



export default function TimeTable(props:{rows: Hostnames}) {

  const rows = props.rows;

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader sx={{ maxWidth: 500, minWidth: 375}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="left">Domain</TableCell>
              <TableCell align="left">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(rows).map((key: string) => (
              <ExpandableRow key={rows[key].hostname} row={rows[key]} />
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
