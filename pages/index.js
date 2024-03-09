import MainHead from '../components/MainHead'
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import logo from "../src/logo.png"
import Router, { useRouter } from 'next/router'
//import { createUser, setNombre } from './api/user'*/
import GitIcon from '@/components/GitIcon'

export default function Home() {
  const router = useRouter()
  const onSubmit = (event) => {
      setNombre(nombre)
      event.preventDefault()
      
  }
  
  return (
    <div>
      <MainHead titulo="Connect 4 - 2CM20"/>
      <div className={styles.container} id="inicio">
        <div className={styles.header}>
          <center>
          <Image src={logo} className={styles.logo} alt='Logo'/>
          </center>
        </div>
        <center>
          <font color="white" size="6">
            <p style={{textShadow:'0px 0px 5px rgb(80,80,80)'}}>{``}</p>
          </font>
            <button type='submit' onClick={()=>{Router.push('/salas/13579')}} className={styles.btnEntrar}>J U G A R</button>
          <div> 
          <a href="https://github.com/ThinKreations/connectjs" target='_blank'><GitIcon style={{color:'white'}}/></a>
          </div>
        </center>
      </div>
    </div>
  )
}