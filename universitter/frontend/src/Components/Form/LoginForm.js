import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Styles from './LoginForm.module.css';
import plantImage from './../../img/jardinagem.png';
import pawsImage from './../../img/patas.png';

// Define schema with Zod
const loginSchema = z.object({
    login: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
});

// Define the onSubmit function
const onSubmit = (data) => {
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
                    <img src={plantImage} className={Styles.img} alt='plant image'/>
                    <h1 className={Styles.h1}>BEM VINDO(A) !</h1>
                    <img src={pawsImage} className={Styles.img} alt='pa image'/>
                </div>
                <input
                    type="text"
                    {...register('login')}
                />
                {errors.login && <span>{errors.login.message}</span>}

                <input
                    type="password"
                    {...register('password')}
                />
                {errors.password && <span>{errors.password.message}</span>}

                <button type="submit">Login</button>
            </form>    
        </div>
    );
};

export default LoginForm;
