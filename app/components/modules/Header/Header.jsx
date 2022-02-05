import Link from 'next/link';
import { useEffect, useState } from 'react';

import { AiOutlineSearch, AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import styles from './Header.module.scss';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuMobile from '../../elements/MenuMobile/MenuMobile';

function Header() {
  const [header, setHeader] = useState(styles.header);
  const [menuVisibility, setMenuVisibility] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setHeader(styles.header)
    } else if (window.scrollY > 70) {
      return setHeader(styles.header2)
    }
  }

  const handleClickMenu = () => {
    if (menuVisibility === true) {
      setMenuVisibility(false);
      return;
    }
    setMenuVisibility(true);
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header className={header}>
      <MenuMobile visibility={{ menuVisibility, setMenuVisibility }}/>
      <div className={styles.wrapper}>
        <ul>
          <li><Link href={'/'}><h1 className={styles.logo}>YourStore</h1></Link></li>
          <li>
            <nav className={styles.navBar}>
              <ul>
                <li><Link href={'/'}><p>Home</p></Link></li>
                <li><Link href={'/'}><p>Shop</p></Link></li>
                <li><p>About</p></li>
                <li><p>Blog</p></li>
              </ul>
            </nav>
          </li>
          <li>
            <div className={styles.iconList}>
              <AiOutlineSearch className={styles.icon} />
              <AiOutlineUser className={styles.icon} />
              <Link href={'/cart'}><div><AiOutlineShopping className={styles.iconLink} /></div></Link>
            </div>
          </li>
          <li className={styles.hamburguer}>
            <IconButton size="large" onClick={handleClickMenu}>
              <MenuIcon className={styles.menuIcon} />
            </IconButton>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
