import React, { useState } from 'react';
import Header from '../../components/Common/Header'; // Assurez-vous que le chemin est correct
import Footer from '../../components/Common/Footer'; // Assurez-vous que le chemin est correct
import Register from '../../components/authentification/Register'; // Composant pour le formulaire de connexion

const RegisterPage = () => {
  return (
    <div>
      <div className="login-page-container flex items-center justify-center py-20">
        <Register /> {/* Composant pour le formulaire de connexion */}
      </div>
    </div>
  );
};

export default RegisterPage;
