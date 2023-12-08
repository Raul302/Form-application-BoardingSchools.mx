
import Link from 'next/link';
import styles from './admissionPortal.module.css';
import Image from 'next/image';

const LoginPage = () => {
  return (

    // Box father
    <div>

      {/* <div className={`${styles.item} ${styles.item1}`}>Item 1 </div> */}
      <div className={styles.workArea}>

        {/* div of content */}
        <div className={styles.content}>
          {/* Title  */}
          <div className={styles.title}>
            <h1>Name of university or college - UK - CN- SZ -</h1>
          </div>

          {/* Forms  */}
          {/* Username */}
          <div className={styles.formLogin}>
            <label className={styles.labelText}> username </label>
            <input className={styles.inputText} placeholder="Username"/>
          </div>
          {/* Passwords  */}
          <div className={styles.formLogin}>
            <label className={styles.labelText}> password </label>
            <input className={styles.inputText} placeholder="******"/>
        
          </div>

          {/* Button Login */}
          <div className={styles.buttonBox}>
            <button className={styles.buttonLogin}>Log In</button>
          </div>

          <div className={styles.footerBox}>
          <p>

          <Link href="https://boardingschools.mx/" passHref={true} target="_blank">
          Boarding Schools MX © 2023  &nbsp;
          </Link>
          • &nbsp;
          <Link href="https://boardingschools.mx/aviso-de-privacidad/" passHref={true} target="_blank">
          Privacy Policy  &nbsp;
          </Link>
           
          </p>
          </div>
        </div>


      </div>

      <div className={styles.banner}>
        <div className={styles.bannerArea}>
          <Image className={styles.logoBanner} src="/logoTest.png" alt="logo" width={100} height={100} />

        </div>

      </div>

    </div>
  )
}

export default LoginPage