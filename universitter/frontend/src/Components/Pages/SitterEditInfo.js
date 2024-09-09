import EditSitterForm from "../Form/EditSitterForm";

import styles from './SitterEditInfo.module.css'

function SitterEditInfo(){
    return(
        <div className={styles.body}>
            <EditSitterForm/>
        </div>
    );
}

export default SitterEditInfo;