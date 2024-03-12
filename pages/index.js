import MainHead from '../components/MainHead'
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import logo from "../src/logo.png"
import Router, { useRouter } from 'next/router'
import GitIcon from '@/components/icons/GitIcon'
import Link from 'next/link'
import useSound from 'use-sound'
import drum from '../src/faigt.mp3'

export default function Home() {
  const router = useRouter()
  const [sound, {stop}]=useSound(drum)
  sound.stop 
  const onSubmit = (event) => {
      let idSala = Math.floor(Math.random()*9999);
      event.preventDefault()
      //Link.push(`/salas/${idSala}`)
  }
  
  return (
    <div>
      <MainHead titulo="ConnectJS"/>
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
          <Link href={`/salas/inGame`}>
            <form onSubmit={onSubmit}>
            <button type='submit' onClick={sound} className={styles.btnEntrar}>J U G A R</button>
            </form>
          </Link>
            <div><p><b>2CM20</b><br/><Link href="https://github.com/ThinKreations/connectjs" target="_blank" style={{textDecoration:'none'}}>Github</Link><br/><b>Hernández Erwin, Jiménez Joshua, López José, Nápoles José, Rosas Axel</b><br/>Recarga la página para quitar la música.<br/>Desarrollado en <b>NextJS</b></p></div>
        </center>
      </div>
    </div>
  )
}