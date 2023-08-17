import { CardMedia, Container } from '@mui/material'
import React from 'react'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box } from "@mui/material";
const FooterCom = () => {
  return (
    <div>
     
      <Container>
      <Box
      component="footer"
      
    >
      <Container >
      
        <Box mt={5} >
          <Typography variant="body2" color="text.secondary" align="center"
          
          style={{

            color:  "#A89C96",
            fontFamily: "Nexa Bold",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            letterSpacing: "-0.6px",
            paddingBottom:"50px"
          }}
          
          >
          Copyright © 2023 tols.design, all rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
      </Container>
   
    </div>
  )
}

export default FooterCom
