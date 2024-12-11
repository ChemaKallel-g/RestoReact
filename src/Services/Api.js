

import axios from 'axios';

// Créez une instance d'axios pour personnaliser les paramètres
const api = axios.create({
  baseURL: 'https://votre-api-url.com',  // Remplacez par votre base URL
  timeout: 5000,  // Timeout de 5 secondes
  headers: {
    'Content-Type': 'application/json',
  },
});

// Vous pouvez aussi ajouter des intercepteurs si nécessaire
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('CC_Token'); // Récupérer le token si nécessaire
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Ajouter le token dans les headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
