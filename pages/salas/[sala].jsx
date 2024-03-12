import MainHead from '../../components/MainHead'
import Image from 'next/image'
import styles from "../../styles/Home.module.css"
import logo from "../../src/logo.png"
import Router, { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
//import {cambiarColor, exportarFichas} from '../api/Sala'
import Swal from 'sweetalert2'
import Exit from '@/components/icons/Exit'
import rojo from  '../../src/rojo.png'


Swal.fire({
  title: 'Bienvenido',
  text: '¡Completa una línea de 4 para ganar!',
  icon: 'success',
  showCloseButton: false,
  showConfirmButton: false,
  timer: 1500
})
let i = 1, j, k, l;
let turn, turno, nextTurno='rojo', next='red'

let V0, V1, V2, V3
let ColNum
let WIN = 0
let Tabla = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
]
let consecutivas=0
export default function Sala(){
  
  const [espaciosOcupados, setEspaciosOcupados] = useState({ A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0})
  
  //let [Tabla, setTabla] = useState(Array.from({ length: 6 }, () => Array(7).fill(null)));
  //console.log(Tabla)
  
  let full = 0
  const handleTd=(columna, espaciosOcupados, setEspaciosOcupados)=>{
    
    //cambiarColor(columna, espaciosOcupados, setEspaciosOcupados)
    //let tablero = espaciosOcupados;
    if (espaciosOcupados[columna]>=6){
      //console.log("Columna ", columna, " llena.")
      return;
    }
    const nuevoEspaciosOcupados = {...espaciosOcupados};
    nuevoEspaciosOcupados[columna]++;

    setEspaciosOcupados(prevEspaciosOcupados=>({
      ...prevEspaciosOcupados,
      [columna]: prevEspaciosOcupados[columna]+1
    }));
    
    if(i==1){
      turno='rojo'
      turn='red'
      nextTurno='amarillo'
      next='yellow'
      i++
    }else{
      turn='yellow'
      turno='amarillo'
      nextTurno='rojo'
      next='red'
      i--
    }
    if(turn===undefined){
      nextTurno='rojo'
      next='red'
    }

    switch(columna)
    {
      case 'A':
        ColNum = 0
        break
      case 'B':
        ColNum = 1
        break
      case 'C':
        ColNum = 2
        break
      case 'D':
        ColNum = 3
        break
      case 'E':
        ColNum = 4
        break
      case 'F':
        ColNum = 5
        break
      case 'G':
        ColNum = 6
        break
    }
    
    //console.log(ColNum) 
    //console.log(ColNum,nuevoEspaciosOcupados[columna])
    //console.log(nuevoEspaciosOcupados, )
    let id = columna+nuevoEspaciosOcupados[columna]
    let elemento = document.getElementById(id)
    //console.log(elemento, turno)
    if(turn==='red'){
      elemento.classList.remove(...elemento.classList)
      elemento.classList.add('Home_red__q71R_')
      //setTabla[ColNum,nuevoEspaciosOcupados[columna]]=1
      Tabla[ColNum][nuevoEspaciosOcupados[columna]-1] = 1
    }else{
      elemento.classList.remove(...elemento.classList)
      elemento.classList.add('Home_yellow__i9sK5')
      //setTabla[ColNum,nuevoEspaciosOcupados[columna]]=2
      Tabla[ColNum][nuevoEspaciosOcupados[columna]-1] = 2
    }
    //WIN = `Ganó el`
    //console.log(ColNum,nuevoEspaciosOcupados[columna])
    //console.log(Tabla[nuevoEspaciosOcupados[columna], ColNum])
    //console.log(Tabla)
    
    //console.log(Valor)
      //BOTTOM
      
      let Valor = Tabla[ColNum][espaciosOcupados[columna]]
      let Valor2 = Tabla[ColNum][espaciosOcupados[columna]-1]
      let Valor3 = Tabla[ColNum][espaciosOcupados[columna]-2]
      let Valor4 = Tabla[ColNum][espaciosOcupados[columna]-3]
      let ValorM2
      let ValorM3
      console.log(Valor, Valor2, Valor3, Valor4)
      if(Valor==Valor2&&Valor2==Valor3&&Valor3==Valor4){
        consecutivas=4
      }
      else{
        let Fila = espaciosOcupados[columna]
        for(let d = 0; d < 4; d++){
          //Valor = Tabla[ColNum + d][Fila] Metete a disc we, porfa| si quieres xd
          /*if((ColNum - 1 + d) != undefined && Fila != undefined){
            Valor2 = Tabla[ColNum - 1 + d][Fila]
          }
          if(Tabla[ColNum - 1 + d][Fila] != undefined){
            Valor3 = Tabla[ColNum - 2 + d][Fila]
          }
          if(Tabla[ColNum - 1 + d][Fila] != undefined){
            Valor4 = Tabla[ColNum - 3 + d][Fila]
          }
          //Valor3 = Tabla[ColNum - 2 + d][Fila]
          //Valor4 = Tabla[ColNum - 3 + d][Fila]
          if(Valor==Valor2&&Valor2==Valor3&&Valor3==Valor4){
            consecutivas=4
          }*/
          console.log(Fila)
        }
      }     
            
      if(consecutivas==4){
        Swal.fire({
          title:`Ganó el ${turno}`,
          showCloseButton: false,
          showConfirmButton: false,
          timer: 1500
        })
      }
      
      
    }

  return (
    <div>
      <MainHead titulo={'Id de sala'}/>
      <div className={styles.container} id="inicio">

        <center>
            <Image src={logo} className={styles.logo2} alt="Logo"/>
        </center>
        <center>
          <table className={styles.tablero}>
            <tr>
              <td onClick={()=>handleTd('A', espaciosOcupados, setEspaciosOcupados)} ><button id='A6' className={styles.default}></button></td>
              <td onClick={()=>handleTd('B', espaciosOcupados, setEspaciosOcupados)} ><button id='B6' className={styles.default}></button></td>
              <td onClick={()=>handleTd('C', espaciosOcupados, setEspaciosOcupados)} ><button id='C6' className={styles.default}></button></td>
              <td onClick={()=>handleTd('D', espaciosOcupados, setEspaciosOcupados)} ><button id='D6' className={styles.default}></button></td>
              <td onClick={()=>handleTd('E', espaciosOcupados, setEspaciosOcupados)} ><button id='E6' className={styles.default}></button></td>
              <td onClick={()=>handleTd('F', espaciosOcupados, setEspaciosOcupados)} ><button id='F6' className={styles.default}></button></td>
              <td onClick={()=>handleTd('G', espaciosOcupados, setEspaciosOcupados)} ><button id='G6' className={styles.default}></button></td>
            </tr>
            <tr>
              <td onClick={()=>handleTd('A', espaciosOcupados, setEspaciosOcupados)} ><button id='A5' className={styles.default}></button></td>
              <td onClick={()=>handleTd('B', espaciosOcupados, setEspaciosOcupados)} ><button id='B5' className={styles.default}></button></td>
              <td onClick={()=>handleTd('C', espaciosOcupados, setEspaciosOcupados)} ><button id='C5' className={styles.default}></button></td>
              <td onClick={()=>handleTd('D', espaciosOcupados, setEspaciosOcupados)} ><button id='D5' className={styles.default}></button></td>
              <td onClick={()=>handleTd('E', espaciosOcupados, setEspaciosOcupados)} ><button id='E5' className={styles.default}></button></td>
              <td onClick={()=>handleTd('F', espaciosOcupados, setEspaciosOcupados)} ><button id='F5' className={styles.default}></button></td>
              <td onClick={()=>handleTd('G', espaciosOcupados, setEspaciosOcupados)} ><button id='G5' className={styles.default}></button></td>
            </tr>
            <tr>
              <td onClick={()=>handleTd('A', espaciosOcupados, setEspaciosOcupados)} ><button id='A4' className={styles.default}></button></td>
              <td onClick={()=>handleTd('B', espaciosOcupados, setEspaciosOcupados)} ><button id='B4' className={styles.default}></button></td>
              <td onClick={()=>handleTd('C', espaciosOcupados, setEspaciosOcupados)} ><button id='C4' className={styles.default}></button></td>
              <td onClick={()=>handleTd('D', espaciosOcupados, setEspaciosOcupados)} ><button id='D4' className={styles.default}></button></td>
              <td onClick={()=>handleTd('E', espaciosOcupados, setEspaciosOcupados)} ><button id='E4' className={styles.default}></button></td>
              <td onClick={()=>handleTd('F', espaciosOcupados, setEspaciosOcupados)} ><button id='F4' className={styles.default}></button></td>
              <td onClick={()=>handleTd('G', espaciosOcupados, setEspaciosOcupados)} ><button id='G4' className={styles.default}></button></td>
            </tr>
            <tr>
              <td onClick={()=>handleTd('A', espaciosOcupados, setEspaciosOcupados)} ><button id='A3' className={styles.default}></button></td>
              <td onClick={()=>handleTd('B', espaciosOcupados, setEspaciosOcupados)} ><button id='B3' className={styles.default}></button></td>
              <td onClick={()=>handleTd('C', espaciosOcupados, setEspaciosOcupados)} ><button id='C3' className={styles.default}></button></td>
              <td onClick={()=>handleTd('D', espaciosOcupados, setEspaciosOcupados)} ><button id='D3' className={styles.default}></button></td>
              <td onClick={()=>handleTd('E', espaciosOcupados, setEspaciosOcupados)} ><button id='E3' className={styles.default}></button></td>
              <td onClick={()=>handleTd('F', espaciosOcupados, setEspaciosOcupados)} ><button id='F3' className={styles.default}></button></td>
              <td onClick={()=>handleTd('G', espaciosOcupados, setEspaciosOcupados)} ><button id='G3' className={styles.default}></button></td>
            </tr>
            <tr>
              <td onClick={()=>handleTd('A', espaciosOcupados, setEspaciosOcupados)} ><button id='A2' className={styles.default}></button></td>
              <td onClick={()=>handleTd('B', espaciosOcupados, setEspaciosOcupados)} ><button id='B2' className={styles.default}></button></td>
              <td onClick={()=>handleTd('C', espaciosOcupados, setEspaciosOcupados)} ><button id='C2' className={styles.default}></button></td>
              <td onClick={()=>handleTd('D', espaciosOcupados, setEspaciosOcupados)} ><button id='D2' className={styles.default}></button></td>
              <td onClick={()=>handleTd('E', espaciosOcupados, setEspaciosOcupados)} ><button id='E2' className={styles.default}></button></td>
              <td onClick={()=>handleTd('F', espaciosOcupados, setEspaciosOcupados)} ><button id='F2' className={styles.default}></button></td>
              <td onClick={()=>handleTd('G', espaciosOcupados, setEspaciosOcupados)} ><button id='G2' className={styles.default}></button></td>
            </tr>
            <tr>
              <td onClick={()=>handleTd('A', espaciosOcupados, setEspaciosOcupados)} ><button id='A1' className={styles.default}></button></td>
              <td onClick={()=>handleTd('B', espaciosOcupados, setEspaciosOcupados)} ><button id='B1' className={styles.default}></button></td>
              <td onClick={()=>handleTd('C', espaciosOcupados, setEspaciosOcupados)} ><button id='C1' className={styles.default}></button></td>
              <td onClick={()=>handleTd('D', espaciosOcupados, setEspaciosOcupados)} ><button id='D1' className={styles.default}></button></td>
              <td onClick={()=>handleTd('E', espaciosOcupados, setEspaciosOcupados)} ><button id='E1' className={styles.default}></button></td>
              <td onClick={()=>handleTd('F', espaciosOcupados, setEspaciosOcupados)} ><button id='F1' className={styles.default}></button></td>
              <td onClick={()=>handleTd('G', espaciosOcupados, setEspaciosOcupados)} ><button id='G1' className={styles.default}></button></td>
            </tr>
            
          </table>
        </center>
        <div>
          <center>
              <font color="white" size="4">
                <div>
                  <p style={{color:next, margin:'8px', textShadow:'0px 0px 5px rgb(100,100,100)'}}>{`Turno del ${nextTurno}`}</p>
                  <button onClick={()=>Router.push('/')} className={styles.btnExit}><Exit/> S A L I R</button></div>
              </font>
          </center>
        </div>
        <center>
        <div className={styles.dataMap} >
          <p></p>
          <p></p>
        </div>
        </center>

      </div>
    </div>
  )
  
}