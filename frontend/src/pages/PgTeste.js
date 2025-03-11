import TesteServer from "../backend/TesteServer"
export default function PgTeste(){
    const{conectar}=TesteServer();
    return(<div>
        <h1>Teste</h1>
        {conectar}
    </div>)
} 