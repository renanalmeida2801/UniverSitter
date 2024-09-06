import styles from './SitterForm.module.css'
import { useState } from 'react'
import api from '../../services/api.ts';
import { useForm } from 'react-hook-form'
import CategoryDropdown from './CategoryDropdown';
import SitterProfilePicture from './SitterProfilePicture';
import { useContext } from 'react';
import AuthContext from '../../Context/auth';


function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function post(data) {
  console.log(data)
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
  const [image, setImage] = useState('');
  const { user } = useContext(AuthContext);
  const onSubmit = async (data) => {
    const { endereco, numero, bairro, complemento, referencia, cpf, descricao } = data;

    const enderecoCompleto = `${endereco}, ${numero}, ${bairro}, ${complemento}, ${referencia}`;

    let base64Image = '';

    if (image instanceof File) {
      base64Image = await convertToBase64(image);
    }

    const dados = {
      user_id: user.user_id,
      endereco: enderecoCompleto,
      cpf,
      descricao,
      image: base64Image
    }

    post(dados)
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.h3}>Torne-se um cuidador</h3>
        {/* <label>preencha os dados abaixo</label><br /> */}
        <SitterProfilePicture callback={setImage} />
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
