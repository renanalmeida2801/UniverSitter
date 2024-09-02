import styles from './SitterForm.module.css'
import { useState } from 'react'
import api from '../../services/api.ts';
import { useForm } from 'react-hook-form'
import CategoryDropdown from './CategoryDropdown';
import SitterProfilePicture from './SitterProfilePicture';


async function post(data) {
    try {
        const response = await api.post('/sitters', data);
        console.log('Resposta do servidor:', response.data);
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
    }
}

function SitterForm() {

    const [selected, setSelected] = useState("Selecione a categoria");
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data.cpf)
        const enderecoCompleto = `${data.endereco}, ${data.numero}, ${data.bairro}, ${data.complemento}, ${data.referencia}`;

        // Adicionando a string de endereço de volta aos dados
        const dadosComEndereco = {
            ...data,
            enderecoCompleto: enderecoCompleto
        };

        post(dadosComEndereco)
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={styles.h3}>Torne-se um cuidador</h3>
                {/* <label>preencha os dados abaixo</label><br /> */}
                <SitterProfilePicture />
                <CategoryDropdown selected={selected} setSelected={setSelected} />

                <div className={styles.form_group}>
                    <input type='text'{...register("cpf")} className={styles.cpf} placeholder='CPF'></input>
                </div>

                <div className={styles.form_group}>
                    <input type='text'{...register("descricao")} className={styles.descricao} placeholder='Descrição'></input>
                </div>

                <div className={styles.form_group}>
                    <input type='text' {...register("endereco")} className={styles.endereco} placeholder='Endereço'></input>
                </div>

                <div className={styles.form_group}>
                    <input type='number' {...register("numero")} className={styles.number} placeholder='N°'></input>
                </div>

                <div className={styles.form_group}>
                    <input type='text' {...register("bairro")} className={styles.bairro} placeholder='Bairro'></input>
                </div>

                <div className={styles.form_group}>
                    <input type='text' {...register("complemento")} className={styles.complemento} placeholder='Complemento'></input>
                </div>

                <div className={styles.form_group}>
                    <input type='text' {...register("referencia")} className={styles.referencia} placeholder='Referência (opicional)'></input>
                </div>

                <div className={styles.form_group}>
                    <button type='Submit' className={styles.button}>Tornar-se cuidador</button>
                </div>
            </form>
        </div>
    );
}

export default SitterForm;