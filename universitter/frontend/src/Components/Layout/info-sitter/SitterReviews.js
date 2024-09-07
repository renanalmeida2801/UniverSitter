import ReviewComp from './ReviewComp';
import Styles from './SitterReviews.module.css'

function SitterReviews() {
    return (
        <div className={Styles.container}>
            <h1>Avaliações</h1>
            <ReviewComp />
        </div>
    );
}

export default SitterReviews;