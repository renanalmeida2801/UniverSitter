import { createContext, useEffect, useState } from "react";
import api from '../services/api.ts'

export const AuthContext = createContext({})
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [existEmail, setExistEmail] = useState(false)

  useEffect(() => {
    const userToken = localStorage.getItem("user_token")
    const userStorage = localStorage.getItem("users_db")

    if (userToken && userStorage) {
      const hasUser = JSON.parse(userStorage)?.filter(
        user => user.email === JSON.parse(userStorage).email
      )
    }
  })

  async function findEmail(email) {
    setExistEmail(await api.get('user/findUserEmail', {
      params: {
        email
      }
    }).then(e => e.data.data === null ? false : true))

    return <AuthContext.Provider>{children}</AuthContext.Provider >
  }
}


export default AuthContext
