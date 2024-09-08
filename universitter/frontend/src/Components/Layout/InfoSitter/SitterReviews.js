import Styles from './SitterReviews.module.css'

import ProfilleImage from '../../../img/fotoPerfilCuidador.png'
import { FaStar } from 'react-icons/fa'
import { date } from 'zod'


function SitterReviews(props) {
  const newDate = new Date(props.reviewDate);
  const formatedDate = newDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return (
    <div className={Styles.container}>

      <div className={Styles.review}>
        {props.sitterImg ? <img className={ProfilleImage} src={props.sitterImg}></img> : <img className={ProfilleImage} src={ProfilleImage}></img>}
        <div className={Styles.infos}>
          <h1>{props.userName}</h1>
          <div className={Styles.star}>
            {
              Array.from({ length: props.reviewRating }).map((star, index) => {
                return <FaStar color='gold' size={30} />
              })
            }
          </div>
          <h3>{props.sitterComment}</h3>
        </div>

        <p>{formatedDate}</p>
      </div>
    </div>
  )
}

export default SitterReviews
