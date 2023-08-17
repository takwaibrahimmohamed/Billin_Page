import styled from '@emotion/styled'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Billing_Text = () => {
    const TypographyText=styled(Typography)({
        color: "#294E2C",
        fontFamily: "Nexa Bold",
        fontSize: "15px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "35px", /* 233.333% */
        letterSpacing: "0.45px",
        textTransform: "uppercase",
    })

  return (
    <>
        <Container
       
  
    >
         <Typography 
           style={{
            color: "#294E2C",
            fontFamily: "Prettywise Variable",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "65px", /* 162.5% */
            letterSpacing: "1.2px",
            marginTop:"20px"
    }}
         > Biilling</Typography>
     <Box
        sx={{
            marginTop:"20px",
          display: 'flex',
          justifyContent: 'space-between',
         
         
        }}
      >
        <TypographyText>shopping</TypographyText>
        <TypographyText>delivery</TypographyText>
        <TypographyText>payment</TypographyText>
      </Box>
      <Box 
      sx={{
      
      display: 'flex',
      alignItems: 'center',
    //   justifyContent:"center",
     
    }}
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="1130" height="2" viewBox="0 0 1130 2" fill="none">
            <path d="M0 1H1130" stroke="#294E2C" stroke-width="1.5"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6" fill="#294E2C"/>
            </svg>
      </Box>
      
    </Container>
   
    </>
  )
}

export default Billing_Text
