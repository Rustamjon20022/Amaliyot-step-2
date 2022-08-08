import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, useParams, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function RowAndColumnSpacing() {
  const state = useSelector((state)=>state)
  console.log(state);
  const dispatch = useDispatch()

  const AddFav = () =>{
      dispatch({type:'ADD_FAV', payload: uzgar })
      axios.put(`http://localhost:8000/api/product/${id}`, NewPro)
      .then(
        navigate('/savatcha')

      )
  }
  const ortga = () => {
    navigate('/')
  }

    const navigate  = useNavigate()
    const { id } = useParams();

    const [data, setData] = useState([])
    const [count, setCount] = useState(1)

    const handleAdd = () => {
      if( count <= data.quantity-1 ){
        setCount(count+1)
      }
    }
    const handleMinus = () => {
        if( count >= 2 ){
            setCount(count-1)
        }
    }

    const uzgar = {
        "name": data.name,
        "price": count*data.price,
        "quantity": count,
        "unity": data.unity,
        "image": data.image,
        "id": data.id
    }

    const NewPro = {
      "name": data.name,
      "price": data.price,
      "quantity": data.quantity - count,
      "unity": data.unity,
      "image": data.image,
  }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`).then((response) => {
            setData(response.data);
        });
      }, []);
  return (
    <Box sx={{ width: '100%' }}>
      <Grid sx={{marginTop:'2%',  padding: 3,border:'1px solid white' }} justifyContent='center' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={5} lg={5}>
          <Box>
              <img src={data.image} style={{width:'100%', height:'410px', borderRadius:'10px'}} alt="something went wrong" />
          </Box>
        </Grid>
        <Grid sx={{textAlign:{ xs:'center', sm:'left', md:'left', lg:'left' }}} item xs={10} sm={6} md={5} lg={5}>
          <Box sx={{marginTop:'10px'}}>
              <Typography variant='h5' color='text.secondary'>Mahsulot Nomi</Typography>
              <Typography variant='h5' sx={{color:'#FF7F27'}}>{data.name}</Typography>
              <Typography variant='h5' sx={{marginTop:'2%'}} color='text.secondary'>Miqdori</Typography>
              <Typography variant='h5' sx={{color:'#FF7F27'}} >{data.quantity} {data.unity}</Typography>
              <Typography variant='h5' sx={{marginTop:'2%'}} color='text.secondary'>Narxi</Typography>
              <Typography variant='h5' sx={{color:'#FF7F27'}}>{data.price} so'm</Typography>
              <Typography variant='h5' sx={{marginTop:'2%'}} color='text.secondary'>Jami Summa</Typography>
              <Typography variant='h5' sx={{color:'#FF7F27'}}>{data.price*count} so'm</Typography>
                <Box sx={{marginTop:'7%', display:'flex',}}>
                    <Button onClick={handleMinus} sx={{marginLeft:'30px'}} variant='outlined'><RemoveIcon/></Button>&nbsp;
                    <p style={{fontSize:'30px', marginLeft:'30px'}} >{count}</p>&nbsp;
                    <Button onClick={handleAdd} variant='outlined' sx={{marginLeft:'30px'}} ><AddIcon/></Button>
                </Box>
              <Button variant='contained'color="success" sx={{marginTop:'10%'}} onClick={ortga}>Bekor qilish</Button>&nbsp;&nbsp;&nbsp;
              <Button variant='contained' sx={{marginTop:'10%'}} onClick={AddFav}>Savatchaga</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
