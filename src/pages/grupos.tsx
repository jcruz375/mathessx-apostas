import type { NextPage } from 'next'
import Image from 'next/image'
import logoImg from '../../public/logo.png'
import bannerImg from '../../public/banner_.jpeg'
import Link from 'next/link'
import styles from '../styles/grupos.module.scss'

const Grupos: NextPage = () => {
  return (
    <>
      <header className='px-12 mx-auto flex justify-center items-center md:justify-start'>
        <Link href='/'>
          <Image
            src={logoImg}
            alt='logo matheus apostas'
          />
        </Link>
      </header>
      <main className={`px-14 sm: px-20 ${styles.mainContent}`}>
        <section className='w-full h-3/4 flex justify-center mt-10'>
          <article className="w-full sm:w-4/12 flex flex-col justify-center items-center sm:items-start">
            <a target='__blank' href="https://lastlink.com/p/C99FF2DB5/checkout-payment" className={`mt-10 px-2 rounded-full w-full ${styles.blinking_link}`}>
              Mathessx Apostas Vip
            </a>
            <a target='__blank' href="https://t.me/Mathessxapostas" className={`mt-10 px-2 rounded-full w-full`}>
              Grupo free
            </a>
            <a target='__blank' href="https://instagram.com/mathessx_apostas?igshid=MzRlODBiNWFlZA==" className={`mt-10 px-2 rounded-full w-full`}>
              Instagram
            </a>
          </article>
        </section>
      </main>
    </>
  )
}

export default Grupos
