import { useEffect, useState } from "react"
import Wsserver from "./Wsserver";

const TesteServer =()=>{

const {conectarWeobSocket}=Wsserver();
    // Chama a função
  

    conectarWeobSocket();
    const [conectar,setConectar] = useState("conectado");
    return({conectar});
}
export default TesteServer

