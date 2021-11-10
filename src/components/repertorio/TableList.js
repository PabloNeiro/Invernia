import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { songsList } from '../../database/database';
import { Button } from 'reactstrap';
import './buttons.css';

function TableList({ lista }) {
  var listToPrint = songsList;
  lista && (listToPrint = lista);
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 550 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead className='backRow'>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Nome</TableCell>
              <TableCell align='center'>Partitura</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listToPrint.map((element, i) => (
              <TableRow
                className={i % 2 == 0 ? 'backRow' : 'backRowDark'}
                key={element.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  <b>{element.name}</b>
                </TableCell>
                <TableCell align='center'>
                  <Button href={`/partituras/${element.id}`}>VER</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default TableList;
