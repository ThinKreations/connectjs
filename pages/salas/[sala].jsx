import MainHead from '../../components/MainHead'
import Image from 'next/image'
import styles from "../../styles/Home.module.css"
import logo from "../../src/logo.png"
import Router, { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import {cambiarColor} from '../api/Sala'
import Swal from 'sweetalert2'
import Exit from '@/components/icons/Exit'

export default function Sala() {
    const [esperandoJugadores, setEsperandoJugadores] = useState(true);
    const [espaciosOcupados, setEspaciosOcupados] = useState({ A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0});
    //const [tablero, setTablero] = useState(Array(7).fill(Array(8).fill(null)));
    /*
    useEffect(() => {
        socket.on('jugadorConectado', () => {
            console.log('Otro jugador se ha conectado');
            setEsperandoJugadores(TRUE);
            Swal.fire({
                title: 'Bienvenido',
                text: '¡Completa una línea de 4 para ganar!',
                icon: 'success',
                showCloseButton: false,
                showConfirmButton: false,
                timer: 1500
            })
        });
    }, []);

    useEffect(() => {
        socket.on('actualizarEspaciosOcupados', ({ columna, espaciosOcupados }) => {
            // Aquí actualizas el estado de los espacios ocupados en la columna recibida
            setEspaciosOcupados(espaciosOcupados);
        });
    }, []);
    */
    

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
              <td onClick={()=>cambiarColor('A', 7, espaciosOcupados, setEspaciosOcupados)} id='A6'></td>
              <td onClick={()=>cambiarColor('B', 7, espaciosOcupados, setEspaciosOcupados)} id='B6'></td>
              <td onClick={()=>cambiarColor('C', 7, espaciosOcupados, setEspaciosOcupados)} id='C6'></td>
              <td onClick={()=>cambiarColor('D', 7, espaciosOcupados, setEspaciosOcupados)} id='D6'></td>
              <td onClick={()=>cambiarColor('E', 7, espaciosOcupados, setEspaciosOcupados)} id='E6'></td>
              <td onClick={()=>cambiarColor('F', 7, espaciosOcupados, setEspaciosOcupados)} id='F6'></td>
              <td onClick={()=>cambiarColor('G', 7, espaciosOcupados, setEspaciosOcupados)} id='G6'></td>
            </tr>
            <tr>
              <td onClick={()=>cambiarColor('A', 7, espaciosOcupados, setEspaciosOcupados)} id='A5'></td>
              <td onClick={()=>cambiarColor('B', 7, espaciosOcupados, setEspaciosOcupados)} id='B5'></td>
              <td onClick={()=>cambiarColor('C', 7, espaciosOcupados, setEspaciosOcupados)} id='C5'></td>
              <td onClick={()=>cambiarColor('D', 7, espaciosOcupados, setEspaciosOcupados)} id='D5'></td>
              <td onClick={()=>cambiarColor('E', 7, espaciosOcupados, setEspaciosOcupados)} id='E5'></td>
              <td onClick={()=>cambiarColor('F', 7, espaciosOcupados, setEspaciosOcupados)} id='F5'></td>
              <td onClick={()=>cambiarColor('G', 7, espaciosOcupados, setEspaciosOcupados)} id='G5'></td>
            </tr>
            <tr>
              <td onClick={()=>cambiarColor('A', 7, espaciosOcupados, setEspaciosOcupados)} id='A4'></td>
              <td onClick={()=>cambiarColor('B', 7, espaciosOcupados, setEspaciosOcupados)} id='B4'></td>
              <td onClick={()=>cambiarColor('C', 7, espaciosOcupados, setEspaciosOcupados)} id='C4'></td>
              <td onClick={()=>cambiarColor('D', 7, espaciosOcupados, setEspaciosOcupados)} id='D4'></td>
              <td onClick={()=>cambiarColor('E', 7, espaciosOcupados, setEspaciosOcupados)} id='E4'></td>
              <td onClick={()=>cambiarColor('F', 7, espaciosOcupados, setEspaciosOcupados)} id='F4'></td>
              <td onClick={()=>cambiarColor('G', 7, espaciosOcupados, setEspaciosOcupados)} id='G4'></td>
            </tr>
            <tr>
              <td onClick={()=>cambiarColor('A', 7, espaciosOcupados, setEspaciosOcupados)} id='A3'></td>
              <td onClick={()=>cambiarColor('B', 7, espaciosOcupados, setEspaciosOcupados)} id='B3'></td>
              <td onClick={()=>cambiarColor('C', 7, espaciosOcupados, setEspaciosOcupados)} id='C3'></td>
              <td onClick={()=>cambiarColor('D', 7, espaciosOcupados, setEspaciosOcupados)} id='D3'></td>
              <td onClick={()=>cambiarColor('E', 7, espaciosOcupados, setEspaciosOcupados)} id='E3'></td>
              <td onClick={()=>cambiarColor('F', 7, espaciosOcupados, setEspaciosOcupados)} id='F3'></td>
              <td onClick={()=>cambiarColor('G', 7, espaciosOcupados, setEspaciosOcupados)} id='G3'></td>
            </tr>
            <tr>
              <td onClick={()=>cambiarColor('A', 7, espaciosOcupados, setEspaciosOcupados)} id='A2'></td>
              <td onClick={()=>cambiarColor('B', 7, espaciosOcupados, setEspaciosOcupados)} id='B2'></td>
              <td onClick={()=>cambiarColor('C', 7, espaciosOcupados, setEspaciosOcupados)} id='C2'></td>
              <td onClick={()=>cambiarColor('D', 7, espaciosOcupados, setEspaciosOcupados)} id='D2'></td>
              <td onClick={()=>cambiarColor('E', 7, espaciosOcupados, setEspaciosOcupados)} id='E2'></td>
              <td onClick={()=>cambiarColor('F', 7, espaciosOcupados, setEspaciosOcupados)} id='F2'></td>
              <td onClick={()=>cambiarColor('G', 7, espaciosOcupados, setEspaciosOcupados)} id='G2'></td>
            </tr>
            <tr>
              <td onClick={()=>cambiarColor('A', 7, espaciosOcupados, setEspaciosOcupados)} id='A1'></td>
              <td onClick={()=>cambiarColor('B', 7, espaciosOcupados, setEspaciosOcupados)} id='B1'></td>
              <td onClick={()=>cambiarColor('C', 7, espaciosOcupados, setEspaciosOcupados)} id='C1'></td>
              <td onClick={()=>cambiarColor('D', 7, espaciosOcupados, setEspaciosOcupados)} id='D1'></td>
              <td onClick={()=>cambiarColor('E', 7, espaciosOcupados, setEspaciosOcupados)} id='E1'></td>
              <td onClick={()=>cambiarColor('F', 7, espaciosOcupados, setEspaciosOcupados)} id='F1'></td>
              <td onClick={()=>cambiarColor('G', 7, espaciosOcupados, setEspaciosOcupados)} id='G1'></td>
            </tr>
          </table>
        </center>
        <div>
          <center>
              <font color="white" size="4">
                {!esperandoJugadores?(<p>Esperando jugadores... <button onClick={()=>Router.push('/')} className={styles.btnExit}><Exit/> S A L I R</button></p>)
                :
                (<p><button onClick={()=>Router.push('/')} className={styles.btnExit}><Exit/> S A L I R</button></p>)}
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
