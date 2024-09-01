import { useState, useEffect, useCallback } from "react"
import api from "../../services/api.ts"

import Styles from './FindSitter.module.css'

const FindSitter = () => {
  const [data, setData] = useState([
    {
      name: "Luigy",
      starLevel: 5,
      sitterType: ["Pet", "Plant"],
      desc: "A lovely mother fucker"
    }
  ])

  // useCallback(async () => {
  //   api.get('/sitters').then(
  //     setData(data)
  //   )
  // })

  return (
    <div className={Styles.container}>
      <h1>Veja alguns dos nossos cuidadores!</h1>
      <div className={Styles.sittersContainer}>
      </div>
    </div>
  )
}


export default FindSitter
