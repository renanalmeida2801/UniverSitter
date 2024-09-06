import imageProfile from "../../img/fotoPerfilCuidador.png"
import imagePaw from "../../img/pataUsuario.png"
import imageLeaf from "../../img/folhaUsuario.png"
import imageHeart from "../../img/coracaoUsuario.png"
import styles from './Sitter.module.css'

function Sitter() {
    return (
        <div>
            <div>
                <div className={styles.picture}>
                    <div className={styles.infos} >
                        <img alt="user-profile" className={styles.img} src={imageProfile}></img>
                        <h1>salve</h1>

                        <img className={styles.infos_img} alt="paw" src={imagePaw}></img>
                        <img className={styles.infos_img} alt="leaf" src={imageLeaf}></img>
                        <img className={styles.infos_img} alt="heart" src={imageHeart}></img>
                    </div>
                    <button className={styles.msgButton}>Enviar mensagem!</button>
                </div>
                <div className={styles.local}>
                    <h2>local</h2>
                </div>


                <hr></hr>
            </div>
        </div>
    );
}

export default Sitter;