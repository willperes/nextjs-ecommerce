import { FaCcVisa, FaCcMastercard, FaCcStripe, FaCcPaypal, FaGooglePlay } from 'react-icons/fa';
import { RiBillFill, RiAppleFill } from 'react-icons/ri';

import styles from './Footer.module.scss';
import Image from 'next/image';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <ul>
          <li><h5>Conheça-nos</h5></li>
          <li><a href="#">Informações corporativas</a></li>
          <li><a href="#">Carreiras</a></li>
          <li><a href="#">Comunicados à imprensa</a></li>
          <li><a href="#">Comunidade</a></li>
          <li><a href="#">Acessibilidade</a></li>
          <li><a href="#"></a></li>
        </ul>
        <ul>
          <li><h5>Deixe-nos ajudar você</h5></li>
          <li><a href="#">Sua conta</a></li>
          <li><a href="#">Frete e prazo de entrega</a></li>
          <li><a href="#">Devoluções e reembolsos</a></li>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Código de Defesa do Consumidor</a></li>
          <li><a href="#"></a></li>
        </ul>
        <ul>
          <li><h5>Formas de pagamento</h5></li>
          <li><h6>Cartão de Crédito</h6></li>
          <li><div className={styles.footerCardPayment}>
            <FaCcVisa className={styles.footerIcon} />
            <FaCcMastercard className={styles.footerIcon} />
            <FaCcStripe className={styles.footerIcon} />
            <FaCcPaypal className={styles.footerIcon} />
          </div></li>
          <li><h6>Boleto Bancário</h6></li>
          <li><RiBillFill className={styles.footerIcon} /></li>
          <li><a href="#">Pague em até 6x</a></li>
          <li><a href="#">Confira as condições</a></li>
          <li><h6>Boleto Antecipado</h6></li>
          <li><a href="#">À vista com 3% de desconto em produtos</a></li>
        </ul>
        <ul>
          <li><h5>Baixe nosso aplicativo</h5></li>
          <li><div className={styles.footerIconWrapper}>
            <FaGooglePlay className={styles.footerIcon} />
            <RiAppleFill className={styles.footerIcon} />
          </div></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;