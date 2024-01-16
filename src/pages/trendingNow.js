import Head from 'next/head';
// import Image from 'next/image';
import { Inter } from 'next/font/google';
// import { Main } from 'next/document';
// import Logo from '@/components/Logo';
import Navbar from '@/components/Navbar';
import requests from "@/utils/requests";
// import Hero from '@/components/Hero';
// import Hero2 from '@/components/Hero2';
import Row from '@/components/Row';
// import MovieDetails2 from '@/components/MovieDetails2';

const inter = Inter({ subsets: ['latin'] })

export default function trendingNow({
  // moviePosters,
  trendingNow,
}) {
  return (

    <>
      <Head>
        <title>Netflix</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href='netflix_icon.ico' />
      </Head>


      <main className='relative backgroundColor: #000 from-gray-900/10 to-[#010511]' style={{ marginTop: '80px' }}>

        <Navbar />       

        <section className="container pb-32">
          <Row title="Trending Now" movies={trendingNow} />
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {

  const [
    moviePosters,
    trendingNow,
  ] = await Promise.all([
    fetch(requests.fetchMoviePosters).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
  ]);


  return {
    props: {
      moviePosters: moviePosters.results,
      trendingNow: trendingNow.results,
    },
  };
}
