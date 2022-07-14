import React from "react";
import Main from "./Components/Main";
import Header from "./Components/Header";
import image from './Assests/image.jpg'
const App = () => {
  const myStyle= {
    backgroundImage: `url(${image})`,
    height: "700px",
    width: "1300px",
   
    top: "0",
    fontSize: "30px",
    left: "0",
    backgroundSize:"cover",
    position:"static",
    
    backgroundRepeat: "no-repeat"


  }
  return (
    <div style={myStyle} class="center">

      <Header /> 
        
    </div>
    
  )
}

export default App;
