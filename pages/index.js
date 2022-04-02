import Head from "next/head"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Product from "../components/Product"
export default function Home() {

  return (
    <div>
      <Head>
          <title>E-commerce Website</title>
          <meta name="description" content="Generated by Icreate Dev Team"></meta>
      </Head>
      <Navbar />
      <Hero/>
      <Product/>
    </div>
    
  )
}