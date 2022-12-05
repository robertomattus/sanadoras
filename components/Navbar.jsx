import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <a 
          href='https://api.whatsapp.com/send?phone=522721685196&text=Hola! me gustaria ordenar...'
          target='_blank'
          rel='noreferrer'
        >
          <div className={styles.whatsApp}>
            <Image src="/img/whatsapp.png" alt="" width="31" height="31" />
          </div>
        </a>
        <div className={styles.texts}>
          <div className={styles.text}>ORDENA AHORA!</div>
          <div className={styles.text}>272 168 5196</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Inicio</li>
          <li className={styles.listItem}>Productos</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="" width="105" height="105" />
          <li className={styles.listItem}>Eventos</li>
          <a 
            href="https://instagram.com/sanadoras_orizaba?igshid=YTY2NzY3YTc=" 
            target='_blank'
            rel='noreferrer'
          >
            <li className={styles.listItem}>Blog</li>
          </a>
          <a 
            href='https://api.whatsapp.com/send?phone=522721685196&text=Hola! me gustaria ordenar...'
            target='_blank'
            rel='noreferrer'
          >
            <li className={styles.listItem}>WhatsApp</li>
          </a>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30" height="30" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;