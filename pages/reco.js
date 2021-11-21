import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.scss'

export default function Recommends({movie} ) {


  return (
    <div className={styles.container}>
      <Head>
        <title>Recommends</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Recommends
        </h1>

        <>
        
        <div className={styles.card} >
        <h3> {movie.Title} </h3>
        <h3> {movie.Year} </h3>
        <img alt=""src={movie.Poster} />
        <p> {movie.Plot} </p>
        </div>
      
        </>

        
      </main>

    
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=tt4154796", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      "x-rapidapi-key": "2ddc4c8cb4msh0c9e366b10869f2p1df196jsn9f56ebef905e"
    }
  })
  
  const movie = await res.json()
  return {
    props: {
      movie
    }
  }
}