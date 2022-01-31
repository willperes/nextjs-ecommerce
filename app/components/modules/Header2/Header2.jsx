import Link from 'next/link';
import { AiOutlineSearch, AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import styles from './Header2.module.scss';

function Header() {
  return (
    <header className={styles.header2}>
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
