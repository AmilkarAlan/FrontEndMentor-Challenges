import styles from '../modules/Home.module.css';
import logoImg from '../assets/shared/logo.svg'
// import info from '../data.json';


export function Home() {
  return (
    <div className={styles.home}>
      <header>
        <img src={logoImg} alt="logo" />
      </header>
      <main>
      </main>
    </div>
  );
}