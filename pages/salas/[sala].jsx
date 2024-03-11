import MainHead from '../../components/MainHead'
import Image from 'next/image'
import styles from "../../styles/Home.module.css"
import logo from "../../src/logo.png"
import Router, { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import {cambiarColor, exportarFichas} from '../api/Sala'
import Swal from 'sweetalert2'
import Exit from '@/components/icons/Exit'
Swal.fire({
  title: 'Bienvenido',
  text: '¡Completa una línea de 4 para ganar!',
  icon: 'success',
  showCloseButton: false,
  showConfirmButton: false,
  timer: 1500
})
let i = 1, j, k, l;
let turno, nextTurno='rojo', next='red'
let consecutivas = 1 

export default function Sala() {

  const [espaciosOcupados, setEspaciosOcupados] = useState({ A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0})
  //const [turn, setTurn] = useState(0, 1, 2)

  
  let full = 0
  const handleTd=(columna)=>{
    
    cambiarColor(columna, espaciosOcupados, setEspaciosOcupados)
    let tablero = espaciosOcupados;
    if (espaciosOcupados[columna]>=6){
      console.log("Columna ", columna, " llena.")
      return;
    }
    const nuevoEspaciosOcupados = {...espaciosOcupados};
    nuevoEspaciosOcupados[columna]++;
    if(i==1){
      turno='red'
      nextTurno='amarillo'
      next='yellow'
      i++
      console.log(i-1, i)
    }else{
      turno='yellow'
      nextTurno='rojo'
      next='red'
      i--
      console.log(i+1, i)
    }
    if(turno===undefined){
      nextTurno='rojo'
      next='red'
    }
    //console.log(nuevoEspaciosOcupados, )
    let id = columna+nuevoEspaciosOcupados[columna]
    let elemento = document.getElementById(id)
    console.log(elemento, turno)
    if(turno==='red'){
      elemento.classList.remove(...elemento.classList)
      elemento.classList.add('Home_red__q71R_')
    }else{
      elemento.classList.remove(...elemento.classList)
      elemento.classList.add('Home_yellow__i9sK5')
    }  
    //TIE
    /*
    if(nuevoEspaciosOcupados[0]===5&nuevoEspaciosOcupados[1]===5&nuevoEspaciosOcupados[2]===5&nuevoEspaciosOcupados[3]===5&nuevoEspaciosOcupados[4]===5&nuevoEspaciosOcupados[5]===5&nuevoEspaciosOcupados[6]===5){
      full = 1
    }
    */
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
              <td onClick={()=>handleTd('A')} ><button id='A6' className={styles.default}></button></td>
              <td onClick={()=>handleTd('B')} ><button id='B6' className={styles.default}></button></td>
              <td onClick={()=>handleTd('C')} ><button id='C6' className={styles.default}></button></td>
              <td onClick={()=>handleTd('D')} ><button id='D6' className={styles.default}></button></td>
              <td onClick={()=>handleTd('E')} ><button id='E6' className={styles.default}></button></td>
              <td onClick={()=>handleTd('F')} ><button id='F6' className={styles.default}></button></td>
              <td onClick={()=>handleTd('G')} ><button id='G6' className={styles.default}></button></td>
            </tr>
            <tr>
              <td onClick={()=>handleTd('A')} ><button id='A5' className={styles.default}></button></td>
              <td onClick={()=>handleTd('B')} ><button id='B5' className={styles.default}></button></td>
              <td onClick={()=>handleTd('C')} ><button id='C5' className={styles.default}></button></td>
              <td onClick={()=>handleTd('D')} ><button id='D5' className={styles.default}></button></td>
              <td onClick={()=>handleTd('E')} ><button id='E5' className={styles.default}></button></td>
              <td onClick={()=>handleTd('F')} ><button id='F5' className={styles.default}></button></td>
              <td onClick={()=>handleTd('G')} ><button id='G5' className={styles.default}></button></td>
            </tr>
            <tr>
              <td onClick={()=>handleTd('A')} ><button id='A4' className={styles.default}></button></td>
              <td onClick={()=>handleTd('B')} ><button id='B4' className={styles.default}></button></td>
              <td onClick={()=>handleTd('C')} ><button id='C4' className={styles.default}></button></td>
              <td onClick={()=>handleTd('D')} ><button id='D4' className={styles.default}></button></td>
              <td onClick={()=>handleTd('E')} ><button id='E4' className={styles.default}></button></td>
              <td onClick={()=>handleTd('F')} ><button id='F4' className={styles.default}></button></td>
              <td onClick={()=>handleTd('G')} ><button id='G4' className={styles.default}></button></td>
            </tr>
            <tr>
              <td onClick={()=>handleTd('A')} ><button id='A3' className={styles.default}></button></td>
              <td onClick={()=>handleTd('B')} ><button id='B3' className={styles.default}></button></td>
              <td onClick={()=>handleTd('C')} ><button id='C3' className={styles.default}></button></td>
              <td onClick={()=>handleTd('D')} ><button id='D3' className={styles.default}></button></td>
              <td onClick={()=>handleTd('E')} ><button id='E3' className={styles.default}></button></td>
              <td onClick={()=>handleTd('F')} ><button id='F3' className={styles.default}></button></td>
              <td onClick={()=>handleTd('G')} ><button id='G3' className={styles.default}></button></td>
            </tr>
            <tr>
              <td onClick={()=>handleTd('A')} ><button id='A2' className={styles.default}></button></td>
              <td onClick={()=>handleTd('B')} ><button id='B2' className={styles.default}></button></td>
              <td onClick={()=>handleTd('C')} ><button id='C2' className={styles.default}></button></td>
              <td onClick={()=>handleTd('D')} ><button id='D2' className={styles.default}></button></td>
              <td onClick={()=>handleTd('E')} ><button id='E2' className={styles.default}></button></td>
              <td onClick={()=>handleTd('F')} ><button id='F2' className={styles.default}></button></td>
              <td onClick={()=>handleTd('G')} ><button id='G2' className={styles.default}></button></td>
            </tr>
            <tr>
              <td onClick={()=>handleTd('A')} ><button id='A1' className={styles.default}></button></td>
              <td onClick={()=>handleTd('B')} ><button id='B1' className={styles.default}></button></td>
              <td onClick={()=>handleTd('C')} ><button id='C1' className={styles.default}></button></td>
              <td onClick={()=>handleTd('D')} ><button id='D1' className={styles.default}></button></td>
              <td onClick={()=>handleTd('E')} ><button id='E1' className={styles.default}></button></td>
              <td onClick={()=>handleTd('F')} ><button id='F1' className={styles.default}></button></td>
              <td onClick={()=>handleTd('G')} ><button id='G1' className={styles.default}></button></td>
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
