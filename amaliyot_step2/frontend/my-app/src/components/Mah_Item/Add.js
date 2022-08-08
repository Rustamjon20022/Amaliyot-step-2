import React from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

function Add() {
  const setData = [];
  const [nomi, setNomi] = React.useState('');
  const [narxi, setNarxi] = React.useState('');
  const [miqdori, setMiqdori] = React.useState('');
  const [birlik, setBirlik] = React.useState('');
  const [rasm, setRasm] = React.useState('');

  const Post = async () => {
    await axios.post("http://localhost:8000/api/product", {
      name: nomi,
      price: narxi,
      quantity: miqdori,
      unity: birlik,
      image: rasm,
    })
      .then((response) => {
        setData(response.data);
      })
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '593px ', marginLeft: '0.5%', width: '99%' }}>
      <Box sx={{ border: '1px solid yellow', width: '30%', padding: '2%' }}>
        <TextField onChange={(e) => setNomi(e.target.value)} sx={{ width: '100%' }} id="outlined-basic" label="Nomi" variant="outlined" /><br />
        <TextField onChange={(e) => setNarxi(e.target.value)} sx={{ marginTop: '5%', width: '100%' }} id="outlined-basic" label="Narxi" variant="outlined" /><br />
        <TextField onChange={(e) => setMiqdori(e.target.value)} sx={{ marginTop: '5%', width: '100%' }} id="outlined-basic" label="Miqdori" variant="outlined" /><br />
        <Box sx={{ minWidth: 120, marginTop: '5%' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Birlik</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              onChange={(e) => setBirlik(e.target.value)}
            >
              <MenuItem value={'kg'}>kg</MenuItem>
              <MenuItem value={'dona'}>dona</MenuItem>
              <MenuItem value={'tonna'}>tonna</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField onChange={(e) => setRasm(e.target.value)} sx={{ marginTop: '5%', width: '100%' }} id="outlined-basic" label="Rasm url" variant="outlined" />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '5%' }} >
          <Link style={{ textDecoration: 'none' }} to={'/mahsulotlar'} >
            <Button variant="contained">Bekor qilish</Button>
          </Link>

          <Link style={{ textDecoration: 'none' }} to={'/mahsulotlar'} >
            <Button variant="contained" onClick={Post}>Qo'shish</Button>
          </Link>
        </Box>
      </Box>
    </div>
  )
}

export default Add