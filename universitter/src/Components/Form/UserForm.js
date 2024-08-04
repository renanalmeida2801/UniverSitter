import styles from './UserForm.module.css'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { Link } from 'react-router-dom';

async function post(data) {
    try {
        const response = await axios.post('http://localhost:3300/register', data);
        console.log('Resposta do servidor:', response.data);
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
    }
}

const onSubmit = (e) => {
    post(e);
    console.log(e)
}

function UserForm({btnText}){
    const { register, handleSubmit } = useForm();
    return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
            <h3>Cadastre-se</h3>
                <input type="text" {...register("nome")} placeholder="Nome" className={styles.fieldtext}></input>
                <input type="text" {...register("sobrenome")} placeholder="Sobrenome" className={styles.fieldtext}></input><br/>
                <input type="text" {...register("telefone")} placeholder="Telefone" className={styles.anothertext}></input><br/>
                <input type="email" {...register("email")} placeholder="Email" className={styles.anothertext}></input><br/>
                <input type="password" {...register("senha")} placeholder="Senha" className={styles.anothertext}></input><br/>

                <div className={styles.terms_container}>
                    <input type="checkbox" name="termos" className={styles.checkbox}></input>
                    <label htmlFor="termos" className={styles.checkbox_label}>Eu li e concordo com os termos e condições de uso e política de privacidade</label>
                </div>
                <br/><button type="submit" value="submit">Cadastrar-se</button><br></br>
                <div className={styles.container}>
                  <Link className={styles.link} to='/help'><u>Já tenho cadastro!</u></Link>
                </div>
            </form>
        </div>
    )
}

export default UserForm;