import styles from './Card.module.css';
import { useState } from 'react';
import IconSearch from '../Icons/Search';
import IconChatbubbleOutline from '../Icons/Chat';
import IconPawSharp from '../Icons/Paw';
import IconPlant from '../Icons/Plant';
import StarRating from '../Extras/StarRating';
import { useNavigate } from "react-router-dom";

const icons = [
  <IconPawSharp className={styles.category} width='15px' />,   // Index 0: for 'Pet'
  <IconPlant className={styles.category} width='15px' />,      // Index 1: for 'Plant'
  (
    <>
      <IconPawSharp className={styles.category} width='15px' />
      <IconPlant className={styles.category} width='15px' />
    </>
  )
];

const Card = (props) => {
  const navigate = useNavigate();

  async function redirectToDetailsSitter () {
    navigate(`/info-sitter/${props.sitter_id}`);
  }
  
  const [tab, setTab] = useState(0);

  return (
    <div style={{ height: props.height }} className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={props.foto} />
        <StarRating color='gold' width={100} starSize={15} rating={props.rating} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoHeader}>
          <span>{props.nome}</span>
          <div className={styles.categoryContainer}>
            {
              icons[props.categoria]
            }
          </div>
        </div>
        <div className={styles.infoBody}>
          <div className={styles.desc}>{props.descricao}</div>
          <div className={styles.actions}>
            <button className={styles.button} onClick={redirectToDetailsSitter}>Detalhes
              <div className={styles.icon}>
                <IconSearch strokeWidth={50} width='25px' />
              </div>
            </button>
            <button className={styles.button}>Chat <div className={styles.icon}>
              <IconChatbubbleOutline width='25px' />
            </div></button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Card;
