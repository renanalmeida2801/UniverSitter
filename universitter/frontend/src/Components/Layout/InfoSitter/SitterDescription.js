import Styles from './SitterDescription.module.css'

function SitterDescription(props) {
    return (
        <div >
            <div className={Styles.container}>
                <h1>Descrição</h1>
                <p>{props.sitterDescription}</p>
            </div>

            <hr></hr>
        </div>
    )
}

export default SitterDescription;