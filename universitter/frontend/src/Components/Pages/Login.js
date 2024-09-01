// import { useAuth } from '../../Contexts/AuthContext';
import LoginForm from "../Form/LoginForm";
import Styles from "./Login.module.css";

function Login(){
    return(
        <div className={Styles.container}>
            <LoginForm />
        </div>
    );
}

export default Login;