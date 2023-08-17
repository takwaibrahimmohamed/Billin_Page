import { Box, Button, CardContent, CardMedia, Checkbox, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, Link, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
const FormBilling = () => {
const SelectItem=styled(Select)({
 border:"1.5px solid rgba(0, 0, 0, 0.20)",
 
 borderRadius:"14px",
fontSize:"20px"
})

  const TextFieldClass=styled(TextField)({
    
    marginTop:"20px",
    border:"none",
    borderRadius: "14px",
    border: "1.5px solid rgba(0, 0, 0, 0.20)",
  })
  const [Country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
   <Container sx={{marginTop:"30px"}} >
     <Grid container>
    <Grid xs={12} sm={12} md={7} lg={7}>
    <Box>
    <form autoComplete="off" >
    
        <FormLabel 
          style={{
           
            color: "#000",
            fontFamily: "Nexa Bold",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "25px", /* 125% */
            letterSpacing: "0.6px",
            
          }}
        >Contact</FormLabel>
      <TextFieldClass 
      
      type="text" fullWidth  defaultValue="Email or mobile number" 
       sx={{
        "& fieldset": { border: 'none' },
      }}
      InputProps={{
        style: {
          fontFamily: "Nexa Bold",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "25px",
          color: "rgba(0, 0, 0, 0.50)",
        }
    }}
      />
      <FormControlLabel control={<Checkbox  style={{color:"#294E2C",margin:"15px 0"}}/>} label="Email me with news and offers"  
      
        style={{
          color: "rgba(38, 38, 38, 0.50)",
            fontFamily: "Nexa Bold",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "22px", 
        }}  
      />
      <Typography style={{
          
          marginBottom:"20px",
          color:" #000",
          fontFamily: "Nexa Bold",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "25px", /* 125% */
          letterSpacing: "0.6px",
      }}>Shipping address</Typography>
      
      
    
  
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label" style={{
    color: "#000",
    fontFamily: "Nexa Bold",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: '25px',
    
  }}>Country</InputLabel>
  <SelectItem
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={Country}
    defaultValue="Country"
    onChange={handleChange}
   
    sx={{
      "& fieldset": { border: 'none' }
    }}
    selectFieldRoot={{color: "#fff"}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </SelectItem>
</FormControl>

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
       
      }}
    >
      <TextFieldClass
      fullWidth
       type='text'
        id="demo-helper-text-aligned"
        defaultValue="First name"
       
        sx={{marginRight:"15px",
          "& fieldset": { border: 'none' },
        }}
        InputProps={{
          style: {
            color:"red",
            fontFamily: "Nexa Bold",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "25px",
            color: "rgba(0, 0, 0, 0.50)",
          }
      }}
      />
      <TextFieldClass
      fullWidth
        
        id="demo-helper-text-aligned-no-helper"
        defaultValue="Last name"
        sx={{
          "& fieldset": { border: 'none' },
        }}
        InputProps={{
          style: {
            fontFamily: "Nexa Bold",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "25px",
            color: "rgba(0, 0, 0, 0.50)",
          }
      }}
      />
      
    </Box>
    <TextFieldClass
      fullWidth
        
        id="demo-helper-text-aligned-no-helper"
        defaultValue="Company (Optional)"
        sx={{
          "& fieldset": { border: 'none' },
        }}
        InputProps={{
          style: {
            fontFamily: "Nexa Bold",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "25px",
            color: "rgba(0, 0, 0, 0.50)",
          }
      }}
      />
    <TextFieldClass
      fullWidth
        
        id="demo-helper-text-aligned-no-helper"
        defaultValue="Address"
        sx={{
          "& fieldset": { border: 'none' },
        }}
        InputProps={{
          style: {
            fontFamily: "Nexa Bold",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "25px",
            color: "rgba(0, 0, 0, 0.50)",
          }
      }}
      />
    <TextFieldClass
      fullWidth
        
        id="demo-helper-text-aligned-no-helper"
        defaultValue="Apartment, suite, etc (Optional)"
        sx={{
          "& fieldset": { border: 'none' },
        }}
        InputProps={{
          style: {
            fontFamily: "Nexa Bold",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "25px",
            color: "rgba(0, 0, 0, 0.50)",
          }
      }}
      />
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
       
      }}
    >
      <TextFieldClass
      fullWidth
       
        id="demo-helper-text-aligned"
        defaultValue="Postal code"
       
        sx={{
          marginRight:"15px",
          "& fieldset": { border: 'none' },
        }}
        InputProps={{
          style: {
            fontFamily: "Nexa Bold",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "25px",
            color: "rgba(0, 0, 0, 0.50)",
          }
      }}
      />
      <TextFieldClass
      fullWidth
        
        id="demo-helper-text-aligned-no-helper"
        defaultValue="City"
    
        sx={{marginRight:"15px",
          "& fieldset": { border: 'none' },
        }}
        InputProps={{
          style: {
            fontFamily: "Nexa Bold",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "25px",
            color: "rgba(0, 0, 0, 0.50)",
          }
      }}
      />
      <TextFieldClass
      fullWidth
        
        id="demo-helper-text-aligned-no-helper"
        defaultValue="State/territory"
        sx={{
          "& fieldset": { border: 'none' },
        }}
        InputProps={{
          style: {

            fontFamily: "Nexa Bold",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "25px",
            color: "rgba(0, 0, 0, 0.50)",

          }
      }}
      />
      
    </Box>
    <TextFieldClass
      fullWidth
        
        id="demo-helper-text-aligned-no-helper"
        defaultValue="Phone number"
        sx={{
          "& fieldset": { border: 'none' },
        }}
        InputProps={{
          style: {
            fontFamily: "Nexa Bold",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "25px",
            color: "rgba(0, 0, 0, 0.50)",
            
          }
      }}
      />
      <FormControlLabel control={<Checkbox style={{color:"#294E2C"}}/>} 
     
      
      label="Email me with news and offers"
      
      style={{
        color: "rgba(38, 38, 38, 0.50)",
          fontFamily: "Nexa Bold",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "22px", 
      }} 
      />
        </form>
        <Button style={{
          borderRadius: "110px",
          background:"#FFA16C",
          boxShadow: "2px 5px 0px 0px #000",
          width:"100%",
          color:"#240F17",
          textAlign: "right",
          fontFamily: "Nexa Bold",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "25px", /* 166.667% */
          letterSpacing: "-0.45px",
          paddingTop:"10px",
          paddingBottom:"10px",
          marginTop:"20px"
        }}>Continue shopping</Button>
        <Link underline="none" style={{
          color:"#240F17",
          textAlign: "center",
          display:"block",
          fontFamily: "Nexa Bold",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "25px", /* 166.667% */
          letterSpacing: "-0.45px",
          marginTop:"20px",
          marginBottom:"50px",
        }}>Return to cart</Link>
    </Box>
    </Grid>
    <Grid xs={12} sm={12} md={4} lg={4} sx={{
//  paddingLeft:{md:"50px"}
 marginLeft:{md:"50px"},

 
  
  }}>
    <Box
    sx={{
      padding:{md:"20px 20px 20px 25px"},paddingTop:{xs:"20px"},paddingLeft:{xs:"7px"}
    }}
    style={{
      background: "rgba(22, 59, 27, 0.05)",
      borderRadius: "30px",
     
      width:"100%"
    }}>
      <Typography 
      style={{
        color: "#294E2C",
        fontFamily: "Prettywise Variable",
        fontSize:" 20px",
        fontStyle: "normal",
        fontWeight: "800",
        lineHeight: "45px", /* 225% */
        letterSpacing: "0.6px",
      }}  
      >
      Order Summary
      </Typography>
      <Box style={{
        display:"flex",
        justifyContent: "space-between",
        marginBottom:"20px"
        
      }}>
      <CardMedia
          style={{
            display: "flex",
            width: "99px",
            height: "99px",
            padding:" 15.3px 26.318px 16.2px 27px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "13.5px",
            border:" 1.35px solid #000",
            background:" #E5CBC4",
          
          }}
            component="img"
            alt="green iguana"
          
            image="https://s3-alpha-sig.figma.com/img/4cba/0f1a/2c77273d20cc18fc96db66b4ef6c6aed?Expires=1693180800&Signature=MY5IywXMFLCl8K9eGS9mmpQuJTyXqUQIGh2wvlSzb3e1yhAis~767KOj9W7pxT6C9o0QDfmoEQswjAN~satUGGEcEys~UGK0G4l7YszQc3CHdyaqhAW3Sz7gaVBKIL4daosCnfjdi4KfpPLixhLF80JcyAdt27isJsLnxO34Sj2m6Tcb9SUhRerWJ3cShKJclsucTVpaD-42d3bQroK0SAqGOaWO~7m5Ef0-Yzol~-7WTwSTyhHbz-oPTiMeIxZ-ugxZ8w2FTLbG5xWiOGVACVJ5nGMMaK-lUSyfybNuGRr-tiNhWwzBgqnT4YWdpDxKGhWgFbC8i9ax~lo8F32yRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <CardContent style={
            {
               
               
              paddingTop:"0",
              display:"flex",
              alignItems: "initial",
              flexDirection:"column",
              gap:"16px"
              
            }}
            >
                <Typography 
                style={{
                  color:  "#294E2C",
                    fontFamily: "Prettywise Variable",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "25px", /* 138.889% */
                    letterSpacing: "0.54px",
                    textTransform: "uppercase",
                }}
                >Brazil - Coração de Melão</Typography>
                <Box style={{
        display:"flex",
        justifyContent: "space-between",
        alignItems:"center"
      }}>
                  <Typography
                  style={{
                    color: "rgba(36, 15, 23, 0.40)",
                    fontFamily:" Nexa XBold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "800",
                    lineHeight: "25px", /* 166.667% */
                    letterSpacing: "-0.45px",
                    textTransform: "uppercase",
                  }}
                  >quantity: 1</Typography>
                  <Typography  
                  style={{
                    color: "#294E2C",
                    textAlign: "right",
                    fontFamily:" Prettywise Variable",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: '35px', /* 194.444% */
                    letterSpacing: "0.54px",
                    textTransform: "uppercase",
                  }}  
                  >$15.00</Typography>
                </Box>
            </CardContent>
      </Box>
      <Box style={{
        display:"flex",
        justifyContent: "space-between",
       marginBottom:"20px"
        
      }}>
      <CardMedia
          style={{
            display: "flex",
            width: "99px",
            height: "99px",
            padding:" 15.3px 26.318px 16.2px 27px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "13.5px",
            border:" 1.35px solid #000",
            background:" #E5CBC4",
          
          }}
            component="img"
            alt="green iguana"
          
            image="https://s3-alpha-sig.figma.com/img/4cba/0f1a/2c77273d20cc18fc96db66b4ef6c6aed?Expires=1693180800&Signature=MY5IywXMFLCl8K9eGS9mmpQuJTyXqUQIGh2wvlSzb3e1yhAis~767KOj9W7pxT6C9o0QDfmoEQswjAN~satUGGEcEys~UGK0G4l7YszQc3CHdyaqhAW3Sz7gaVBKIL4daosCnfjdi4KfpPLixhLF80JcyAdt27isJsLnxO34Sj2m6Tcb9SUhRerWJ3cShKJclsucTVpaD-42d3bQroK0SAqGOaWO~7m5Ef0-Yzol~-7WTwSTyhHbz-oPTiMeIxZ-ugxZ8w2FTLbG5xWiOGVACVJ5nGMMaK-lUSyfybNuGRr-tiNhWwzBgqnT4YWdpDxKGhWgFbC8i9ax~lo8F32yRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <CardContent style={
            {
               
              paddingTop:"0",
              display:"flex",
              alignItems: "initial",
              flexDirection:"column",
              gap:"16px"
            }}
            >
                <Typography 
                style={{
                  color:  "#294E2C",
                    fontFamily: "Prettywise Variable",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "25px", /* 138.889% */
                    letterSpacing: "0.54px",
                    textTransform: "uppercase",
                }}
                >Brazil - Coração de Melão</Typography>
                <Box style={{
        display:"flex",
        justifyContent: "space-between",
        alignItems:"center"
      }}>
                  <Typography
                  style={{
                    color: "rgba(36, 15, 23, 0.40)",
                    fontFamily:" Nexa XBold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "800",
                    lineHeight: "25px", /* 166.667% */
                    letterSpacing: "-0.45px",
                    textTransform: "uppercase",
                  }}
                  >quantity: 1</Typography>
                  <Typography  
                  style={{
                    color: "#294E2C",
                    textAlign: "right",
                    fontFamily:" Prettywise Variable",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: '35px', /* 194.444% */
                    letterSpacing: "0.54px",
                    textTransform: "uppercase",
                  }}  
                  >$15.00</Typography>
                </Box>
            </CardContent>
      </Box>
      <Divider/>
      <Typography 
       sx={{
        justifyContent:{xs:"center",sm:'flex-start',md:'flex-start',lg:'flex-start'}
      }}
      style={{
        display:"flex",
        // justifyContent:"center",
        alignContent:"center",
        color: "#240F17",
        fontFamily:" Nexa Bold",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: '25px', /* 125% */
        letterSpacing: "-0.6px",
        padding:"20px 0"
      }}  
     
      >
        <AddIcon style={{marginRight:"10px"}}/>
       
        Promo code
      </Typography>
      <Divider/>
              <Box 
             
             
              style={{
                display:"flex",
                justifyContent: "space-between",
                alignItems:"center",
                marginTop:"20px",
                
              }}
              sx={{
                marginRight:{xs:"10px",md:"0px"},marginLeft:{xs:"10px",md:"0px"}
              }}
              >
                  <Typography
                  style={{
                    color: "#294E2C",
                    fontFamily:"Nexa XBold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "45px", /* 166.667% */
                    letterSpacing: "0.45px",
                   
                  }}
                  
                  >Sub Total</Typography>
                  <Typography  
                  style={{
                    color: "#294E2C",
                    textAlign: "right",
                    fontFamily:"Nexa XBold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: '45px', /* 194.444% */
                    letterSpacing: "0.45px",
                   
                  }}  
                  >$34.00</Typography>
              </Box>
              <Box style={{
                display:"flex",
                justifyContent: "space-between",
                alignItems:"center"
              }}
              sx={{
                marginRight:{xs:"10px",md:"0px"},marginLeft:{xs:"10px",md:"0px"}
              }}
              >
                  <Typography
                  style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    fontFamily:" Nexa XBold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "45px", /* 166.667% */
                    letterSpacing: "0.45px",
                    
                  }}
                  >Discount</Typography>
                  <Typography  
                  style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    textAlign: "right",
                    fontFamily:" Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: '45px', /* 194.444% */
                    letterSpacing: "0.45px",
                   
                  }}  
                  >(20%) - $5.00</Typography>
              </Box>
             
              <Box style={{
                display:"flex",
                justifyContent: "space-between",
                alignItems:"center"
              }}
              sx={{
                marginRight:{xs:"10px",md:"0px"},marginLeft:{xs:"10px",md:"0px"}
              }}
              >
                  <Typography
                  style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    fontFamily:" Nexa XBold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "45px", /* 166.667% */
                    letterSpacing: "0.45px",
                    
                  }}
                  >Delivery</Typography>
                  <Typography  
                  style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    textAlign: "right",
                    fontFamily:" Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: '45px', /* 194.444% */
                    letterSpacing: "0.45px",
                   
                  }}  
                  >$0.00</Typography>
              </Box>
              <Box style={{
                display:"flex",
                justifyContent: "space-between",
                alignItems:"center"
              }}
              sx={{
                marginRight:{xs:"10px",md:"0px"},marginLeft:{xs:"10px",md:"0px"}
              }}
              >
                  <Typography
                  style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    fontFamily:" Nexa XBold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "45px", /* 166.667% */
                    letterSpacing: "0.45px",
                    
                  }}
                  >Tax</Typography>
                  <Typography  
                  style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    textAlign: "right",
                    fontFamily:" Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: '45px', /* 194.444% */
                    letterSpacing: "0.45px",
                   
                  }}  
                  >+ $12.00</Typography>
              </Box>
              <Box style={{
                display:"flex",
                justifyContent: "space-between",
                alignItems:"center"
              }}
              sx={{
                marginRight:{xs:"10px",md:"0px"},marginLeft:{xs:"10px",md:"0px"}
              }}
              >
                  <Typography
                  style={{
                    color: "#294E2C",
                    fontFamily:"Nexa XBold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "45px", /* 166.667% */
                    letterSpacing: "0.45px",
                   
                  }}
                  >Total</Typography>
                  <Typography  
                  style={{
                    color: "#294E2C",
                    textAlign: "right",
                    fontFamily:"Nexa XBold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: '45px', /* 194.444% */
                    letterSpacing: "0.45px",
                   
                  }}  
                  >$34.00</Typography>
              </Box>
              
    </Box>
    </Grid>
    
  </Grid>
   </Container>
  )
}

export default FormBilling
