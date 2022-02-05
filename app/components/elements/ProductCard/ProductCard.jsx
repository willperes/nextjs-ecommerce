import { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './ProductCard.module.scss';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductCard(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(props.products)
    }, [])

    return (
        <>
            {products && (
                products.map(product => (
                    <div key={product.id} className={styles.productCard}>
                        <Card className={styles.card} sx={{ maxWidth: 300, borderRadius: 0 }}>
                            <Link href={`/product/${product.id}`}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="300"
                                    image={product.image}
                                />
                            </Link>
                            <CardContent className={styles.cardContent}>
                                <Typography variant="h5">
                                    {product.name}
                                </Typography>
                                <Typography className={styles.excerpt} variant="h6">
                                    {product.excerpt}
                                </Typography>
                                <Typography className={styles.cost} variant="h5">
                                    ${product.cost}
                                </Typography>
                                <Typography className={styles.sizeList} variant="h6">
                                    Sizes:
                                </Typography>
                                <div className={styles.sizes}>
                                    {product.sizes.map(size => (
                                        <p key={size}>{size}</p>
                                    ))}
                                </div>
                            </CardContent>
                            <Link href={`/product/${product.id}`} key={product.id}><Button variant="contained">More info</Button></Link>
                        </Card>
                    </div>
                ))
            )}
        </>
    );
}

export default ProductCard;