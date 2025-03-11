import { useEffect, useState } from "react"

const HttpServer =()=>{
    const servidor = async () => {
        try {
            const response = await fetch('http://localhost:3001/');
            
            if (!response.ok) {
                // Se a resposta não for bem-sucedida, exibe o erro com a mensagem
                console.log('Erro na resposta da API:', response.statusText);
            } else {
                // Se a resposta for bem-sucedida, pode adicionar lógica para tratar os dados
                const dados = await response.json();
                console.log('Resposta da API recebida com sucesso! ',dados);
            }
        } catch (error) {
            // Caso haja erro na requisição, exibe o erro
            console.log('Erro na requisição:', error);
        }
    };
    
    // Chama a função
    servidor();

    const [conectar,setConectar] = useState("conectado");
    return({conectar});
}
export default HttpServer

