import { createContext, useContext, useEffect, useState } from "react"
import { useRef } from "react";
import '../components/Modals/Paragem/ModalParagem.css';
import { Contexto } from "./PausaContext";
import { ContextoTempo } from "./TempoContext";
        //----------------------------------------------------------------------
    export const ContextoModal = createContext();
    
    const ModalExport = ({children})=>{
   
    const [conteudo,setConteudo] = useState(null);
    const [conteudoExport,setConteudoExport] = useState(null);
  
    const [abrirModalParagem,setAbrirModalParagem] = useState(false);
    const [estadoContador,setEstadoContador] = useState(true);
 //  ----------------------------------------------------
    const modalDiv = useRef(0);
    const {itemsEscolhidos, escolhido} = useContext(Contexto);
    const{start,reset,setRotando} = useContext(ContextoTempo);
    
    //----------------------------------------------------------------------

    useEffect(()=>{
        if (itemsEscolhidos.length > 0) {
            setConteudo(
                itemsEscolhidos.map((e) => (
                    <div key={e.id}>
                      
                        {"INFO\n\ncod ["+e.id+"]\nTipo : "+e.type+"\n\n Detalhes : "+e.info}
                      
                        
                        {setConteudoExport([e.type,e.info,e.tempo])}
                    </div>
                ))
            );
        }
    },[itemsEscolhidos])

         //-------------------------------------------------------------------

        const AbrirModal =(children)=>{
        escolhido(children);
        setAbrirModalParagem(true);
        modalDiv.current.style.display="flex";
        }


        //---------------------------------------------------------------------

        const FecharModal=()=>{
        setAbrirModalParagem(!abrirModalParagem);
        modalDiv.current.style.display="none";
    }

        //---------------------------------------------------------------------
        const ConteudoHTML =()=>{
            return(
                    <div className="wrapperModalParagem" ref={modalDiv} >
                    <div className='principalModalParagem'>
                    <div className="dadosInterno">
                        {conteudo}
                    </div> 
                        <button className="fecharModalParagem" onClick={(e)=>{FecharModal(); setEstadoContador(true);}}>Sair</button>
                        <button className="abrirModalParagem" onClick={()=>{setEstadoContador(false);FecharModal();reset();start();setRotando(true)}}>iniciar</button>
                    </div>
                    </div>)
            }
         
         return(

         //------------------------------------------------------------------------
        <ContextoModal.Provider value={{estadoContador,conteudoExport,setEstadoContador,AbrirModal,ConteudoHTML}}>
            {children}
        </ContextoModal.Provider>);}
    export default ModalExport

