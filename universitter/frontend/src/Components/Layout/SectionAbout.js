import { Link } from 'react-router-dom';

import styles from './SectionAbout.module.css'
import image from '../../img/plantaQuemSomos.jpg'

function SectionAbout() {
    return (
        <div className={styles.container}>
            <div className={styles.div_text}>
                <h2 className={styles.text}>Quem somos?</h2><br></br>
                <p className={styles.info}>O UniverSitter é um projeto de alunos da UFC - Quixadá</p><br></br>
                <p className={styles.info}>Nossa ideia é conectar os unversitários do campus e fortalecer a comunidade através de uma troca de favores!</p><br></br>
                <p className={styles.info}>Faça parte da família UniverSitter!</p>
                <div className={styles.div_button}>
                    <Link className={styles.button} to='/'>Encontrar um cuidador</Link>
                    <Link className={styles.button} to='/'>Tornar-se um cuidador</Link>
                </div>
            </div>
            <div className={styles.div_img}>
                <img className={styles.img} src={image} alt='vaso com plantas'></img>
            </div>
        </div>
    );
}

export default SectionAbout;