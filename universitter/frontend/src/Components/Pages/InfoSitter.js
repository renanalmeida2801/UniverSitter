
import styles from './InfoSitter.module.css'
import Sitter from '../Layout/Sitter';
import SitterDescription from '../Layout/SitterDescription';
import SitterReviews from '../Layout/SitterReviews';


function InfoSitter(){
    return(
        <div>
            <Sitter/>
            <SitterDescription/>
            <SitterReviews/>
        </div>
    )
}

export default InfoSitter;