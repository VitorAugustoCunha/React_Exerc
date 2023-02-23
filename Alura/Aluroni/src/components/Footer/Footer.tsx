import styles from 'components/Footer/Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <Logo />
      <h3>Criado por <a href='https://github.com/VitorAugustoCunha'><i>Vitor</i></a></h3>
    </footer>
  );
}