import { useState } from 'react';
import ConectaBanco from '../../../Data/CRUD/ConectaBanco';
import styled from './Impressoes.module.css';
import { useEffect } from 'react';
const Impressoes =()=>{
   const {numeroImpressoes} = ConectaBanco();
   const[contar,setContar] = useState(0);

   const separarDados = (jsonString) => {
    try {
        const data = JSON.parse(jsonString); // Converte a string para um objeto
        if (typeof data === "object" && data !== null && "status" in data) {
            return { status: parseInt(data.status) };
        }
    } catch (error) {
        console.error("Erro ao converter JSON:", error);
    }
    return { status: 0 }; // Valor padrão em caso de erro
};

// Exemplo de uso:
const jsonString = numeroImpressoes;
const { status } = separarDados(jsonString);

useEffect(()=>{
    setContar(contar + 1)
},[status])
    return(
        <div className={styled.container}>
           
          <div className={styled.contador}>{contar}</div>
        </div>
    )
}
export default Impressoes