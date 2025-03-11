import { useEffect, useState } from "react"

const Wsserver =()=>{

    const conectarWeobSocket = () => {
        // Cria a conexão WebSocket
        const socket = new WebSocket('ws://192.168.3.175:5000');  // URL do servidor WebSocket
    
        // Evento para quando a conexão for aberta
        socket.onopen = () => {
            console.log('Conexão WebSocket estabelecida');
            // Você pode enviar uma mensagem para o servidor
            socket.send(JSON.stringify({ mensagem: 'Olá, servidor!' }));
        };
    
        // Evento para quando receber uma mensagem do servidor
        socket.onmessage = (event) => {
            const dadosRecebidos = event.data  // Converte a mensagem recebida em JSON
            console.log('Dados recebidos do servidor:', dadosRecebidos);
        };
    
        // Evento para quando ocorrer um erro na conexão
        socket.onerror = (error) => {
            console.log('Erro no WebSocket:', error);
        };
    
        // Evento para quando a conexão for fechada
        socket.onclose = () => {
            console.log('Conexão WebSocket fechada');
        };
    };
   
   
    return({conectarWeobSocket});
}
export default Wsserver

