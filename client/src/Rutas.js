import {Route, Redirect} from "react-router-dom";
import Login from "./pages/Login"

export default function Rutas() {

    return( 

<>

<Redirect exact from="/" to="/login" />

<Route path="/login">
<Login />
</Route>
</>
)
}

const saludo= "hola"
console.log (saludo)