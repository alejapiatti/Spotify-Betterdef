import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';


export default function SearchBar() {

    const [search, setSearch] = useState ("")
    
    
    return (

        <InputGroup className='mb-3'size="md" style={{width:"60%",height:"40px",padding: "6px 48px", backgroundColor: "field"}}>
        <FormControl placeholder='Search for Artist or Song'
        type='input'
        onKeyPress={event => {
            if (event.key === "Enter") {
                console.log("Press Enter");
        }
    }}
    onChange={event => {setSearch(event.target.value);}}/>

    <Button className= "btn btn-success" size="large-success"style={{width:"100px"}} onClick={event => {console.log("Clicked Button")}}>
    </Button>
        </InputGroup>
    )

}
