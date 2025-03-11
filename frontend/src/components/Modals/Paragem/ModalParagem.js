import { useRef, useState } from 'react';
import './ModalParagem.css';

const ModalParagem =()=>{
    const [abrirModalParagem,setAbrirModalParagem]=useState(false);
    const modalDiv = useRef(0);
    const AbrirModal =()=>{
        setAbrirModalParagem(true);
        modalDiv.current.style.display="flex";
    }
    const FecharModal=()=>{
        setAbrirModalParagem(!abrirModalParagem);
        modalDiv.current.style.display="none";
    }
    const ConteudoHTML =(children)=>{
        return(
            <div className="wrapperModalParagem" ref={modalDiv} >
                <div className='principalModalParagem' >
                {children}
                <button className="fecharModalParagem" onClick={(e)=>{FecharModal()}}>Sair</button>
                </div>
            </div>
        )
    }
    return(
       {
        ConteudoHTML,
        AbrirModal,
       }

    )
}
export default  ModalParagem