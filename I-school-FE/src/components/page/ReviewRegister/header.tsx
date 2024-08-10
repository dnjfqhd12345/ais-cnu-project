import { Button, Typography, Grid, TextField, IconButton } from "@mui/material";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import "styles/review-register.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Header = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Grid container alignItems="center" className="register-header-container">
      <Grid item xs={4} container justifyContent="flex-start">
        <IconButton onClick={handleBackClick}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </Grid>
      <Grid item xs={4} container justifyContent="center">
        <Typography variant="h6" className="rating-title">
          강의평 등록
        </Typography>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default Header;
