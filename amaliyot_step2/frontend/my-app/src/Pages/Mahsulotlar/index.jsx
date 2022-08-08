import React from "react";
import Table from "../../components/Mah_Item/Table";
import { Link, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

function index() {
  return (
    <Container>
      <div style={{display:'flex', justifyContent:'space-between',padding:'0.5%',height:'60px'}} >
        <Link style={{textDecoration:'none'}} to="/mahsulotlar/Sotilganlar">
          <Button variant="contained">Sotilgan mahsulotlar</Button>
        </Link>
        <Link style={{textDecoration:'none'}} to="/mahsulotlar/qoshish">
          <Button variant="contained">Add</Button>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Table />} />
      </Routes>
    </Container>
  );
}

export default index;
