import imageProfile from "../../../img/fotoPerfilCuidador.png"
import imagePaw from "../../../img/pataUsuario.png"
import imageLeaf from "../../../img/folhaUsuario.png"
import imageHeart from "../../../img/coracaoUsuario.png"
import styles from "./Sitter.module.css"

function Sitter() {
    return (
        <div>
            <div>
                <div className={styles.picture}>
                    <div className={styles.picture_div}>
                        <div className={styles.infos}>
                            <img alt="user-profile" className={styles.img} src={imageProfile}></img>
                            <h1>Nome do usuário da silva</h1>

                            <img className={styles.infos_img_paw} alt="paw" src={imagePaw}></img>
                            <img className={styles.infos_img_leaf} alt="leaf" src={imageLeaf}></img>
                            <img className={styles.infos_img_heart} alt="heart" src={imageHeart}></img>
                        </div>
                    </div>
                    <button className={styles.msgButton}>Enviar mensagem!</button>
                </div>
                <div className={styles.local}>
                    <h2>rua ze da manga de oliveira - Cedro - 920</h2>
                </div>


                <hr className={styles.hr}></hr>
            </div>
        </div>
    );
}

export default Sitter;