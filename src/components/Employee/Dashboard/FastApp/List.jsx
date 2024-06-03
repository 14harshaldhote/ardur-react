import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(caseId, documentType, vendorName, documentVendor) {
  return { caseId, documentType, vendorName, documentVendor };
}

const rows = [
  createData('AD2KE0263', 'mortgage', 'Vendor E', 'Vendor E'),
  createData('AD3KE0263', 'mortgage', 'Vendor F', 'Vendor F'),
  createData('AD4KE0263', 'mortgage', 'Vendor G', 'Vendor G'),
  createData('AD5KE0263', 'mortgage', 'Vendor H', 'Vendor H'),
  createData('AD6KE0263', 'mortgage', 'Vendor I', 'Vendor I'),
  createData('AD7KE0263', 'mortgage', 'Vendor J', 'Vendor J'),
  createData('AD223576S3', 'mortgage', 'HELOCs', 'Vendor A'),
  createData('ADSW25763', 'mortgage', 'Vendor B', 'Vendor B'),
  createData('AD2233F57', 'mortgage', 'Vendor C', 'Vendor C'),
  createData('AD6DH5763', 'mortgage', 'Vendor D', 'Vendor D'),
  createData('AD2KE0263', 'mortgage', 'Vendor E', 'Vendor E'),
  createData('AD3KE0263', 'mortgage', 'Vendor F', 'Vendor F'),
  createData('AD4KE0263', 'mortgage', 'Vendor G', 'Vendor G'),
  createData('AD5KE0263', 'mortgage', 'Vendor H', 'Vendor H'),
  createData('AD6KE0263', 'mortgage', 'Vendor I', 'Vendor I'),
  createData('AD7KE0263', 'mortgage', 'Vendor J', 'Vendor J'),
];

export default function List() {
  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f5f5f5' }}>
      <div style={{ width: '20%', background: '#f0f0f0', padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2>Sections</h2>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h2>Total Comments</h2>
        </div>
        <div>
          <h2>Comments</h2>
          <textarea style={{ width: '100%', height: '100px', marginBottom: '10px' }} />
          <div>
            <button style={{ marginRight: '10px' }}>Save</button>
            <button>Next & Save</button>
          </div>
        </div>
      </div>
      <div style={{ width: '80%', padding: '20px', overflow: 'hidden' }}>
        <div style={{ height: '500px', overflowY: 'auto' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>Case ID</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}>Document Type</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}>Vendor Name</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}>Document Vendor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.caseId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
                      {row.caseId}
                    </TableCell>
                    <TableCell>{row.documentType}</TableCell>
                    <TableCell>{row.vendorName}</TableCell>
                    <TableCell>{row.documentVendor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px' }}>
        {/* <ArrowBackIosIcon /> */}
      </div>
    </div>
  );
}
