import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

import { AiOutlineSearch, AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import styles from './Header2.module.scss';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header2() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const menu = useRef();

  const handleClickMenu = () => {
    if (menuVisibility === true) {
      setMenuVisibility(false);
      return;
    }
    setMenuVisibility(true);
  }

  useEffect(() => {
    const ref = menu.current;
    if (menuVisibility === false) {
      ref.style.transform = "translateX(0rem)";
      return;
    }
    ref.style.transform = "translateX(-45rem)";
  }, [menuVisibility])

  return (
    <header className={styles.header2}>
      <div className={styles.menu} ref={menu}>
        <IconButton size="large" onClick={handleClickMenu}>
          <CloseIcon className={styles.menuIcon} />
        </IconButton>
        <ul>
          <li><p>Home</p></li>
          <li><p>Shop</p></li>
          <li><p>About</p></li>
          <li><p>Blog</p></li>
          <li><div className={styles.iconList}>
            <AiOutlineUser className={styles.icon} />
            <Link href={'/cart'}><div><AiOutlineShopping className={styles.iconLink} /></div></Link>
          </div></li>
        </ul>
      </div>
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

export default Header2;
