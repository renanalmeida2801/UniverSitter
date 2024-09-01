import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Styles from './LoginForm.module.css';
import plantImage from './../../img/jardinagem.png';
import pawsImage from './../../img/patas.png';
import googleImage from '../../img/google 1.png';

// Define schema with Zod
const loginSchema = z.object({
  login: z.string().email('E-mail digitado inválido.'),
  password: z.string().min(1, 'Necessário inserir a senha!'),
});

// Define the onSubmit function
const onSubmit = async (data) => {
  console.log(data);
};

// Define the LoginForm component
const LoginForm = (props) => {
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
            className={errors.login ? Styles.inputError : ''}
            {...register('login')}
          />
          {errors.login && <span className={Styles.errorText}>{errors.login.message}</span>}

          <input
            placeholder='Senha'
            type="password"
            className={errors.password ? Styles.inputError : ''}
            {...register('password')}
          />
          {errors.password && <span className={Styles.errorText}>{errors.password.message}</span>}
        </div>
        <div className={Styles.inputButtonGroup}>
          <button className={Styles.default} type="submit">Login</button>
          <span>OU</span>
          <button className={Styles.googleButton} type="submit">
            Entrar com Google
            <img src={googleImage} className={Styles.googleImg} alt='google image' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
