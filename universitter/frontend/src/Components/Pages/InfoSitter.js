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

  const loadSitter = async () => {
    try {
      const response = await api.get(`/sitters/${params.id}`);
      setData(response.data.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    loadSitter();
    console.log("CHamou")
    console.log(data)
  }, []);


  return (
    <div className={Styles.container}>
      <Sitter sitterName={data.nome} sitterRating={Number(data.rating).toPrecision(1)} sitterImage={data.foto} sitterCategory={data.categoria} sitterAddress={data.endereco} />
      <SitterDescription />
      <SitterReviews />
    </div>
  )
}

export default InfoSitter;
