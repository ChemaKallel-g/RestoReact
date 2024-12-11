import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation côté client
    if (!name || !address || !email || !password) {
      setErrors("Please fill in all fields.");
      return;
    }

    // Exemple de logique d'enregistrement (à remplacer par votre propre logique)
    const fakeRegister = { name: "John Doe", email: "john@example.com" };
    if (email === fakeRegister.email && name === fakeRegister.name) {
      navigate("/login"); // Redirige vers la page de connexion après enregistrement réussi
    } else {
      setErrors("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full  flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md flex">
        {/* Colonne gauche avec l'image */}
        <div className="w-1/2">
          <img
            src="../../assets/4.jpg"
            alt="Tacos"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Colonne droite avec le formulaire */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-semibold  mb-4" style={{ color: "#006d77" }}>Register</h2>
          <p className="text-muted mb-6">Create your account</p>

          {/* Zone des erreurs */}
          {errors && <div className="text-red-500 mb-4">{errors}</div>}

          <form onSubmit={handleSubmit} autoComplete="off">
            {/* Champ Nom */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Champ Adresse */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                id="address"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

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

            {/* Bouton d'inscription */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full p-3  text-white font-semibold rounded-md shadow-md " style={{ backgroundColor: "#006d77" }}
              >
                Register
              </button>
            </div>

            {/* Lien vers la page de connexion */}
            <div className="text-center">
              <span className="text-sm">Already have an account?</span>
              <a href="/account/login" className="text-sm  hover:underline ml-1" style={{ color: "#006d77" }}>
                Log in here
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
