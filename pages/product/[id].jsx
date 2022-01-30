import Head from 'next/head'
import Header2 from '../../app/components/modules/Header2/Header2';
import styles from './Product.module.scss';

import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Image from 'next/image';
import Footer from '../../app/components/modules/Footer/Footer';

export const getStaticPaths = async () => {
    const res = await fetch('https://still-temple-20368.herokuapp.com/products');
    const data = await res.json();

    const paths = data.map(product => {
        return {
            params: { id: product.id.toString() }
        }
    })

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://still-temple-20368.herokuapp.com/product/${id}`);
    const data = await res.json();

    return {
        props: { product: data }
    }
}

const Product = ({ product }) => {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));

    return (
        <>
            <Head>
                <title>{product.name}</title>
            </Head>
            <Header2 />
            <div className={styles.product}>
                <div className={styles.container}>
                    <div className={styles.imgWrapper}>
                        <Image src={product.image} alt={product.name} height='1000%' width='1000%' layout='responsive' className={styles.image} />
                    </div>
                    <main className={styles.productInfo}>
                        <h1>{product.name}</h1>
                        <Rating className={styles.rating} name="read-only" value={4} readOnly />
                        <p>{product.description}</p>
                        <h2>${product.cost} USD</h2>
                        <ColorButton
                            className={styles.button}
                            variant="contained"
                            sx={{
                                height: 50,
                                width: 200,
                                fontSize: 20,
                                textTransform: 'none',
                                fontFamily: '"Segoe UI"'
                            }}
                        >Add to cart</ColorButton>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Product;