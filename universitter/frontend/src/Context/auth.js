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
        user => user.email === JSON.parse(userToken).email
      )
      if (hasUser) setUser(hasUser[0])
    }
  }, [])

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"))

    const hasUser = usersStorage?.filter((user) => user.email === email)

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, password })
        return;
      } else {
        return "E-mail ou senha incorretos"
      }
    } else {
      return "Usuário não cadastrado"
    }
  }

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
