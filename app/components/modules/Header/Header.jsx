import Link from 'next/link';
import { useEffect, useState } from 'react';

import { FaSearch, FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import styles from './Header.module.scss';

function Header() {
  const [header, setHeader] = useState(styles.header)

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setHeader(styles.header)
    } else if (window.scrollY > 70) {
      return setHeader(styles.header2)
    } 
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header className={header}>
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
