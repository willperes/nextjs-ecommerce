import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import addToCart from '../../app/utils/addToCart';

import Header2 from '../../app/components/modules/Header2/Header2';
import styles from './Product.module.scss';
import Footer from '../../app/components/modules/Footer/Footer';

import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import Alert from '@mui/material/Alert';

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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        marginLeft: '-.75rem',
        position: 'relative',
        backgroundColor: 'none',
        border: '1px solid #ced4da',
        fontSize: 16,
        fontWeight: 500,
        color: '#958871',
        padding: '10px 26px 10px 12px',
        marginTop: '1.5rem',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '"Segoe UI"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#ad9d81',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

const Product = ({ product }) => {
    const [size, setSize] = useState('');
    const [isVisible, setVisibility] = useState(null);

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    /*
        When clicking the Add to cart button, this function will check if there is a value of size,
        if there is not, it will show an alert informing that a size must be selected so the product
        can be added to the cart. If there is a value of size, the addToCart function will be called
        and the product is going to be added to the cart.
    */
    const handleClick = (product) => {
        if (size === '') {
            setVisibility(true);
            // setTimeout(() => { setVisibility(false) }, 5000);
            return;
        }
        addToCart(product, size)
    }

    return (
        <>
            <Head>
                <title>{product.name}</title>
            </Head>
            {isVisible && <Alert onClick={() => {setVisibility(false)}} severity="error" className={styles.alert}>Você precisa selecionar um tamanho antes de adicionar ao carrinho</Alert>}
            <Header2 />
            <div className={styles.product}>
                <div className={styles.container}>
                    <div className={styles.imgWrapper}>
                        <Image className={styles.image} src={product.image} alt={product.name} height='1000%' width='1000%' layout='responsive' priority='true'/>
                    </div>
                    <main className={styles.productInfo}>
                        <h1>{product.name}</h1>
                        <Rating className={styles.rating} name="read-only" value={4} readOnly />
                        <h2>${product.cost}</h2>
                        <div className={styles.buttonWrapper}>
                            <FormControl sx={{ m: 1 }} variant="standard">
                                <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={size}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                >
                                    {product.sizes.map(s => (
                                        <MenuItem value={s} key={s}>{s}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Button variant="contained" onClick={() => handleClick(product)}>Add to cart</Button>
                        </div>
                        <h3>Product description</h3>
                        <p>{product.description}</p>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Product;