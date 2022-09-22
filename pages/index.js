import Head from 'next/head'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import {SliderData} from '../components/SliderData'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Caffeination</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Caffeination"
            message="Roasted to Perfection"
            />
      <Slider slides={SliderData}/>
    </div>
  )
}
