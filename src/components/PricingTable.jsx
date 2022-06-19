import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Status (Related Endpoints)'),
  createData('Search (Related Endpoints)', '600 / month', '50, 000 / month', '100, 000 / month', 'Unlimited'),
  createData('Features'),
  createData('Pay Per Use', 'X', 'X', 'X', 'X'),
  createData('Free To Use', 'X', 'X', 'X', 'X'),
  createData('Rate Limit', '', '', '', '12000 requests per hour'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Objects</TableCell>
            <TableCell sx={{ fontSize: 25, lineHeight: 1.5 }} align="center">Basic <br/> $0.00 / mo</TableCell>
            <TableCell sx={{ fontSize: 25, lineHeight: 1.5 }} align="center">Pro <br/> $100.00 / mo</TableCell>
            <TableCell sx={{ fontSize: 25, lineHeight: 1.5 }} align="center">Ultra <br/> $200.00 / mo</TableCell>
            <TableCell sx={{ fontSize: 25, lineHeight: 1.5 }} align="center">Mega <br/> $700.00 / mo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
