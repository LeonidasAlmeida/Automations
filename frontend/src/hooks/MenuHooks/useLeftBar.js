import { useContext, useState } from "react";
import { Contexto } from "../../context/PausaContext";


const useLeftBar = ()=>{
    const data = [1,2,3,4,5,6];
    const {valor} = useContext(Contexto);
    const [items,setItems] = useState([]);
    const apertar = ()=>{
        setItems(data[2])
    }
    console.log(valor)
    return(
        {
            items,
            valor,
            apertar,
        }
    )
}
export default useLeftBar