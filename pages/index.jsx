import Head from 'next/head'
import Footer from '../app/components/modules/Footer/Footer';
import Header from '../app/components/modules/Header/Header'
import Hero from '../app/components/modules/Hero/Hero'
import Products from '../app/components/modules/Products/Products';
import styles from '../styles/Home.module.scss';

export default function Home({ products }) {
  return (
    <div className={styles.home}>
      <Head>
        <title>Home - YourStore</title>
        <meta name="description" content="Extensive collection of clothes with the best price on the market - YourStore" />
        <meta property="og:title" content="Extensive collection of clothes with the best price on the market - YourStore" />
        <meta property="og:description" content="Extensive collection of clothes with the best price on the market - YourStore" />
        <meta property="og:url" content="https://yourstore.lor/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Products products={products}/>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://still-temple-20368.herokuapp.com/products');
  const data = await res.json();

  return {
    props: { products: data }
  }
}