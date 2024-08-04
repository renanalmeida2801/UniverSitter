import { useState } from 'react';
import InputInfos1 from './InputInfos1';
import styles from './UserForm.module.css'
import InputInfos2 from './InputInfos2';
import { Link } from 'react-router-dom';
// const { insert } = require('../../config/db')
// const { insert } = '../../config/db';
// import { insert } from '../../config/db';

function UserForm({ btnText }) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [telefone, setTelefone] = useState("");

    const handleChangeName = (event) => {
        setNome(event.target.value);
    };
    const handleChangeSobrenome = (event) => {
        setSobrenome(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangeTelefone = (event) => {
        setTelefone(event.target.value);
    };
    const handleChangeSenha = (event) => {
        setSenha(event.target.value);
    };

    const submit = (event) => {
        event.preventDefault();
        const data = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha,
            telefone: telefone
        }
        // console.log(insert)
        console.log(nome, sobrenome, email, senha, telefone)
    }


    return (
        <div className={styles.container}>
            <form className={styles.form} >
                <h3>Cadastre-se</h3>

                {/* <InputInfos1 type="text" name="nome" placeholder="Nome" value={nome} onChange={handleChangeName} />
                <InputInfos1 type="text" name="sobrenome" placeholder="Sobrenome" value={sobrenome} onChange={handleChangeSobrenome} />
                <InputInfos2 type="text" name="telefone" placeholder="Telefone" value={telefone} onChange={handleChangeTelefone} />
                <InputInfos2 type="email" name="email" placeholder="Email" value={email} onChange={handleChangeEmail} />
                <InputInfos2 type="password" name="senha" placeholder="Senha" value={senha} onChange={handleChangeSenha} /> */}
                <input type="text" name="nome" placeholder="Nome" className={styles.fieldtext}></input>
                <input type="text" name="sobrenome" placeholder="Sobrenome" className={styles.fieldtext}></input><br />
                <input type="text" name="telefone" placeholder="Telefone" className={styles.anothertext}></input><br />
                <input type="email" name="email" placeholder="Email" className={styles.anothertext}></input><br />
                <input type="password" name="senha" placeholder="Senha" className={styles.anothertext}></input><br />

                <div className={styles.terms_container}>
                    <input type="checkbox" name="termos" className={styles.checkbox}></input>
                    <label htmlFor="termos" className={styles.checkbox_label}>Eu li e concordo com os termos e condições de uso e política de privacidade</label>
                </div>
                <br /><button type="submit" value="submit" onClick={submit}>Cadastrar-se</button><br></br>
                <div className={styles.container}>
                    <Link className={styles.link} to='/help'><u>Já tenho cadastro!</u></Link>
                </div>
            </form>
        </div>
    )
}

export default UserForm;