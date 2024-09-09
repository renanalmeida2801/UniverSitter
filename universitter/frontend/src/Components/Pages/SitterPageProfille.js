import Sitter from '../Layout/InfoSitter/Sitter';
import SitterDescription from '../Layout/InfoSitter/SitterDescription';
import SitterReviews from '../Layout/InfoSitter/SitterReviews';
import Styles from './SitterPageProfille.module.css'
import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import api from "../../services/api.ts";
import MyProfilleSitter from '../Layout/MyProfilleSitter.js';

function SitterPageProfille() {
  const params = useParams()
  const [data, setData] = useState({});
  const [review, setReview] = useState({});

  const loadSitter = async () => {
    const userInfo = localStorage.getItem("user_token")
    const {email} = JSON.parse(userInfo)
    try {
        const resp = await api.get(`/users/${email}`);
        const id = resp.data.data.user_id
        const response = await api.get(`/sitterByUserId/${id}`);
        console.log(response.data.data)
        setData(response.data.data)
        loadfeedbacks()
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  const loadfeedbacks = async () => {
    try {
        const response = await api.get(`/feedback/${data.sitter_id}`);
        setReview(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    loadSitter();
  }, []);

  // Carrega os feedbacks assim que o sitter_id estiver disponível
  useEffect(() => {
    if (data.sitter_id) {
      loadfeedbacks(data.sitter_id);
    }
  }, [data.sitter_id]);



  return (
    <div className={Styles.container}>
      <MyProfilleSitter sitterName={data.nome} sitterLastName={data.sobrenome} sitterRating={data.rating} sitterImage={data.foto} sitterCategory={data.categoria} sitterAddress={data.endereco} />
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

export default SitterPageProfille;
