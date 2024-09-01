import styles from './UserForm.module.css'
import {useForm} from 'react-hook-form'
import api from '../../services/api.ts';
import { Link } from 'react-router-dom';
import { useState } from 'react';

async function post(data) {
    try {
        const response = await api.post('/userRegister', data);
        console.log('Resposta do servidor:', response.data);
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
    }
}

// const onSubmit = (e) => {
//     post(e);
//     console.log(e)
// }

// Para validar campos usar o Zod com o Hook form, pesquisar no youtube da rocketseat

function UserForm({ btnText }) {
    const [checkbox, setCheckbox] = useState(false);
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data) => {
      post(data)
      console.log(data);
    };
  
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h3>Cadastre-se</h3>
          <div className={styles.flexContainer}>
            <input
              type="text"
              {...register("nome")}
              placeholder="Nome"
              className={styles.fieldtext}
            />
            <input
              type="text"
              {...register("sobrenome")}
              placeholder="Sobrenome"
              className={styles.fieldtext}
            />
          </div>
          <input
            type="text"
            {...register("telefone")}
            placeholder="Telefone"
            className={styles.anothertext}
          />
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className={styles.anothertext}
          />
          <input
            type="password"
            {...register("senha")}
            placeholder="Senha"
            className={styles.anothertext}
          />
  
          <div className={styles.terms_container}>
            <input
              type="checkbox"
              id="termos"
              name="termos"
              className={styles.checkbox}
              checked={checkbox}
              onChange={() => setCheckbox(!checkbox)}
            />
            <label
              htmlFor="termos"
              className={styles.checkbox_label}
            >
              Eu li e concordo com os termos e condições de uso e política de privacidade
            </label>
          </div>
  
          <button type="submit" disabled={!checkbox}>{btnText || "Cadastrar-se"}</button>
  
          <div className={styles.container}>
            <Link className={styles.link} to='/help'><u>Já tenho cadastro!</u></Link>
          </div>
        </form>
      </div>
    );
}
  
export default UserForm;

