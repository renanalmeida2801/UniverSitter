import Sitter from '../Layout/InfoSitter/Sitter';
import SitterDescription from '../Layout/InfoSitter/SitterDescription';
import SitterReviews from '../Layout/InfoSitter/SitterReviews';
import Styles from './InfoSitter.module.css'
import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import api from "../../services/api.ts";

function InfoSitter() {
    const params = useParams()
    const [data, setData] = useState({});
    const [review, setReview] = useState({});

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

    useEffect(() => {
        loadSitter();
        loadfeedbacks();
        console.log("CHamou")
        // console.log(data)
    }, []);



    return (
        <div className={Styles.container}>
            <Sitter sitterName={data.nome} sitterLastName={data.sobrenome} sitterRating={Number(data.rating).toPrecision(1)} sitterImage={data.foto} sitterCategory={data.categoria} sitterAddress={data.endereco} />
            <SitterDescription sitterDescription={data.descricao} />
            <h1 className={Styles.container_h1}>Avaliações</h1>
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
