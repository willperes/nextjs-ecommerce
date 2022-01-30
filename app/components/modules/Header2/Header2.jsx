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
              <Link href={'/'}><a href='#'>Home</a></Link>
              <a href='#'>Shop</a>
              <a href='#'>About</a>
              <a href='#'>Blog</a>
            </div>
          </li>
          <li>
            <div className={styles.iconList}>
              <AiOutlineSearch className={styles.icon} />
              <AiOutlineUser className={styles.icon} />
              <AiOutlineShopping className={styles.icon} />
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
