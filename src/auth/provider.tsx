import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: any) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  // Se o usuário não estiver autenticado, redireciona para a página de login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}