import React, { useState } from 'react'

export default function TodoForm({ onAdd, currentUser }) {
  const [text, setText] = useState('')

  function submit(e) {
    e.preventDefault()
    const t = text.trim()
    if (!t) return
    onAdd({ text: t, author: currentUser })
    setText('')
  }

  return (
    <form
      onSubmit={submit}
      className="flex gap-2 mb-4 bg-pink-50 p-4 rounded-xl shadow-md border border-pink-100"
    >
      <input
        data-testid="todo-input"
        className="flex-1 p-2 rounded-lg border border-pink-200
                   focus:outline-none focus:ring-2 focus:ring-pink-300
                   placeholder-gray-400"
        placeholder="Nueva tarea..."
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button
        data-testid="add-btn"
        type="submit"
        className="px-4 py-2 bg-pink-400 text-white rounded-lg font-semibold
                   hover:bg-pink-500 transition"
      >
        Añadir
      </button>
    </form>
  )
}
