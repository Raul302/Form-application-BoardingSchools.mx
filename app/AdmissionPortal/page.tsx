
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