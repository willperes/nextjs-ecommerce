import styles from './Products.module.scss';
import ProductCard from '../../elements/ProductCard/ProductCard';

function Products(props) {
    return (
        <div className={styles.products} id='products'>  
           <div className={styles.wrapper}>
            <ProductCard products={props.products}/>
           </div>
        </div>
    );
}

export default Products;