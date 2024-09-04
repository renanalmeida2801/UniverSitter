import { useState, useEffect, useCallback } from "react"
import api from "../../services/api.ts"
import Card from "../Layout/Card.js"

import Styles from './FindSitter.module.css'

const FindSitter = () => {
  const [data, setData] = useState([
    {
      name: "Luigy",
      rating: 5,
      sitterType: ["Pet", "Plant"],
      descricao: "Aauwdhu dhawdhu awhdawhd a\wdhuawdhuawhdhawudhawidhuawiduawhduawh iuahd uiahwdiuahdiuawhidhawiudhawidaw udgawugawudgaWDUAWDGYAWYGDAWYDGAWDGYGYUGDADGYGYduaydwyawdgyuwagywdgyd gayudgyuawgd awyd gyadygawydwaydgay dyguagywdgyuagdagdaufiajofaofjaiofuiawhdyuwgduqgdahdjka dgaydgahdgasjdgaydygajwydgjadgajdyg",
      img: 'data:image/jpeg;base64,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',
      category: 0
    },
    {
      name: "Uila",
      rating: 3,
      sitterType: ["Pet", "Plant"],
      descricao: "A",
      img: 'https://www.vetorbrasil.org/wp-content/uploads/2023/06/denis-silva-promocao-de-pessoas-2-980x432.jpg',
      category: 1
    },
    {
      name: "Jairo",
      rating: 4.5,
      sitterType: ["Pet", "Plant"],
      descricao: "A",
      img: 'https://static1.minhavida.com.br/articles/64/fe/df/e8/mediabox-pessoas-sempre-insatisfeitas-orig-1.jpg',
      category: 2
    }
  ])

  // useCallback(async () => {
  //   api.get('/sitters').then(
  //     setData(data)
  //   )
  // })

  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Veja alguns dos nossos cuidadores!</h1>
      <div className={Styles.sittersContainer}>
        {data.map((item) => {
          return <Card height='200px' width='400px' {...item} />
        })}
      </div>
    </div>
  )
}


export default FindSitter
