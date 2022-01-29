import Link from 'next/link';
import { FaSearch, FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import styles from './Header2.module.scss';

function Header() {
  return (
    <header className={styles.header2}>
      <div className={styles.wrapper}>
        <ul>
        <li><Link href={'/'}><h1 className={styles.logo}>YourStore</h1></Link></li>
          <li>
            <div className={styles.midButtons}>
              <Link href={'/'}><a href='#'>Home</a></Link>
              <a href='#'>Shop</a>
              <a href='#'>About</a>
              <a href='#'>Blog</a>
            </div>
          </li>
          <li>
            <div className={styles.iconList}>
              <FaSearch className={styles.icon} />
              <FaUserAlt className={styles.icon} />
              <FaShoppingCart className={styles.icon} />
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
