import styles from "./ReviewComp.module.css"
import imageProfile from "../../../img/fotoPerfilCuidador.png"

const ReviewComp = () => {






    return (
        <div className={styles.container}>
            <div className={styles.picture_div}>
                <div className={styles.infos}>
                    <img alt="user-profile" className={styles.img} src={imageProfile}></img>
                    <h1>Nome do usuário da silva</h1>
                </div>
            </div>
        </div>
    )
}

export default ReviewComp