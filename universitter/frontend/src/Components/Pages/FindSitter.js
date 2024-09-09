import { useState, useEffect } from "react";
import api from "../../services/api.ts";
import Card from "../Layout/Card.js";

import Styles from './FindSitter.module.css';

const FindSitter = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const response = await api.get('/sittersComplete');
      setData(response.data.sitters)
      console.log(response.data.sitters)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Veja alguns dos nossos cuidadores!</h1>
      <div className={Styles.sittersContainer} style={{ flexWrap: "nowrap" }}>
        {data && data.map((item) => (
          <Card height="200px" width="400px" {...item} key={item.sitter_id} /> // Add a unique key for each item
        ))}
      </div>
    </div>
  );
};

export default FindSitter;
