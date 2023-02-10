import Home from '../src/container/Home/index';
import Footer from '../src/component/footer';
import Header from '../src/component/header'
import Head from 'next/head';

const Index = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Head>
          <title>Home</title>
        </Head>
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default Index

