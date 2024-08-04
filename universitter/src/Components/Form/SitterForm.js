import { Image } from '@chakra-ui/react'
import select from 'react'


import styles from './SitterForm.module.css'


function SitterForm() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h3 className={styles.h3}>Torne-se um cuidador</h3>
                {/* <label>preencha os dados abaixo</label><br /> */}

                <Image className={styles.imagem}
                    borderRadius='full'
                    boxSize='150px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />

                <div className={styles.categoria}>
                    <select >
                        <option className={styles.itens} value="0">Selecione a categoria</option>
                        <option value="1">Animais e Plantas</option>
                        <option value="2">Somente Animais</option>
                        <option value="3">Somente Plantas</option>
                        
                    </select>
                </div>

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