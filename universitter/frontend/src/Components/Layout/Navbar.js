import { Link } from "react-router-dom";


import styles from './Navbar.module.css';

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.item} to='/'>UniverSitter</Link>
          </li>
          <li className={styles.menu}>
            <Link className={styles.menu} to='/find-sitter'>Encontrar um cuidador</Link>
          </li>
          <li className={styles.menu}>
            <Link to='/sitter-register'>Quero ser um cuidador</Link>
          </li >
          <li className={styles.menu}>
            <Link to='/user-register'>Chat</Link>
          </li>
          <li className={styles.menu}>
            <Link to='/help'>Ajuda</Link>
          </li>
          <li className={styles.item}>
            <Link to='/login'>Entrar</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
