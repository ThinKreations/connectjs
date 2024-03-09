import MainHead from '../../components/MainHead'
import Image from 'next/image'
import styles from "../../styles/Home.module.css"
import logo from "../../src/logo.png"
import Router, { useRouter } from 'next/router'
import { useState } from 'react'


export default function Sala() {

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
              <td onClick={()=>console.log("A")} id='btn6A'></td>
              <td onClick={()=>console.log("B")} id='btn6B'></td>
              <td onClick={()=>console.log("C")} id='btn6C'></td>
              <td onClick={()=>console.log("D")} id='btn6D'></td>
              <td onClick={()=>console.log("E")} id='btn6E'></td>
              <td onClick={()=>console.log("F")} id='btn6F'></td>
              <td onClick={()=>console.log("G")} id='btn6G'></td>
              <td onClick={()=>console.log("H")} id='btn6H'></td>
            </tr>
            <tr>
              <td onClick={()=>console.log("A")} id='btn5A'></td>
              <td onClick={()=>console.log("B")} id='btn5B'></td>
              <td onClick={()=>console.log("C")} id='btn5C'></td>
              <td onClick={()=>console.log("D")} id='btn5D'></td>
              <td onClick={()=>console.log("E")} id='btn5E'></td>
              <td onClick={()=>console.log("F")} id='btn5F'></td>
              <td onClick={()=>console.log("G")} id='btn5G'></td>
              <td onClick={()=>console.log("H")} id='btn5H'></td>
            </tr>
            <tr>
              <td onClick={()=>console.log("A")} id='btn4A'></td>
              <td onClick={()=>console.log("B")} id='btn4B'></td>
              <td onClick={()=>console.log("C")} id='btn4C'></td>
              <td onClick={()=>console.log("D")} id='btn4D'></td>
              <td onClick={()=>console.log("E")} id='btn4E'></td>
              <td onClick={()=>console.log("F")} id='btn4F'></td>
              <td onClick={()=>console.log("G")} id='btn4G'></td>
              <td onClick={()=>console.log("H")} id='btn4H'></td>
            </tr>
            <tr>
              <td onClick={()=>console.log("A")} id='btn3A'></td>
              <td onClick={()=>console.log("B")} id='btn3B'></td>
              <td onClick={()=>console.log("C")} id='btn3C'></td>
              <td onClick={()=>console.log("D")} id='btn3D'></td>
              <td onClick={()=>console.log("E")} id='btn3E'></td>
              <td onClick={()=>console.log("F")} id='btn3F'></td>
              <td onClick={()=>console.log("G")} id='btn3G'></td>
              <td onClick={()=>console.log("H")} id='btn3H'></td>
            </tr>
            <tr>
              <td onClick={()=>console.log("A")} id='btn2A'></td>
              <td onClick={()=>console.log("B")} id='btn2B'></td>
              <td onClick={()=>console.log("C")} id='btn2C'></td>
              <td onClick={()=>console.log("D")} id='btn2D'></td>
              <td onClick={()=>console.log("E")} id='btn2E'></td>
              <td onClick={()=>console.log("F")} id='btn2F'></td>
              <td onClick={()=>console.log("G")} id='btn2G'></td>
              <td onClick={()=>console.log("H")} id='btn2H'></td>
            </tr>
            <tr>
              <td onClick={()=>console.log("A")} id='btn1A'></td>
              <td onClick={()=>console.log("B")} id='btn1B'></td>
              <td onClick={()=>console.log("C")} id='btn1C'></td>
              <td onClick={()=>console.log("D")} id='btn1D'></td>
              <td onClick={()=>console.log("E")} id='btn1E'></td>
              <td onClick={()=>console.log("F")} id='btn1F'></td>
              <td onClick={()=>console.log("G")} id='btn1G'></td>
              <td onClick={()=>console.log("H")} id='btn1H'></td>
            </tr>
            <tr>
              <td onClick={()=>console.log("A")} id='btn0A'></td>
              <td onClick={()=>console.log("B")} id='btn0B'></td>
              <td onClick={()=>console.log("C")} id='btn0C'></td>
              <td onClick={()=>console.log("D")} id='btn0D'></td>
              <td onClick={()=>console.log("E")} id='btn0E'></td>
              <td onClick={()=>console.log("F")} id='btn0F'></td>
              <td onClick={()=>console.log("G")} id='btn0G'></td>
              <td onClick={()=>console.log("H")} id='btn0H'></td>
            </tr>
          </table>
        </center>
        <div>
          <center>
              <font color="white" size="4">
                <button onClick={()=>Router.push('/')} className={styles.btnExit}>Salir</button>
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
