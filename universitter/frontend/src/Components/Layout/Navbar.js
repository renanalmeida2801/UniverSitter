import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/auth'; // Adjust the path as necessary
import styles from './Navbar.module.css'; // Ensure correct path

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {user ? (
          <>
            <li className={styles.item}><Link to="/">Home</Link></li>
            <li className={styles.item}><Link to="/find-sitter">Find Sitter</Link></li>
            <li className={styles.item}><Link to="/sitter-register">Sitter Register</Link></li>
            <li className={styles.item}><Link to="/user-register">User Register</Link></li>
            <li className={styles.item}><Link to="/help">Help</Link></li>
            <li className={styles.item}><button onClick={() => { /* handle logout */ }}>Logout</button></li>
          </>
        ) : (
          <>
            <li className={styles.item}><Link to="/">Home</Link></li>
            <li className={styles.item}><Link to="/help">Help</Link></li>
            <li className={styles.item}><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
