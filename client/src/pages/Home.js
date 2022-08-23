import React, { useState, useEffect } from 'react';
import {Container} from "react-bootstrap";
import MainShow from  "../components/MainShow"
import Login from './Login';

const Home = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setAccessToken(token);
  }, []);

  return (

    <Container class= "bg-#33FFAC text-#3633FF">
    <div>
          <h1><strong>Disfruta de la música dondequiera que estés</strong></h1>  
          </div>

          <div><h2>Escucha las mejores novedades</h2></div>

          <div>
          <Login></Login>
          </div>
      
    
    </Container>
  )
};

export default Home;


