import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Hostname, Page} from '../types';

export default function ExpandableRow(props: { row: Hostname }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const pagePath = (url: string) => {
    try{
      return new URL(url).pathname
    } catch(err) {
      console.error(err)
    }
  }

  const pagePathCharLimit = 40;

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.hostname}
        </TableCell>
        <TableCell>{row.msElapsed}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, maxWidth: 300}} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pages
              </Typography>
              <Table size="small" aria-label="pages">
                <TableBody>
                  {row.pages!.map((page: Page) => {
                    const path = pagePath(page.url!)
                    return (
                      <TableRow key={page.url}>
                        <TableCell component="th" scope="row">
                          <Link href={path}>
                            {(path!.length < pagePathCharLimit)
                            ? path
                            : `${path!.slice(0, pagePathCharLimit)}...`}</Link>
                        </TableCell>
                        <TableCell>{page.msElapsed}</TableCell>
                      </TableRow>
                    )
                  }
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

ExpandableRow.propTypes = {
  row: PropTypes.shape({
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
      }),
    ).isRequired,
    domain: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};
