import React, { useState } from 'react';

import Login from '../../components/authentification/Login'; // Composant pour le formulaire de connexion

const LoginPage = () => {
  return (
    <div>
      <div className="login-page-container flex items-center justify-center py-20">
        <Login /> {/* Composant pour le formulaire de connexion */}
      </div>
    </div>
  );
};

export default LoginPage;
