import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation côté client
    if (!email || !password) {
      setErrors("Please fill in all fields.");
      return;
    }

    // Exemple de logique de connexion (à remplacer par votre propre logique)
    const fakeLogin = { email: "test@example.com", password: "password123" };
    if (email === fakeLogin.email && password === fakeLogin.password) {
      navigate("/dashboard"); // Remplacez par la redirection souhaitée après la connexion
    } else {
      setErrors("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md flex">
        {/* Colonne gauche avec l'image */}
        <div className="w-1/2">
          <img src="../../assets/5.jpg" alt="Login" className="w-full h-full object-cover rounded-l-lg" />
        </div>

        {/* Colonne droite avec le formulaire */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-semibold mb-4"  style={{ color: "#006d77" }}>LogIn</h2>
          <p className="text-muted mb-6">Login into your account</p>

          {/* Zone des erreurs */}
          {errors && <div className="text-red-500 mb-4">{errors}</div>}

          <form onSubmit={handleSubmit} autoComplete="off">
            {/* Champ Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 "
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Champ Mot de passe */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 "
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Bouton de connexion */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full p-3  text-white font-semibold rounded-md shadow-md " style={{ backgroundColor: "#006d77" }}
              >
                LogIn
              </button>
            </div>

            {/* Lien vers la page d'inscription */}
            <div className="text-center">
              <span className="text-sm">Don't have an account?</span>
              <a href="/register" className="text-sm  hover:underline ml-1" style={{ color: "#006d77" }}>
                Register here
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
