import styles from './Card.module.css';
const Card = (props) => {
  return (
    <div style={{ height: props.height}} className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={props.img} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoHeader}></div>
        <div className={styles.infoBody}>
          <div className={styles.desc}>{props.descricao}</div>
          <div className={styles.actions}>
            <button className={styles.button}>Detalhes</button>
            <button className={styles.button}>Chat</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
