import Home from '../src/container/Home/index';
import Head from 'next/head';

const Index = () => {
  return (
    <div className='container'>
      <Head>
        <title>Home</title>
      </Head>
      <Home />
    </div>
  )
}

export default Index

