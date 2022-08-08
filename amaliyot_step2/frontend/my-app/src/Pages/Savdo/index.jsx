import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'
import { Container } from "@mui/material";

export default function RowAndColumnSpacing() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getdata();
  }, []);

  const getdata = () =>
    axios.get("http://localhost:8000/api/product").then((res) => {
      setData(res.data);
    });

    const NoMahsulot = (e) => {
      alert("Bu mahsulotdan bosha qolmadi")
    }

  return (
    <Container>
    <Box sx={{ width: "100%", marginTop: "40px" }}>
      <Grid justifyContent="center" container spacing={2}>
        <Grid xs={12}>
          <Grid container>
            {data.map((value, index) => (
              (
                value.quantity != "0" ? ( <Grid key={index} sx={{paddingBottom:'20px', justifyContent:'center', display:'flex', marginLeft:{ xs:'10px', sm:'0px', md:'0px', lg:'0px'}}} xs={12} sm={6} md={4} lg={3}>
                  <Card sx={{ width:'290px' }}>
                    <CardMedia
                    sx={{background:'#FBFBFB'}}
                      component="img"
                      alt="something went wrong"
                      height="260"
                      image={value.image}
                    />
                    <CardContent>
                      <Typography sx={{textAlign:'center'}} variant="h5">
                        {value.name}
                      </Typography>
                      <Typography sx={{textAlign:'center'}}>
                      Bizda  {value.quantity} {value.unity} bor
                      </Typography>
                      <Typography sx={{textAlign:'center'}}>
                      Bir {value.unity} {value.price} so'm
                      </Typography>
                    </CardContent>
                    <CardActions sx={{display:'flex', justifyContent:'center',marginTop:'-20px'}} >
                      <Link style={{textDecoration:'none'}} to={`/sotibolish/${value.id}`}>
                        <Button size="medium" variant="contained" color="secondary">Xarid qilish</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
                ):(
                  <Grid key={index} sx={{paddingBottom:'20px', justifyContent:'center', display:'flex', marginLeft:{ xs:'10px', sm:'0px', md:'0px', lg:'0px' }}} xs={12} sm={6} md={4} lg={3}>
                  <Card sx={{ width:'290px',backgroundColor:'#FFF200', }}>
                    <CardMedia
                    sx={{background:'#FBFBFB'}}
                      component="img"
                      alt="something went wrong"
                      height="240"
                      image={value.image}
                    />
                    <CardContent>
                      <Typography sx={{textAlign:'center'}} variant="h5">
                        {value.name}
                      </Typography>
                      <Typography sx={{textAlign:'center'}}>
                      Bizda  {value.quantity} {value.unity} bor
                      </Typography>
                      <Typography sx={{textAlign:'center'}}>
                      Bir {value.unity} {value.price} so'm
                      </Typography>
                    </CardContent>
                    <CardActions sx={{display:'flex', justifyContent:'center',marginTop:'-20px'}} >
                        <Button size="small" variant='outlined' onClick={NoMahsulot} sx={{color:'black'}} >Sotib olish</Button>
                    </CardActions>
                  </Card>
                </Grid>
                )
              )
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}
