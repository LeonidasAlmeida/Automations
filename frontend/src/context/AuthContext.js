import { createContext, useEffect, useRef, useState } from "react"
export const LoginContext = createContext();
const AuthContext =({ children })=>{ 
//leitura dos estates....
  const [codigo,setCodigo]=useState(5600437646014);
  const [status,setStatus]=useState(false);
//Leitura das referencias.... 
//Fazer login
const DoLogin=(props)=>{
    if(Number(codigo)!==Number(props)){
      setStatus(false);
    }
    else{
        setInterval(()=>{
            setStatus(true);
        },1000);
    }
}
//retorno do Provider....
    return(
            <LoginContext.Provider value={{codigo,status,DoLogin}}>
                {children}
            </LoginContext.Provider>
        )}
export default AuthContext