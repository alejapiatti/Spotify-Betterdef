import React from "react";
import {Container} from "react-bootstrap";



export default function Login() {

    const CLIENT_ID = "0e03f7856efb4ac1aa1f04a62d6ecb09"
    const REDIRECT_URI = "http://localhost:3000/callback";
    const AUTH_ENDPOINT= 'http://accounts.spotify.com/authorize';
    const SECRET = '54e87833c36c49b1b7dab53e9825521a'
    const scopes= ["user-read-email", 
    "user-read-private","user-library-read",
    "user-library-modify","user-read-playblack-state",
     "user-modify-playback-state"]
    
    
    return (
       
       <Container className="d-flex justify-content-center align-items-center" style= {{minHeight: "100vh"}}>
        
        <a className='btn btn-success btn-lg bg-#33FFAC text-#3633FF' 
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}
        &redirect_uri=${REDIRECT_URI}
        &response_type=token&secret_key=${SECRET}
        &scopes=${scopes.join("%20")}`}> Login with Spotify 
        </a>
        </Container>
    )

}
    