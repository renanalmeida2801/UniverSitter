import styles from './SitterForm.module.css'
import { useState } from 'react'
import CategoryDropdown from './CategoryDropdown';
import SitterProfilePicture from './SitterProfilePicture';


function SitterForm() {

    const[selected, setSelected] = useState("Selecione a categoria");

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h3 className={styles.h3}>Torne-se um cuidador</h3>
                {/* <label>preencha os dados abaixo</label><br /> */}
                <SitterProfilePicture/>
                <CategoryDropdown selected={selected} setSelected={setSelected}/>

                <div className={styles.form_group}>
                    <input type='text' className={styles.cpf} placeholder='CPF'></input>
                </div>

                <div className={styles.form_group}>
                    <input type='text' className={styles.descricao} placeholder='Descrição'></input>
                </div>

                <div className={styles.form_group}>
                    <input type='text' className={styles.endereco} placeholder='Endereço'></input>
                </div>

                <div className={styles.form_group}>
                    <input type='number' className={styles.number} placeholder='N°'></input>
                </div>

                <div className={styles.form_group}>
                    <input type='text' className={styles.bairro} placeholder='Bairro'></input>
                </div>

                <div className={styles.form_group}>
                    <input type='text' className={styles.complemento} placeholder='Complemento'></input>
                </div>

                <div className={styles.form_group}>
                    <input type='text' className={styles.referencia} placeholder='Referência (opicional)'></input>
                </div>

                <div className={styles.form_group}>
                    <button type='Submit' className={styles.button}>Tornar-se cuidador</button>
                </div>
            </form>
        </div>
    );
}

export default SitterForm;