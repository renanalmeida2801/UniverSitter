import Sitter from '../Layout/InfoSitter/Sitter';
import SitterDescription from '../Layout/InfoSitter/SitterDescription';
import SitterReviews from '../Layout/InfoSitter/SitterReviews';
import Styles from './InfoSitter.module.css'
import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import Popup from '../Extras/Popup'; // Importa o componente Popup
import api from "../../services/api.ts";

function InfoSitter() {
    const params = useParams()
    const [data, setData] = useState({});
    const [review, setReview] = useState({});

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const loadSitter = async () => {
        try {
            const response = await api.get(`/sitters/${params.id}`);
            setData(response.data.data)
            //   console.log(response)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const loadfeedbacks = async () => {
        try {
            const response = await api.get(`/feedback/${params.id}`);
            setReview(response.data)
            console.log(response)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    const avaliar = async (info) => {
        info = {...info, sitter_id: Number(params.id)}
        try {
            const response = await api.post(`/feedback`, info);
            console.log(response)
            loadfeedbacks()
            loadSitter()
            setIsPopupOpen(false)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        loadSitter();
        loadfeedbacks();
        rattingSitter();
        // console.log(data)
    }, []);

    const rattingSitter = () => {
        var ratingSitter = 0;
        var aux = 0
        {
            review.data && review.data.map((item) => {
                ratingSitter += item.rating
                aux++
            })
        }
        console.log('nota:' + ratingSitter)
        console.log('aux:' + aux)
    }


    return (
        <div className={Styles.container}>
            <Sitter sitterName={data.nome} sitterLastName={data.sobrenome} sitterRating={Number(data.rating).toPrecision(1)} sitterImage={data.foto} sitterCategory={data.categoria} sitterAddress={data.endereco} />
            <SitterDescription sitterDescription={data.descricao} />
            <div className={Styles.feedback}>
                <h1 className={Styles.container_h1}>Avaliações</h1>
                <button className={Styles.avaliar} onClick={openPopup}>+</button>

            </div>
            <div>
                <Popup callback={avaliar} isOpen={isPopupOpen} onClose={closePopup}>
                </Popup>
            </div>
            <div className={Styles.commentContainer}>
                {review.data && review.data.map((item) => (

                    <SitterReviews sitterComment={item.comment} reviewDate={item.date} reviewRating={item.rating} userName={item.nome} sitterImg={item.foto} />
                    // Add a unique key for each item
                ))}
            </div>
        </div>
    )
}

export default InfoSitter;
