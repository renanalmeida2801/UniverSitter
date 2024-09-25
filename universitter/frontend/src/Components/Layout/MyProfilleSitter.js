import Styles from './MyProfilleSitter.module.css'
import { FaStar } from 'react-icons/fa'
import IconPawSharp from '../Icons/Paw.js'
import IconPlant from '../Icons/Plant.js'
import { useNavigate } from 'react-router-dom';

const icons = [
  <IconPawSharp className={Styles.category} width='25px' />,   // Index 0: for 'Pet'
  <IconPlant className={Styles.category} width='25px' />,      // Index 1: for 'Plant'
  (
    <>
      <IconPawSharp className={Styles.category} width='25px' />
      <IconPlant className={Styles.category} width='25px' />
    </>
  )
];

function MyProfilleSitter(props) {

  const navigate = useNavigate()

  console.log(props.sitterRating)

  return (
    <div>
      <div className={Styles.container}>
        <img className={Styles.profilleImg} alt='Profille' src={props.sitterImage}></img>
        <div className={Styles.info}>
          <div className={Styles.userInfo}>
            <div className={Styles.userNameCategory}>
              <h1 className={Styles.userName}>{props.sitterName} {props.sitterLastName}</h1>
              <div className={Styles.categoryContainer}>
                {
                  icons[props.sitterCategory]
                }
              </div>
            </div>
            <div className={Styles.star}>
              {
                Array.from({length:props.sitterRating}).map((star, index) => {
                  return <FaStar color='gold' size={30} />
                })
              }
            </div>
            <div className={Styles.address}>
              <h2>Endereço: {props.sitterAddress}</h2>
            </div>
          </div>
        </div>
        <button onClick={()=> {
          navigate('/edit-profille')
        }} className={Styles.btn}>Editar informações</button>

      </div>
      <hr></hr>
    </div>
  );
}

export default MyProfilleSitter;
