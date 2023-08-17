import React from 'react'
import Header from './Header';
import styled from '@emotion/styled';
import FooterCom from './FooterCom';
import Billing_Text from './Billing_Text';
import FormBilling from './FormBilling';


const Home = () => {
    const Home=styled.div({
      backgroundColor: "#FCF3E6",
      boxShadow: "110px 134px 210px 0px rgba(0, 0, 0, 0.15)",
      // maxWidth: "1440px",
      // maxHeight: "2239px",
    
   
    })
  return (
    // <SwipeableTemporaryDrawer/>
    <Home>
       <Header/>
        < Billing_Text/>
        <FormBilling/>
        <FooterCom/>
        
    </Home>
  )
}

export default Home
