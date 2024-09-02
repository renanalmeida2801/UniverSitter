import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import Styles from './LoginForm.module.css';
import plantImage from './../../img/jardinagem.png';
import pawsImage from './../../img/patas.png';
import googleImage from '../../img/google 1.png';
import { AuthContext } from '../../Context/auth.js'; // Import AuthContext

// Define schema with Zod
const loginSchema = z.object({
  email: z.string().email('E-mail digitado inválido.'),
  password: z.string().min(1, 'Necessário inserir a senha!'),
});

const LoginForm = () => {
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(''); // Estado para erros gerais de login

  const onSubmit = async (data) => {
    setLoginError(''); // Clear previous errors
    const errorMessage = await signin({ email: data.email, senha: data.password });

    if (errorMessage) {
      setLoginError(errorMessage); // Set error message if there's an issue
    } else {
      navigate('/'); // Navigate on successful login
    }
  };

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
          {loginError && <div className={Styles.errorText}>{loginError}</div>} {/* Exibe a mensagem de erro geral */}
        </div>
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
