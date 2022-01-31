import Link from 'next/link';
import { useEffect, useState } from 'react';

import { AiOutlineSearch, AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
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
              <Link href={'/'}><p>Home</p></Link>
              <Link href={'/'}><p>Shop</p></Link>
              <p>About</p>
              <p>Blog</p>
            </div>
          </li>
          <li>
            <div className={styles.iconList}>
              <AiOutlineSearch className={styles.icon} />
              <AiOutlineUser className={styles.icon} />
              <Link href={'/cart'}><div><AiOutlineShopping className={styles.iconLink} /></div></Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
