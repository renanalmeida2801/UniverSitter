import SitterForm from "../Form/SitterForm";

import styles from './SitterRegister.module.css'

function SitterRegister() {
    return (
        <div className={styles.body}>
            <SitterForm />
        </div>
    );
}

export default SitterRegister;