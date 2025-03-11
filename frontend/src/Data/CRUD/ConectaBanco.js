import { useState } from "react";
import { useEffect } from "react";

const ConectaBanco =()=>{
   
    console.log("conecta banco esta a funcionar")
    const [temperatura,setTemperatura] = useState(null);
    const [numeroImpressoes,setNumeroImpressoes] = useState(null);
    const enviarDados = async (valores) => {
        try {
            const response = await fetch("http://192.168.2.184:3001/api/dados", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(valores)
            });
    
            const data = await response.json();
            console.log('Resposta do servidor:', data);
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };
    
    // Chama a função
   


    // Chama a função
    
    useEffect(() => { setTimeout(()=>{ 
        
        const socket = new WebSocket("ws://192.168.3.197:5000");
        socket.onopen = () => console.log("Conectado!");
        socket.onmessage = (event) =>{
        
        setTemperatura(event.data);
          
        } },1000) },[temperatura]);

        useEffect(() => { setTimeout(()=>{ 
        
            const socket = new WebSocket("ws://192.168.3.197:5001");
            socket.onopen = () => console.log("Conectado!");
            socket.onmessage = (event) =>{
            
            setNumeroImpressoes(event.data);
           
            } },1000) },[numeroImpressoes]);
            console.log(numeroImpressoes)
    return(
        {
            enviarDados,temperatura,numeroImpressoes
        }
    )
}
export default ConectaBanco