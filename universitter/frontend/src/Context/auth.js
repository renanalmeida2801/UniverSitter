import { createContext, useEffect, useState } from "react";
import api from '../services/api.ts';

export const AuthContext = createContext({
  user: null,
  signin: () => Promise.resolve(),
  logout: () => { },
  setLogout: () => { }
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");

    if (userToken) {
      const tokenData = JSON.parse(userToken);
      // Optionally validate token with the server here
      setUser({ email: tokenData.email }); // Simplified example; adjust as needed
    }
  }, []);

  const signin = async ({ email, senha }) => {
    try {
      const response = await api.post('/login', { email, password: senha });
      const token = response.data.token;
      const userData = response.data.user;

      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set token for all following requests
        localStorage.setItem("user_token", JSON.stringify(token));
        setUser(userData); // Update user state with received user data
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } catch (error) {
      console.error('Error during login:', error);
      return "E-mail ou senha inválidos. Por favor, tente novamente.";
    }
  };

  const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem("user_token");

    // Optionally, make a request to invalidate the token on the server

    // Clear user state
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
