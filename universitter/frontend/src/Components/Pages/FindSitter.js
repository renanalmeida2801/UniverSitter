import { useState, useEffect, useCallback } from "react"
import api from "../../services/api.ts"
import Card from "../Layout/Card.js"

import Styles from './FindSitter.module.css'

const FindSitter = () => {
  const [data, setData] = useState([
    {
      name: "Luigy",
      starLevel: 5,
      sitterType: ["Pet", "Plant"],
      descricao: "A"
    },
    {
      name: "Luigy",
      starLevel: 5,
      sitterType: ["Pet", "Plant"],
      descricao: "A"
    },
    {
      name: "Luigy",
      starLevel: 5,
      sitterType: ["Pet", "Plant"],
      descricao: "A"
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
