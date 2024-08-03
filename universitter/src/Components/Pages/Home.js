import UserForm from "../Form/UserForm";

import Styles from './Home.module.css'


function Home(){
    return(
        <div className={Styles.body}>
            <UserForm btnText="Cadastrar-se"></UserForm>
        </div>
    )
}

export default Home;