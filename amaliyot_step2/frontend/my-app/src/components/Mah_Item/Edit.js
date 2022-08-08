import React, { useEffect } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Link, useNavigate, useParams } from 'react-router-dom'

function Add() {
  const navigate = useNavigate()
  const { id } = useParams();

  const [nomi, setNomi] = React.useState('');
  const [narxi, setNarxi] = React.useState('');
  const [miqdori, setMiqdori] = React.useState('');
  const [birlik, setBirlik] = React.useState('');
  const [rasm, setRasm] = React.useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`).then((response) => {
      setNomi(response.data.name);
      setNarxi(response.data.price);
      setMiqdori(response.data.quantity);
      setBirlik(response.data.unity);
      setRasm(response.data.image);
    });
  }, []);

  const updateData = {
    name: nomi,
    price: narxi,
    quantity: miqdori,
    unity: birlik,
    image: rasm
  }

  const Update = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:8000/api/product/${id}`, updateData)
      .then(
        navigate("/mahsulotlar")
      )
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '593px ', marginLeft: '0.5%', width: '99%' }}>
      <Box sx={{ border: '1px solid white', width: '90%', padding: '2%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}sm={12}>
            <Box>
              <TextField onChange={(e) => setNomi(e.target.value)} value={nomi} sx={{ width: '100%' }} id="outlined-basic" label="Nomi" variant="outlined" /><br />
            </Box>
          </Grid>
          <Grid item xs={6}sm={12}>
            <Box>
              <TextField onChange={(e) => setNarxi(e.target.value)} value={narxi} sx={{ width: '100%' }} id="outlined-basic" label="Narxi" variant="outlined" /><br />
            </Box>
          </Grid>
          <Grid item xs={6}sm={12}>
            <Box>
              <TextField onChange={(e) => setMiqdori(e.target.value)} value={miqdori} sx={{ width: '100%', marginTop: '1%' }} id="outlined-basic" label="Miqdori" variant="outlined" /><br />
            </Box>
          </Grid>
          <Grid item xs={6}sm={12}>
            <Box>
              <Box sx={{ minWidth: 120, marginTop: '1%' }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Birlik</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={(e) => setBirlik(e.target.value)}
                    value={birlik}
                  >
                    <MenuItem value={'kg'}>kg</MenuItem>
                    <MenuItem value={'dona'}>dona</MenuItem>
                    <MenuItem value={'tonna'}>tonna</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1%' }} >
              <TextField onChange={(e) => setRasm(e.target.value)} value={rasm} sx={{ width: '50%' }} id="outlined-basic" label="Rasm url" variant="outlined" />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', }} >
          <Link style={{ textDecoration: 'none' }} to={'/mahsulotlar'} >
            <Button variant="contained">Bekor qilish</Button>
          </Link>

          <Link style={{ textDecoration: 'none' }} to={'/mahsulotlar'} >
            <Button variant="contained" onClick={Update}>Yangilash</Button>
          </Link>
        </Box>
      </Box>
    </div>
  )
}

export default Add