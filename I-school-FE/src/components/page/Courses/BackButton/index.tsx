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
        <IconButton onClick={handleBackClick}>
          <ArrowBackIosNewIcon />
        </IconButton>
  );
};

export default Header;
