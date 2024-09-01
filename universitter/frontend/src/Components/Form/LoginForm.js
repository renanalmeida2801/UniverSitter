import { z } from 'zod';
import api from '../../services/api.ts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Styles from './LoginForm.module.css';
import plantImage from './../../img/jardinagem.png';
import pawsImage from './../../img/patas.png';
import googleImage from '../../img/google 1.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Define schema with Zod
const loginSchema = z.object({
  email: z.string().email('E-mail digitado inválido.'),
  password: z.string().min(1, 'Necessário inserir a senha!'),
});

// Define the LoginForm component
const LoginForm = (props) => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(''); // Estado para erros gerais de login

  async function post(data) {
    console.log(data);
    try {
      const response = await api.post('/login', data);
      const token = response.data.token;
      console.log(token);
      sessionStorage.setItem('authToken', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log('Resposta do servidor:', response.data);
      if (token) navigate('/');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setLoginError('E-mail ou senha inválidos. Por favor, tente novamente.'); // Mensagem de erro geral
    }
  }

  const onSubmit = async (data) => {
    setLoginError(''); // Limpa erros anteriores antes de tentar novamente
    await post(data);
  };

  // Initialize useForm with zodResolver
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div>
      <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={Styles.formHeader}>
          <img src={plantImage} className={Styles.img} alt='Plant Image' />
          <h1 className={Styles.h1}>BEM VINDO(A) !</h1>
          <img src={pawsImage} className={Styles.img} alt='Paws Image' />
        </div>
        <div className={Styles.inputTextGroup}>
          <input
            placeholder='E-mail'
            type="text"
            className={`${errors.email || loginError ? Styles.inputError : ''}`}
            {...register('email')}
          />
          {errors.email && <span className={Styles.errorText}>{errors.email.message}</span>}

          <input
            placeholder='Senha'
            type="password"
            className={`${errors.password || loginError ? Styles.inputError : ''}`}
            {...register('password')}
          />
          {errors.password && <span className={Styles.errorText}>{errors.password.message}</span>}
        </div>
        {loginError && <div className={Styles.errorMessage}>{loginError}</div>} {/* Exibe a mensagem de erro geral */}
        <div className={Styles.inputButtonGroup}>
          <button className={Styles.default} type="submit">Login</button>
          <span>OU</span>
          <button className={Styles.googleButton} type="button">
            Entrar com Google
            <img src={googleImage} className={Styles.googleImg} alt='google image' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
