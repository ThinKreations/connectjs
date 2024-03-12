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
import Link from 'next/link'

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

let ColNum
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
  //const [victorias, setVictorias]
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
    // DEFAULT CLASS Home_default__JHk7u
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
      //console.log(Valor, Valor2, Valor3, Valor4)
      //VERIFICACION VERTICAL
      if(Valor==Valor2&&Valor2==Valor3&&Valor3==Valor4){
        consecutivas=4
      }else{
        //VERIFICACION HORIZONTAL
        let Fila = espaciosOcupados[columna]
        if(Tabla[0][Fila] != 0 && Tabla[0][Fila] == Tabla[1][Fila] && Tabla[0][Fila] == Tabla[2][Fila] && Tabla[0][Fila] == Tabla[3][Fila]){
          consecutivas=4
        }
        else{
          if(Tabla[1][Fila] != 0 && Tabla[1][Fila] == Tabla[2][Fila] && Tabla[1][Fila] == Tabla[3][Fila] && Tabla[1][Fila] == Tabla[4][Fila]){
            consecutivas=4
          }
          else{
            if(Tabla[2][Fila] != 0 && Tabla[2][Fila] == Tabla[3][Fila] && Tabla[2][Fila] == Tabla[4][Fila] && Tabla[2][Fila] == Tabla[5][Fila]){
              consecutivas=4
            }
            else{
              if(Tabla[3][Fila] != 0 && Tabla[3][Fila] == Tabla[4][Fila] && Tabla[3][Fila] == Tabla[5][Fila] && Tabla[3][Fila] == Tabla[6][Fila]){
                consecutivas=4
              }
              else{
                //VERIFICACION DIAGONAL HACIA ARRIBA A LA DERECHA
                if(Tabla[3][0] != 0 && Tabla[3][0] == Tabla[4][1] && Tabla[3][0] == Tabla[5][2] && Tabla[3][0] == Tabla[6][3]){
                  consecutivas=4
                }
                else{
                  if(Tabla[2][0] != 0 && Tabla[2][0] == Tabla[3][1] && Tabla[2][0] == Tabla[4][2] && Tabla[2][0] == Tabla[5][3]){
                    consecutivas=4
                  }
                  else{
                    if(Tabla[3][1] != 0 && Tabla[3][1] == Tabla[4][2] && Tabla[4][2] == Tabla[5][3] && Tabla[5][3] == Tabla[6][4]){
                      consecutivas=4
                    }
                    else{
                      if(Tabla[1][0] != 0 && Tabla[1][0] == Tabla[2][1] && Tabla[2][1] == Tabla[3][2] && Tabla[3][2] == Tabla[4][3]){
                        consecutivas=4
                      }
                      else{
                        if(Tabla[2][1] != 0 && Tabla[2][1] == Tabla[3][2] && Tabla[3][2] == Tabla[4][3] && Tabla[4][3] == Tabla[5][4]){
                          consecutivas=4
                        }
                        else{
                          if(Tabla[3][2] != 0 && Tabla[3][2] == Tabla[4][3] && Tabla[4][3] == Tabla[5][4] && Tabla[5][4] == Tabla[6][5]){
                            consecutivas=4
                          }
                          else{
                            if(Tabla[0][0] != 0 && Tabla[0][0] == Tabla[1][1] && Tabla[1][1] == Tabla[2][2] && Tabla[2][2] == Tabla[3][3]){
                              consecutivas=4
                            }
                            else{
                              if(Tabla[1][1] != 0 && Tabla[1][1] == Tabla[2][2] && Tabla[2][2] == Tabla[3][3] && Tabla[3][3] == Tabla[4][4]){
                                consecutivas=4
                              }
                              else{
                                if(Tabla[2][2] != 0 && Tabla[2][2] == Tabla[3][3] && Tabla[3][3] == Tabla[4][4] && Tabla[4][4] == Tabla[5][5]){
                                  consecutivas=4
                                }
                                else{
                                  if(Tabla[0][1] != 0 && Tabla[0][1] == Tabla[1][2] && Tabla[1][2] == Tabla[2][3] && Tabla[2][3] == Tabla[3][4]){
                                    consecutivas=4
                                  }
                                  else{
                                    if(Tabla[1][2] != 0 && Tabla[1][2] == Tabla[2][3] && Tabla[2][3] == Tabla[3][4] && Tabla[3][4] == Tabla[4][5]){
                                      consecutivas=4
                                    }
                                    else{
                                      if(Tabla[0][2] != 0 && Tabla[0][2] == Tabla[1][3] && Tabla[1][3] == Tabla[2][4] && Tabla[2][4] == Tabla[3][5]){
                                        consecutivas=4
                                      }
                                      else{
                                        //VERIFICACION DIAGONAL HACIA ABAJO A LA DERECHA
                                        if(Tabla[0][3] != 0 && Tabla[0][3] == Tabla[1][2] && Tabla[1][2] == Tabla[2][1] && Tabla[2][1] == Tabla[3][0]){
                                          consecutivas=4
                                        }
                                        else{
                                          if(Tabla[0][4] != 0 && Tabla[0][4] == Tabla[1][3] && Tabla[1][3] == Tabla[2][2] && Tabla[2][2] == Tabla[3][1]){
                                            consecutivas=4
                                          }
                                          else{
                                            if(Tabla[1][3] != 0 && Tabla[1][3] == Tabla[2][2] && Tabla[2][2] == Tabla[3][1] && Tabla[3][1] == Tabla[4][0]){
                                              consecutivas=4
                                            }
                                            else{
                                              if(Tabla[0][5] != 0 && Tabla[0][5] == Tabla[1][4] && Tabla[1][4] == Tabla[2][3] && Tabla[2][3] == Tabla[3][2]){
                                                consecutivas=4
                                              }
                                              else{
                                                if(Tabla[1][4] != 0 && Tabla[1][4] == Tabla[2][3] && Tabla[2][3] == Tabla[3][2] && Tabla[3][2] == Tabla[4][1]){
                                                  consecutivas=4
                                                }
                                                else{
                                                  if(Tabla[2][3] != 0 && Tabla[2][3] == Tabla[3][2] && Tabla[3][2] == Tabla[4][1] && Tabla[4][1] == Tabla[5][0]){
                                                    consecutivas=4
                                                  }
                                                  else{
                                                    if(Tabla[1][5] != 0 && Tabla[1][5] == Tabla[2][4] && Tabla[2][4] == Tabla[3][3] && Tabla[3][3] == Tabla[4][2]){
                                                      consecutivas=4
                                                    }
                                                    else{
                                                      if(Tabla[2][4] != 0 && Tabla[2][4] == Tabla[3][3] && Tabla[3][3] == Tabla[4][2] && Tabla[4][2] == Tabla[5][1]){
                                                        consecutivas=4
                                                      }
                                                      else{
                                                        if(Tabla[3][3] != 0 && Tabla[3][3] == Tabla[4][2] && Tabla[4][2] == Tabla[5][1] && Tabla[5][1] == Tabla[6][0]){
                                                          consecutivas=4
                                                        }
                                                        else{
                                                          if(Tabla[2][5] != 0 && Tabla[2][5] == Tabla[3][4] && Tabla[3][4] == Tabla[4][3] && Tabla[4][3] == Tabla[5][2]){
                                                            consecutivas=4
                                                          }
                                                          else{
                                                            if(Tabla[3][4] != 0 && Tabla[3][4] == Tabla[4][3] && Tabla[4][3] == Tabla[5][2] && Tabla[5][2] == Tabla[6][1]){
                                                              consecutivas=4
                                                            }
                                                            else{
                                                              if(Tabla[3][5] != 0 && Tabla[3][5] == Tabla[4][4] && Tabla[4][4] == Tabla[5][3] && Tabla[5][3] == Tabla[6][2]){
                                                                consecutivas=4
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
  
      if(consecutivas==4){
        Swal.fire({
          title:`Ganó el ${turno}`,
          showCloseButton: false,
          showConfirmButton: false,
          timer: 1500
        })
        //Router.reload()
        Tabla = [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0]
        ]
        Valor = 0
        Valor2 = 0
        Valor3 = 0
        Valor4 = 0
        i = 1
        let fi = 0
        for(fi = 1; fi < 7; fi++){
          id = 'A'+fi
          elemento = document.getElementById(id)
          elemento.classList.remove(...elemento.classList)
          elemento.classList.add('Home_default__JHk7u')
        }
        for(fi = 1; fi < 7; fi++){
          id = 'B'+fi
          elemento = document.getElementById(id)
          elemento.classList.remove(...elemento.classList)
          elemento.classList.add('Home_default__JHk7u')
        }
        for(fi = 1; fi < 7; fi++){
          id = 'C'+fi
          elemento = document.getElementById(id)
          elemento.classList.remove(...elemento.classList)
          elemento.classList.add('Home_default__JHk7u')
        }
        for(fi = 1; fi < 7; fi++){
          id = 'D'+fi
          elemento = document.getElementById(id)
          elemento.classList.remove(...elemento.classList)
          elemento.classList.add('Home_default__JHk7u')
        }
        for(fi = 1; fi < 7; fi++){
          id = 'E'+fi
          elemento = document.getElementById(id)
          elemento.classList.remove(...elemento.classList)
          elemento.classList.add('Home_default__JHk7u')
        }
        for(fi = 1; fi < 7; fi++){
          id = 'F'+fi
          elemento = document.getElementById(id)
          elemento.classList.remove(...elemento.classList)
          elemento.classList.add('Home_default__JHk7u')
        }
        for(fi = 1; fi < 7; fi++){
          id = 'G'+fi
          elemento = document.getElementById(id)
          elemento.classList.remove(...elemento.classList)
          elemento.classList.add('Home_default__JHk7u')
        }
        espaciosOcupados['A'] = 0
        espaciosOcupados['B'] = 0
        espaciosOcupados['C'] = 0
        espaciosOcupados['D'] = 0
        espaciosOcupados['E'] = 0
        espaciosOcupados['F'] = 0
        espaciosOcupados['G'] = 0
        consecutivas=1
        columna--
      }
      console.log(Tabla)
    }

    const eliminarDatosTabla=()=>{
      Tabla = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ]
      Router.push('/')
    }

  return (
    <div>
      <MainHead titulo={'ConnectJS - InGame'}/>
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
                  {consecutivas==4?console.log(turno)(<p style={{color:next, margin:'8px', textShadow:'0px 0px 5px rgb(100,100,100)'}}>{`Victoria del ${turno}!`}</p>):(<p style={{color:next, margin:'8px', textShadow:'0px 0px 5px rgb(100,100,100)'}}>{`Turno del ${nextTurno}`}</p>)}
                  <button onClick={eliminarDatosTabla} className={styles.btnExit}><Exit/> S A L I R</button>
                  </div>
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