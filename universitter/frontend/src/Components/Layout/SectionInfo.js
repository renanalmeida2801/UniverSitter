import styles from './SectionInfo.module.css'
import icon1 from '../../img/dogcuidador.png'
import icon2 from '../../img/viagem.png'
import icon3 from '../../img/apertoDeMao.png'

function SectionInfo() {
    return (
        <section className={styles.container}>
            <div>
                <h1 className={styles.h1}>Como funciona?</h1>
            </div>
            <div className={styles.midinfo}>
                <div className={styles.img_text}>
                    <img className={styles.img} src={icon1} alt='mulher e cachorro'></img>
                    <h2 className={styles.subtext}>Encontre um cuidador</h2>
                </div>
                <div className={styles.img_text}>
                    <img className={styles.img} src={icon3} alt='aperto de mãos'></img>
                    <h2 className={styles.subtext}>Entre em contato</h2>
                </div>
                <div className={styles.img_text}>
                    <img className={styles.img} src={icon2} alt='gato e cachorro'></img>
                    <h2 className={styles.subtext}>Viaje tranquilo</h2>
                </div>
            </div>
            <div className={styles.lastinfo}>

                <p className={styles.p}>através do site, você encontra o cuidador ideal para atender a necessidade dos seus companheiros</p>
                <p className={styles.p}>Entre em contato para ter todas as informações e combinar como deixar o seu companheiro(a)</p>
                <p className={styles.p}>Viaje com segurança e tranquilidade! Receba notícias a qualquer momento!</p>
            </div>



        </section>
    );
}

export default SectionInfo;