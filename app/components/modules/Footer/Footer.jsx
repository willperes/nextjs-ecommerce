import MasterCard from '../../../../public/images/mastercard-icon.svg';
import Visa from '../../../../public/images/visa-icon.svg';
import GooglePay from '../../../../public/images/googlepay-icon.svg';
import ApplePay from '../../../../public/images/applepay-icon.svg';
import PayPal from '../../../../public/images/paypal-icon.svg';
import Amazon from '../../../../public/images/amazon-icon.svg';
import AliPay from '../../../../public/images/alipay-icon.svg';

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
          <li><h5>Atendimento</h5></li>
          <li><p>Das 08 às 18h, de segunda a sexta</p></li>
          <li><p>Telefone: (00) 3333-3333</p></li>
          <li><p>WhatsApp: (00) 99999-9999</p></li>
          <li><p>E-mail: yourstore@loremipsum.com</p></li>
          <li></li>
        </ul>
      </div>
      <section className={styles.paymentMethods}>
        <Image src={MasterCard} height="50%" width="50rem"></Image>
        <Image src={Visa} height="50%" width="50rem"></Image>
        <Image src={GooglePay} height="50%" width="50rem"></Image>
        <Image src={ApplePay} height="50%" width="50rem"></Image>
        <Image src={PayPal} height="50%" width="50rem"></Image>
        <Image src={Amazon} height="50%" width="50rem"></Image>
        <Image src={AliPay} height="50%" width="50rem"></Image>
      </section>
    </footer>
  )
}

export default Footer;