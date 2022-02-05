import Link from 'next/link';
import { useEffect, useRef } from 'react';
import CustomButton from '../CustomButton/CustomButton';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';

import styles from './MenuMobile.module.scss';

function MenuMobile(props) {
    const ref = useRef(false);

    useEffect(() => {
        const menu = ref.current;
        if (props.visibility.menuVisibility === false) {
            menu.style.transform = "translateX(0rem)";
            return;
        }
        menu.style.transform = "translateX(-45rem)";
    }, [props.visibility.menuVisibility])

    const handleClickMenu = () => {
        props.visibility.setMenuVisibility(false);
    }

    return (
        <div className={styles.menu} ref={ref}>
            <IconButton size="large" onClick={handleClickMenu}>
                <CloseIcon className={styles.menuIcon} />
            </IconButton>
            <ul>
                <li><Link href={'/'}><div><CustomButton onClick={handleClickMenu}>Home</CustomButton></div></Link></li>
                <li><Link href={'/'}><div><CustomButton onClick={handleClickMenu}>Shop</CustomButton></div></Link></li>
                <li><CustomButton onClick={handleClickMenu}>About</CustomButton></li>
                <li><CustomButton onClick={handleClickMenu}>Blog</CustomButton></li>
                <li><div className={styles.iconList}>
                    <CustomButton onClick={handleClickMenu}><AiOutlineUser className={styles.icon} /></CustomButton>
                    <Link href={'/cart'}><div><CustomButton onClick={handleClickMenu}><AiOutlineShopping className={styles.iconLink} /></CustomButton></div></Link>
                </div></li>
            </ul>
        </div>
    );
}

export default MenuMobile;