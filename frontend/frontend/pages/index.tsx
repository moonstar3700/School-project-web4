import Head from "next/head"
import Header from "@/components/header"
import Articles from "./articles"


export default function Home() {
  return (
    <>
      <Head>
        <title >News Capture</title>
      </Head>
      <main>
        <Header></Header>


        <Articles></Articles>
      </main>

    </>
  )
}