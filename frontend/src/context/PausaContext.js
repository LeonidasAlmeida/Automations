
import { createContext,useEffect,useState } from "react";
import ParagensJSON from "../Data/ParagensJSON/ParagensJSON";
// Criação do Contexto
export const Contexto = createContext();

// Componente Provider
const PausaContext = ({ children }) => {
    
   //inportando os dados das paragens
    const  {DataParagens,TipoParagem} = ParagensJSON();

    const [items,setItems] = useState([]);
    const [itemsEscolhidos,setItemsEscolhidos] =useState([]);

    //traz os dados pelo id
    const apertar = (filtro)=>{
          let dadosFiltrados = DataParagens.filter((filtrar)=> filtrar.id.includes(filtro));
          setItems(dadosFiltrados)
        }

    //traz os dados selecionados
    const escolhido =(filtro)=>{
       let dadosFiltrados = TipoParagem.filter((filtrar)=> filtrar.id.includes(filtro));
          setItemsEscolhidos(dadosFiltrados)
    }

   

    return (
        <Contexto.Provider value={{items,itemsEscolhidos,DataParagens,apertar,escolhido}}>
            {children} {/* Renderiza os componentes filhos */}
        </Contexto.Provider>
    );
};

export default PausaContext;
