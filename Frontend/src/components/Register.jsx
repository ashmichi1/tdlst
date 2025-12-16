import { useState } from 'react'

export default function Register({ onRegisterSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleRegister(e) {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem('team:users')) || []

    const exists = users.some(u => u.email === email)
    if (exists) {
      alert('El usuario ya existe')
      return
    }

    users.push({ email, password })
    localStorage.setItem('team:users', JSON.stringify(users))

    alert('Registro exitoso')
    onRegisterSuccess()
  }

  return (
    <form
      onSubmit={handleRegister}
      className="max-w-sm mx-auto mt-20 bg-pink-50 p-8 rounded-xl shadow-lg border border-pink-100"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">
        Registro
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 mb-4 rounded-lg border border-pink-200
                   focus:outline-none focus:ring-2 focus:ring-pink-300
                   placeholder-gray-400"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Contraseña"
        className="w-full p-3 mb-5 rounded-lg border border-pink-200
                   focus:outline-none focus:ring-2 focus:ring-pink-300
                   placeholder-gray-400"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button
        className="w-full bg-pink-400 text-white p-3 rounded-lg font-semibold
                   hover:bg-pink-500 transition"
      >
        Registrarse
      </button>
    </form>
  )
}
