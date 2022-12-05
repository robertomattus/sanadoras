import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            ASI ES, NUESTROS CALDOS CURAN LA CRUDA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ENCUENTRANOS</h1>
          <p className={styles.text}>
             Calle Colon entre sur 2 y 8 
            <br /> plaza santa rita, Orizaba 94300
            <br /> colonia centro
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HORAS DE TRABAJO</h1>
          <p className={styles.text}>
            TODOS LOS DIAS
            <br /> 10:00 – 17:00
          </p>
        </div>

        <div className={styles.socialCard}>
          <h1 className={styles.socialTitule}>SIGUENOS EN REDES SOCIALES</h1>
          <a 
            href="https://instagram.com/sanadoras_orizaba?igshid=YTY2NzY3YTc=" 
            target='_blank'
            rel='noreferrer'
          >
            <Image src="/img/instagram.png" alt="" width="30" height="30"/>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Footer;