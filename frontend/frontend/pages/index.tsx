import Head from "next/head"
import Header from "@/components/header"
import Articles from "./articles"


export default function Home() {
  return (
    <>
      <Head>
        <title>News Capture</title>
      </Head>
      <main>
        <Header></Header>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <h1>add articles</h1>

        <h1>Articles</h1>
        <Articles></Articles>
      </main>

    </>
  )
}