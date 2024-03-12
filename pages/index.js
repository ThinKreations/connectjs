import MainHead from '../components/MainHead'
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import logo from "../src/logo.png"
import Router, { useRouter } from 'next/router'
//import { createUser, setNombre } from './api/user'*/
import GitIcon from '@/components/icons/GitIcon'
import Link from 'next/link'
import useSound from 'use-sound'
import drum from '../src/muse.mp3'

export default function Home() {
  const router = useRouter()
  const [sound]=useSound(drum)
  const onSubmit = (event) => {
      //setNombre(nombre)
      let idSala = Math.floor(Math.random()*9999);
      event.preventDefault()
      
      
      Router.push(`/salas/${idSala}`)
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
            <form onSubmit={onSubmit}>
            <button type='submit' onClick={sound} className={styles.btnEntrar}>J U G A R</button>
            </form>
            <div><p>2CM20<br/><Link href="https://github.com/ThinKreations/connectjs" target="_blank" style={{textDecoration:'none'}}>Github</Link><br/> Hernández Erwin, Jiménez Vázquez Joshua Jesús, López Lara José Daniel, Nápoles Munguía José de Jesús, Rosas Valdez Axel Brandon</p></div>
        </center>
      </div>
    </div>
  )
}