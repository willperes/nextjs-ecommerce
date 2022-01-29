import styles from './Hero.module.scss';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

function Hero() {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
      }));

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1>Best offers to kick off your year</h1>
                <ColorButton
                    className={styles.button}
                    variant="contained"
                    sx={{
                        height: 50,
                        width: 200,
                        fontSize: 20,
                        textTransform: 'none',
                        fontFamily: '"Segoe UI"'
                    }}
                >Check it out</ColorButton>
            </div>
        </section>
    );
}

export default Hero;