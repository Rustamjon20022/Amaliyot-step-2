import React from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));


export default function BasicStack() {
  const state = useSelector((state)=>state)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(state.savatcha);

  const Add = () => {
    axios.post('http://localhost:8000/api/sold', state.savatcha)
    .then(
      navigate('/mahsulotlar'),
      dispatch({type: "DEL_ALL" })

    )
  }

  const delS = (value) => {
    const tasdiq = window.confirm("bu mahsulot o'chirilsinmi")
    if(tasdiq){
      dispatch({type: "DEL_CARD", payload: value})
    }
  }

  return (
    <Box sx={{ width: '100%',  display:'flex',justifyContent:'center', }}>
      <Stack sx={{border:'2px solid gray', width:'60%',marginLeft:'0.5%',padding:'2%'}} spacing={2}>
        {state.savatcha.map((value, index)=> (
          <Item key={index} >
             <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <img src={value.image} alt='something went wrong' style={{width:'60%',borderRadius:'10px',background:'#FBFBFB'}} />
              </Grid>
              <Grid sx={{marginTop:'1.5%'}} item md={3}>
                <h1>{value.name}</h1>
                <h3>{value.quantity} {value.unity}</h3>
              </Grid>
              <Grid sx={{display:'flex', justifyContent:'center', alignItems:'center'}} item md={3}>
                <h1>{value.price}so'm</h1>
              </Grid>
              <Grid sx={{display:'flex', justifyContent:'end', alignItems:'center'}} item md={3}>
              <IconButton onClick={()=>delS(value)} aria-label="delete">
                  <DeleteIcon sx={{color:'red'}} />
                </IconButton>
              </Grid>
            </Grid>
          </Item>
        ))}
        <Box sx={{justifyContent:'center', display:'flex'}}>
          <Button variant='contained' onClick={Add} >Sotib olish</Button>
        </Box>
      </Stack>
    </Box>
  );
}