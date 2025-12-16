import { useState } from 'react'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onLogin(email, password)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-20 bg-pink-50 p-8 rounded-xl shadow-lg border border-pink-100"
    >
      <h2 className="text-xl font-bold mb-4 text-center text-pink-600">
        Iniciar sesión
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-3 rounded-lg border border-pink-200
                   focus:outline-none focus:ring-2 focus:ring-pink-300
                   placeholder-gray-400"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Contraseña"
        className="w-full p-2 mb-4 rounded-lg border border-pink-200
                   focus:outline-none focus:ring-2 focus:ring-pink-300
                   placeholder-gray-400"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button
        className="w-full bg-pink-400 text-white p-2 rounded-lg font-semibold
                   hover:bg-pink-500 transition"
      >
        Entrar
      </button>

      {/* Redirección a registro */}
      <p className="text-sm text-center mt-4 text-pink-600">
        ¿No tienes cuenta?{' '}
        <span
          onClick={() => window.location.href = '/registro'}
          className="text-pink-600 cursor-pointer hover:underline font-medium"
        >
          Crear cuenta
        </span>
      </p>
    </form>
  )
}
