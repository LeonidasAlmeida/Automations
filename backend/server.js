const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
app.use(cors());
app.use(express.json()); // Para interpretar JSON no corpo da requisição


const { create, readAll,readLast, update, remove, pool } = require('./bdmysql.js');
// Servidor HTTP
app.get('/', (req, res) => {
   
    const main = async()=>{
        try {
        const registros = await readAll();
        res.send(registros);
        } catch (err) {
            console.error('❌ Erro:', err.message);
        } finally {
          
        }
    }
    main()
    
});

app.post('/api/dados', async (req, res) => {
    try {
        const { inicio,fim,tempo,data,codigoParagem,descricaoParagem} = req.body;
        console.log(`tempo Inicio = ${inicio}\n Tempo fim = ${fim} \n Tempo total = ${tempo}`);
        // Simulação de processamento assíncrono (exemplo: salvar no banco)
         const main = async()=>{
        
        try {
           

            if(tempo !== '00 : 00 : 00'){
                if(tempo !=='undefined'){
                    const registros = await create(`${inicio}`,`${fim}`,`${tempo}`,`${data}`,`${codigoParagem}`,`${descricaoParagem}`);
                    console.log("inicio que chegou ao servidor :", inicio);
                    console.log("fim que chegou ao servidor : ", fim);
                    console.log("tempo que chegou ao servidor : ", tempo);
                    console.log("codigo da paragem : ",codigoParagem);
                    console.log("descricao da paragem : ",descricaoParagem);
                }
        
                }else{
                console.log("tempo vazio ");
            }
      
        } catch (err) {
            console.error('❌ Erro:', err.message);
        } finally {
           
        }
    }
    main()
        res.json({ mensagem: 'Dados recebidos com sucesso!' });

    } catch (error) {
        res.status(500).json({ erro: 'Erro no servidor' });
    }
});


// Servidor WebSocket----------------------------------------------------------------------------------------
wss.on('connection', (ws) => {
    console.log('Cliente conectado');
    ws.on('message', (message) => {
        console.log(`Mensagem recebida: ${message}`);
        ws.send(JSON.stringify(`Echo: ${message}`));
    });
    ws.on('close', () => {
        console.log('Cliente desconectado');
    });
});

//
process.on('SIGINT', async () => {
    console.log('Fechando a pool de conexões...');
    await pool.end();
    process.exit(0);
});


// Iniciar o servidor
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
