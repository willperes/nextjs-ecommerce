import Image from "next/image";
import { useEffect, useState } from "react";

import Footer from "../app/components/modules/Footer/Footer";
import Header2 from "../app/components/modules/Header2/Header2";
import removeFromCart from '../app/utils/removeFromCart';

import styles from '../styles/Cart.module.scss';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [isVisible, setVisibility] = useState(null);

    const handleClick = (id) => {
        removeFromCart(id);
        if (localStorage.hasOwnProperty('cartProducts')) {
            let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
            if (cartProducts.length === 0) {
                setVisibility(true);
                return;
            }
            setProducts(cartProducts);
            setCount(cartProducts.length);
            setVisibility(false);
        } else {
            setVisibility(true);
        }
    }

    useEffect(() => {
        if (localStorage.hasOwnProperty('cartProducts')) {
            let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
            if (cartProducts.length === 0) {
                setVisibility(true);
                return;
            }
            setProducts(cartProducts);
            setCount(cartProducts.length);
            setVisibility(false);
        } else {
            setVisibility(true);
        }
    }, [])

    return (
        <div className={styles.cart}>
            <Header2 />
            <div className={styles.container}>
                {isVisible && <h1>Seu carrinho está vazio.</h1>}
                {!isVisible && (
                    <div className={styles.products}>
                        <h1>Items do seu carrinho:</h1>
                        {products.map(product => (
                            <>
                                <div className={styles.product} key={product.id}>
                                    <div className={styles.productWrapper}>
                                        <div className={styles.imgWrapper}>
                                            <Image className={styles.image} src={product.image} alt={product.name} height='100%' width='100%' layout='responsive' priority='true' />
                                        </div>
                                        <div className={styles.productInfo}>
                                            <h1>{product.name}</h1>
                                            <h2><span>Size:</span> {product.size}</h2>
                                            <h2><span>Cost:</span> ${product.cost}</h2>
                                            <h2><span>Quantity:</span> {product.qty}</h2>
                                        </div>
                                    </div>
                                    <IconButton className={styles.deleteIcon} onClick={() => handleClick(product.id)} aria-label="Example">
                                        <DeleteIcon className={styles.icon}/>
                                    </IconButton>
                                </div>
                                <Divider component="li" className={styles.divider} />
                            </>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}