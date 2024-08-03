import styles from './UserForm.module.css'

import { Link } from 'react-router-dom';


function UserForm({btnText}){
    return(
        <div className={styles.container}>
            <form className={styles.form} >
            <h3>Cadastre-se</h3>
                <input type="text" name="nome" placeholder="Nome" className={styles.fieldtext}></input>
                <input type="text" name="sobrenome" placeholder="Sobrenome" className={styles.fieldtext}></input><br/>
                <input type="text" name="telefone" placeholder="Telefone" className={styles.anothertext}></input><br/>
                <input type="email" name="email" placeholder="Email" className={styles.anothertext}></input><br/>
                <input type="password" name="senha" placeholder="Senha" className={styles.anothertext}></input><br/>

                <div className={styles.terms_container}>
                    <input type="checkbox" name="termos" className={styles.checkbox}></input>
                    <label for="termos" className={styles.checkbox_label}>Eu li e concordo com os termos e condições de uso e política de privacidade</label>
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