import styles from './UserForm.module.css'
import { useForm } from 'react-hook-form'
import api from '../../services/api.ts';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const registerSchema = z.object({
  email: z.string().email('E-mail digitado inválido.'),
  senha: z.string().min(1, 'Necessário inserir a senha!'),
  nome: z.string().min(1, 'Informe seu Nome!'),
  telefone: z.string().min(9, 'Informe seu número de telefone!'),
  sobrenome: z.string().default(''),
});

// const onSubmit = (e) => {
//     post(e);
//     console.log(e)
// }

// Para validar campos usar o Zod com o Hook form, pesquisar no youtube da rocketseat

function UserForm({ btnText }) {
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {

    try {
      const response = await api.post('/userRegister', data);
      console.log('Resposta do servidor:', response.data);
      navigate("/login");
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }

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
            className={`${errors.nome ? styles.inputErrorFieldtext : styles.fieldtext}`}
          />

          <input
            type="text"
            {...register("sobrenome")}
            placeholder="Sobrenome"
            className={styles.secname}
          />
        </div>
        <input
          type="text"
          {...register("telefone")}
          placeholder="Telefone"
          className={`${errors.telefone ? styles.inputErrorAnothertext : styles.anothertext}`}
        />
        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          className={`${errors.email ? styles.inputErrorAnothertext : styles.anothertext}`}
        />
        <input
          type="password"
          {...register("senha")}
          placeholder="Senha"
          className={`${errors.senha ? styles.inputErrorAnothertext : styles.anothertext}`}
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

        <div>
          <Link className={styles.link} to="/login"><u>Já tenho cadastro!</u></Link>
        </div>
      </form>
    </div>
  );
}

export default UserForm;

