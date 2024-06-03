import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(caseId, documentType, vendorName, documentVendor, dateCreated, status) {
  return { caseId, documentType, vendorName, documentVendor, dateCreated, status };
}

const rows = [
  createData('MD2KE0263', 'mortgage', 'Vendor E', 'Vendor E', '2023-01-01', 'Active'),
  createData('ND3KE0263', 'mortgage', 'Vendor F', 'Vendor F', '2023-01-02', 'Pending'),
  createData('T4KE0263', 'mortgage', 'Vendor G', 'Vendor G', '2023-01-03', 'Completed'),
  createData('AD5KE0263', 'mortgage', 'Vendor H', 'Vendor H', '2023-01-04', 'Active'),
  createData('FG6KE0263', 'mortgage', 'Vendor I', 'Vendor I', '2023-01-05', 'Pending'),
  createData('BD7KE0263', 'mortgage', 'Vendor J', 'Vendor J', '2023-01-06', 'Completed'),
  createData('XM2KE0263', 'mortgage', 'Vendor E', 'Vendor E', '2023-01-11', 'Pending'),
  createData('ND3KE0263', 'mortgage', 'Vendor F', 'Vendor F', '2023-01-12', 'Completed'),
  createData('AD4KE0263', 'mortgage', 'Vendor G', 'Vendor G', '2023-01-13', 'Active'),
  createData('NS5KE0263', 'mortgage', 'Vendor H', 'Vendor H', '2023-01-14', 'Pending'),
  createData('XD6KE0263', 'mortgage', 'Vendor I', 'Vendor I', '2023-01-15', 'Completed'),
  createData('AR7KE0263', 'mortgage', 'Vendor J', 'Vendor J', '2023-01-16', 'Active'),
  createData('UD223576S3', 'mortgage', 'HELOCs', 'Vendor A', '2023-01-07', 'Active'),
  createData('RDSW25763', 'mortgage', 'Vendor B', 'Vendor B', '2023-01-08', 'Pending'),
  createData('CA2233F57', 'mortgage', 'Vendor C', 'Vendor C', '2023-01-09', 'Completed'),
  createData('DD6DH5763', 'mortgage', 'Vendor D', 'Vendor D', '2023-01-10', 'Active'),
  createData('XM2KE0263', 'mortgage', 'Vendor E', 'Vendor E', '2023-01-11', 'Pending'),
  createData('ND3KE0263', 'mortgage', 'Vendor F', 'Vendor F', '2023-01-12', 'Completed'),
  createData('AD4KE0263', 'mortgage', 'Vendor G', 'Vendor G', '2023-01-13', 'Active'),
  createData('NS5KE0263', 'mortgage', 'Vendor H', 'Vendor H', '2023-01-14', 'Pending'),
  createData('XD6KE0263', 'mortgage', 'Vendor I', 'Vendor I', '2023-01-15', 'Completed'),
  createData('AR7KE0263', 'mortgage', 'Vendor J', 'Vendor J', '2023-01-16', 'Active'),
];

export default function List({ onRowClick }) {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f5f5f5', flexDirection: 'column' }}>
      <div style={{ padding: '20px', backgroundColor: '#fff' }}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div style={{ width: '100%', padding: '20px', overflow: 'hidden', flex: 1 }}>
        <div style={{ height: '100%', overflow: 'auto' }}>
          <TableContainer component={Paper} style={{ maxHeight: '100%', overflow: 'auto' }}>
            <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 750 }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Case ID</TableCell>
                  <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Document Type</TableCell>
                  <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Vendor Name</TableCell>
                  <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Document Vendor</TableCell>
                  <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Date Created</TableCell>
                  <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.length > 0 ? (
                  filteredRows.map((row) => (
                    <TableRow
                      key={row.caseId}
                      onClick={() => onRowClick(row)}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      style={{ cursor: 'pointer' }}
                    >
                      <TableCell component="th" scope="row" style={{ fontWeight: 'bold', fontSize: '14px' }}>
                        {row.caseId}
                      </TableCell>
                      <TableCell style={{ fontSize: '14px' }}>{row.documentType}</TableCell>
                      <TableCell style={{ fontSize: '14px' }}>{row.vendorName}</TableCell>
                      <TableCell style={{ fontSize: '14px' }}>{row.documentVendor}</TableCell>
                      <TableCell style={{ fontSize: '14px' }}>{row.dateCreated}</TableCell>
                      <TableCell style={{ fontSize: '14px' }}>{row.status}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      <Typography>No results found</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
