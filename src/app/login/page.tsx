"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginRoute } from "@/routes/authRoutes"; // 👈 Correcto, llamamos a la RUTA

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = loginRoute({ username, password });

      if (response.success && response.data) {
        router.push(
          `/welcome?name=${encodeURIComponent(response.data.fullName)}&ticket=${
            response.data.ticketNumber
          }`
        );
      } else {
        setError(response.message || "Usuario o contraseña incorrectos.");
      }
    } catch {
      setError("Ocurrió un error al procesar tu solicitud.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-2">
          Registro de Visitantes
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Ingresa tu usuario y contraseña
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Usuario
            </label>
            <input
              type="text"
              placeholder="Tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            Ingresar
          </button>

          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}
