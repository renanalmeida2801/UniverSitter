// import api from '../../services/api';
import styles from './InfoSitter.module.css'
import Sitter from '../Layout/info-sitter/Sitter';
import SitterDescription from '../Layout/info-sitter/SitterDescription';
import SitterReviews from '../Layout/info-sitter/SitterReviews';

const getSitter = (id) => {
    // const sitter = api.get('/sitter/:id', id)
}

function InfoSitter() {


    return (
        <div>
            <Sitter />
            <SitterDescription />
            <SitterReviews />
        </div>
    )
}

export default InfoSitter;