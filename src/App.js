import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './Routes/routes'; // Importer les routes configurées
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import { CartProvider } from "./Context/CartContext";
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Exemple de vérification de l'authentification
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      setIsAuthenticated(true);
    }
  }, []);
  const handleLogout = () => {
    setIsAuthenticated(false);  // Set userAuthenticated to false on logout
    // Additional logout logic here, e.g., removing tokens
  };

  return (
    <CartProvider>
    <Router>
    <Header userAuthenticated={isAuthenticated} userAvatar="./assets/avatar.avif" onLogout={handleLogout}  />


      <main role="main">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}>
              {route.children &&
                route.children.map((child, childIndex) => (
                  <Route key={childIndex} path={child.path} element={child.element} />
                ))}
            </Route>
          ))}
        </Routes>
      </main>

      <Footer />
    </Router>
    </CartProvider>
  );
};

export default App;
