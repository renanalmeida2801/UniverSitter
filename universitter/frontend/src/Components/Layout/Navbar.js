import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../Context/auth'; // Adjust the path as necessary
import styles from './Navbar.module.css'; // Ensure correct path

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  console.log(user)

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {user ? (
          <>
            <li className={styles.item}>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
              >
                Página Inicial
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/find-sitter"
                className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
              >
                Procurar Cuidador
              </NavLink>
            </li>
            {!user.is_sitter && (
              <li className={styles.item}>
                <NavLink
                  to="/sitter-register"
                  className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
                >
                  Quero ser Cuidador
                </NavLink>
              </li>
            )}
            <li className={styles.item}>
              <NavLink
                to="/help"
                className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
              >
                Ajuda
              </NavLink>
            </li>
            <li className={styles.item}>
              <button className={styles.logout} onClick={logout}>Sair</button>
            </li>
          </>
        ) : (
          <>
            <li className={styles.item}>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
              >
                Página Inicial
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/user-register"
                className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
              >
                Registrar-se
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/help"
                className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
              >
                Ajuda
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/login"
              >
                <button className={styles.login}>Login</button>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;














