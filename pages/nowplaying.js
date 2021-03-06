import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.scss'

export default function Now( {playing} ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Now Playing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Now Playing
        </h1>


        <div>
        {playing.movie_results.map((item,id)  => (
        <div  key={id} className={styles.nowplaying} >
        <h2  > {item.title} </h2> 
        <h3 > {item.year} </h3>
        </div>
        ))}
        </div>

        
      </main>

    
    </div>
  )
}



export const getStaticProps = async () => {
  const res = await fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-nowplaying-movies&page=1", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      "x-rapidapi-key": "2ddc4c8cb4msh0c9e366b10869f2p1df196jsn9f56ebef905e"
    }
  })
  
  const playing = await res.json()
  return {
    props: {
      playing
    }
  }
}