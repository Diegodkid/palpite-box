import React from "react";
import Layoult from "../components/Layoult";
import '../css/style.css'

const MyApp = ({Component, pageProps}) => {
   return (
      <Layoult>
         <Component {...pageProps} />   
      </Layoult>      
   )
}
export default MyApp