import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);
  const navigate = useNavigate();

  const login = (newToken, newAdminData) => {
    localStorage.setItem('accesToken', newToken);
    setToken(newToken);
    setAdminData(newAdminData);
    navigate('/dashboard');
  };

  const logout = () => {
    localStorage.removeItem('accesToken');
    localStorage.removeItem('adminData');
    setToken(null);
    setAdminData(null);
    navigate('/login');
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, adminData, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
