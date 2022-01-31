import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Footer from "../app/components/modules/Footer/Footer";
import Header2 from "../app/components/modules/Header2/Header2";
import removeFromCart from '../app/utils/removeFromCart';
import CustomButton from '../app/components/elements/CustomButton/CustomButton';

import styles from '../styles/Cart.module.scss';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaAlipay, FaAmazonPay, FaApplePay, FaGooglePay, FaPaypal } from 'react-icons/fa';

export default function Cart() {
    const [cost, setCost] = useState(0);
    const [products, setProducts] = useState([]);
    const [isVisible, setVisibility] = useState(null);

    const handleClick = (id) => {
        removeFromCart(id);
        if (localStorage.hasOwnProperty('cartProducts')) {
            let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
            if (cartProducts.length === 0) {
                setVisibility(true);
                setCost(0);
                return;
            }
            setProducts(cartProducts);
            setVisibility(false);
            updateCost();
        } else {
            setVisibility(true);
            updateCost();
        }
    }

    const updateCost = () => {
        let currentCost = 0;
        for (let product of products) {
            currentCost += product.cost * product.qty;
        }
        setCost(currentCost);
    }

    /*
        This function will prevent elements with the same key value, setting the key of the product div to its id and its size values.
    */
    const getKey = (product) => {
        let idString = product.id.toString();
        let size = product.size;
        const key = idString.concat(size);
        return key;
    }

    useEffect(() => {
        if (localStorage.hasOwnProperty('cartProducts')) {
            let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
            if (cartProducts.length === 0) {
                setVisibility(true);
                return;
            }
            setProducts(cartProducts);
            setVisibility(false);
        } else {
            setVisibility(true);
        }
    }, [])

    useEffect(() => {
        updateCost();
    }, [products])

    return (
        <div className={styles.cart}>
            <Header2 />
            <div className={styles.container}>
                {isVisible && (
                    <section className={styles.products}>
                        <div className={styles.wrapper}>
                            <h1>Seu carrinho está vazio.</h1>
                        </div>
                    </section>
                )}
                {!isVisible && (
                    <section className={styles.products}>
                        <div className={styles.wrapper}>
                            <h1>Items do seu carrinho:</h1>
                            {products.map(product => (
                                <div key={getKey(product)}>
                                    <div className={styles.product}>
                                        <div className={styles.productWrapper}>
                                            <Link href={`/product/${product.id}`}>
                                                <div className={styles.imgWrapper}>
                                                    <Image className={styles.image} src={product.image} alt={product.name} height='100%' width='100%' layout='responsive' priority='true' />
                                                </div>
                                            </Link>
                                            <div className={styles.productInfo}>
                                                <Link href={`/product/${product.id}`}>
                                                    <h1>{product.name}</h1>
                                                </Link>
                                                <h2><span>Size:</span> {product.size}</h2>
                                                <h2><span>Cost:</span> ${product.cost}</h2>
                                                <h2><span>Quantity:</span> {product.qty}</h2>
                                            </div>
                                        </div>
                                        <IconButton className={styles.deleteIcon} onClick={() => handleClick(product.id)} aria-label="Example">
                                            <DeleteIcon className={styles.icon} />
                                        </IconButton>
                                    </div>
                                    <Divider component="li" className={styles.divider} />
                                </div>
                            ))}
                            <section className={styles.cost}>
                                <h1>Cost: ${cost}</h1>
                                <CustomButton>Check out</CustomButton>
                                <div className={styles.paymentMethods}>
                                    <FaPaypal className={styles.icon} />
                                    <FaAlipay className={styles.icon} />
                                    <FaAmazonPay className={styles.icon} />
                                    <FaApplePay className={styles.icon} />
                                    <FaGooglePay className={styles.icon} />
                                </div>
                            </section>
                        </div>
                    </section>
                )}
            </div>
            <Footer />
        </div>
    );
}