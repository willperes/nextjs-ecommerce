import Footer from "../app/components/modules/Footer/Footer";
import Header2 from "../app/components/modules/Header2/Header2";

import styles from '../styles/Cart.module.scss';

export default function Cart() {
    return (
        <>
            <Header2 />
            <div className={styles.container}></div>
            <Footer />
        </>
    );
}