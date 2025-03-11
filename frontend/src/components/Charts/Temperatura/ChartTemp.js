import GaugeChart from 'react-gauge-chart';
import styles from "./CharTemp.module.css";
import ConectaBanco from '../../../Data/CRUD/ConectaBanco';
const ChartTempo  =()=>{
//-------------------------------------------------------------------------
    


const{ temperatura } = ConectaBanco(); 

const separarDados = (jsonString) => {
    try {
      const data = JSON.parse(jsonString); // Converte a string para um array de objetos
      if (Array.isArray(data) && data.length > 0) {
        const { tempo, humi } = data[0]; // Pega o primeiro objeto do array
        return { tempo: parseFloat(tempo), humi: parseFloat(humi) };
      }
    } catch (error) {
      console.error("Erro ao converter JSON:", error);
    }
    return { tempo: 0, humi: 0 }; // Valores padrão em caso de erro
  };
  
  // Exemplo de uso:
  const jsonString = temperatura;
  const { tempo, humi } = separarDados(jsonString);
  console.log(tempo, humi); // Saída: 24 39

const Temperatura =()=>{
        return(
            <div className={styles.wr}>
                
        <GaugeChart
            id="gauge-chart2"
            nrOfLevels={20}
            percent={humi/100}
            colors={["white", "blue"]}
            arcWidth={0.3}
      /></div>
        )
    }
//--------------------------------------------------------------------------
    const Humidade =()=>{
        return(
            <div className={styles.wr2}>
            <GaugeChart
               id="gauge-chart2"
               nrOfLevels={20}
               percent={tempo/100}
               colors={["blue", "red"]}
               arcWidth={0.3} />
         </div>
        )
    }
    //-------------------------------------------------------------------------
    return(
        {
            Humidade,
            Temperatura
        }
    )

}
export default ChartTempo