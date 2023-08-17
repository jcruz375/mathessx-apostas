import type { NextPage } from 'next'
import Image from 'next/image'
import logoImg from '../../public/logo.png'
import bannerImg from '../../public/banner_.jpeg'
import Link from 'next/link'
import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
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
        <section className='w-full h-3/4 flex justify-between mt-10'>
          <article className="w-full h-full sm:w-4/12 flex flex-col justify-between items-center sm:items-start">
            <div></div>
            <h1 className='text-6xl leading-10 font-bold text-left'>
              Apostas Esportivas
            </h1>
            <Link href="/grupos">
              Conheça nossos grupos
            </Link>
          </article>
          <Image
            src={bannerImg}
            alt='logo matheus apostas'
          />
        </section>
      </main>
    </>
  )
}

export default Home
