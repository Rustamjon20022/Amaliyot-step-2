import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { Container } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    fontSize: 17
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getdata()
  }, [])

  const getdata = () => (
    axios.get("http://localhost:8000/api/sold").then(res => {
      setData(res.data)
    }))


  return (
      <Container>
      <div style={{padding:'0.5%',height:'50px', display:'flex', justifyContent:'center'}} >
        <Link to={'/mahsulotlar'} style={{textDecoration:'none'}} >
            <Button variant="contained">Ortga</Button>
        </Link>
      </div>
        <TableContainer sx={{width:'99%',marginLeft:'0.5%'}} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead >
            <TableRow >
                <StyledTableCell sx={{width:'4%'}} >t/r</StyledTableCell>
                <StyledTableCell sx={{width:'20%'}} >Nomi</StyledTableCell>
                <StyledTableCell sx={{width:'20%'}}  align="center">Narxi</StyledTableCell>
                <StyledTableCell sx={{width:'20%'}}  align="center">Miqdori</StyledTableCell>
                <StyledTableCell sx={{width:'20%'}}  align="center">Rasm</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row, index) => (
                <StyledTableRow key={index}>
                    <StyledTableCell>{index + 1}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                    {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                    <StyledTableCell align="center">{row.quantity} {row.unity}</StyledTableCell>
                    <StyledTableCell align="center"><img src={row.image} style={{width:'60px',borderRadius:'8px'}} /></StyledTableCell>
                </StyledTableRow>
            ))}

            </TableBody>
        </Table>
        </TableContainer>
      </Container>
  );
}





