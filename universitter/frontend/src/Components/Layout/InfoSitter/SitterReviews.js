import Styles from './SitterReviews.module.css'

import ProfilleImage from '../../../img/fotoPerfilCuidador.png'
import { FaStar } from 'react-icons/fa'


function SitterReviews() {
    return (
        <div>
            <div className={Styles.container}>
                <h1>Avaliações</h1>
            </div>
            <div className={Styles.review}>
                <img className={ProfilleImage} src={ProfilleImage}></img>
                <div className={Styles.infos}>
                    <h1>Usuário</h1>
                    <div className={Styles.star}>
                        <FaStar size={30} />
                        <FaStar size={30} />
                        <FaStar size={30} />
                        <FaStar size={30} />
                        <FaStar size={30} />
                    </div>
                </div>
                <p>xx/xx/xxxx</p>
            </div>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan sagittis mauris at varius. Vestibulum tempus purus sit amet laoreet facilisis.</h3>
        </div>
    )
}

export default SitterReviews