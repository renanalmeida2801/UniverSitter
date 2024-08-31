import Styles from './SectionHome.module.css'
import image from '../../img/imgTelaHome.png'

function SectionHome(){
    return(
        <section className={Styles.body}>
            <img className={Styles.imgTelaHome} src={image} alt="cachorro feliz" ></img>
            <h1 className={Styles.text}>Encontre alguém ideal para seu companheiro(a)</h1>
            <p className={Styles.p}>Na UniverSitter você encontra jovens cuidadores disponíveis para cuidar dos seus
                pets e de suas plantas!
            </p>
        </section>
    );
}

export default SectionHome;