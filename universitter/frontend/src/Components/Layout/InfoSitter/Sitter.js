import ProfilleImage from '../../../img/fotoPerfilCuidador.png'
import PawImage from '../../../img/pataCuidador.png'
import LeafImage from '../../../img/folhaCuidador.png'
import Styles from './Sitter.module.css'
import { FaStar } from 'react-icons/fa'

function Sitter(props) {

    console.log(props)

    return (
        <div>
            <div className={Styles.container}>
                <img className={Styles.profilleImg} alt='Profille' src={ProfilleImage}></img>
                <div className={Styles.info}>
                    <div className={Styles.userInfo}>
                        <h1 className={Styles.userName}>{props.sitterName}</h1>
                        <img className={Styles.pawImg} alt='pata' src={PawImage}></img>
                        <img className={Styles.leafImg} alt='folha' src={LeafImage}></img>
                    </div>
                    <div className={Styles.star}>
                        <FaStar size={30} />
                        <FaStar size={30} />
                        <FaStar size={30} />
                        <FaStar size={30} />
                        <FaStar size={30} />
                    </div>
                    <div className={Styles.address}>
                        <h2>Endereço</h2>
                    </div>
                </div>
                <button className={Styles.btn}>Enviar mensagem!</button>

            </div>
            <hr></hr>
        </div>
    );
}

export default Sitter;