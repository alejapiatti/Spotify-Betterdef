import React from "react";
import {Container} from "react-bootstrap";



export default function Login() {

    const CLIENT_ID = "5bc283c16a824cd7afb8b3b5c8c253fd"
    const REDIRECT_URI = "http://localhost:3000/callback";
    const AUTH_ENDPOINT= 'http://accounts.spotify.com/authorize';
    const SECRET = '219a5e5d915341e78ef35dda952da9fe'
    const scopes= ["user-read-email", 
    "user-read-private","user-library-read",
    "user-library-modify","user-read-playblack-state",
     "user-modify-playback-state"]
    
    
    return (
       
       <Container className="d-flex justify-content-center align-items-center" style= {{minHeight: "100vh"}}>
        
        <a className='btn btn-success btn-lg' 
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}
        &redirect_uri=${REDIRECT_URI}
        &response_type=token&secret_key=${SECRET}
        &scopes=${scopes.join("%20")}`}> Login with Spotify 
        </a>
        </Container>
    )

}
   
const 