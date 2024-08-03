import styles from './UserForm.module.css'




function UserForm({btnText}){
    return(
        <div className={styles.container}>
            <form className={styles.form} >
            <h3>Cadastre-se</h3>
                <input type="text" name="nome" placeholder="Nome" className={styles.fieldtext}></input>
                <input type="text" name="sobrenome" placeholder="Sobrenome" className={styles.fieldtext}></input><br/>
                <input type="text" name="telefone" placeholder="Telefone" className={styles.fieldtext}></input><br/>
                <input type="email" name="email" placeholder="Email" className={styles.fieldtext}></input><br/>
                <input type="password" name="senha" placeholder="Senha" className={styles.fieldtext}></input><br/>

                <div className={styles.terms_container}>
                    <input type="checkbox" name="termos" className={styles.checkbox}></input>
                    <label for="termos" className={styles.checkbox_label}>Eu li e aceito os termos</label>
                </div>
                <br/><button type="submit" value="submit">Cadastrar-se</button>
            </form>
        </div>
    )
}

export default UserForm;