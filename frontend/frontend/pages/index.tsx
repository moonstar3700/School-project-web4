import Head from 'next/head';
import Header from '@/components/header';
import Articles from './articles';
import Footer from './footer';
import Example from './about';
import { ReactSession } from 'react-client-session';
import LoginForm from './login';

export default function Home() {
    //var user = ReactSession.get("user");
    /*var user = sessionStorage.getItem("user")
  console.log(user)
  if (user == null) {
    return (
      <>
        <Head>
          <title >News Capture</title>
        </Head>
        <Header></Header>
        <LoginForm/>
      </>
    )
  }*/

    return (
        <>
            <Head>
                <title>News Capture</title>
            </Head>
            <main>
                <Header></Header>
                <Example></Example>
                <Articles></Articles>

                <Footer></Footer>
            </main>
        </>
    );
}
