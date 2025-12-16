import React, { useState } from 'react'

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(todo.text)

  function save() {
    const v = value.trim()
    if (!v) return
    onEdit(todo.id, v)
    setEditing(false)
  }

  return (
    <div
      className="p-4 border border-pink-100 bg-pink-50 rounded-xl shadow-sm flex items-start gap-3"
      data-testid={`todo-${todo.id}`}
    >
      <input
        type="checkbox"
        checked={!!todo.completed}
        onChange={() => onToggle(todo.id)}
        data-testid={`toggle-${todo.id}`}
        className="accent-pink-400 mt-1"
      />

      <div className="flex-1">
        <div className="text-xs text-pink-500 mb-1">
          Creado por: <strong>{todo.author}</strong>
        </div>

        {!editing ? (
          <div
            className={`text-base ${
              todo.completed
                ? 'line-through text-gray-400'
                : 'text-gray-700'
            }`}
          >
            {todo.text}
          </div>
        ) : (
          <div className="flex gap-2 mt-1">
            <input
              value={value}
              onChange={e => setValue(e.target.value)}
              className="flex-1 p-2 rounded-lg border border-pink-200
                         focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button
              onClick={save}
              className="px-3 py-1 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition"
              data-testid={`save-${todo.id}`}
            >
              Guardar
            </button>
          </div>
        )}

        <div className="mt-3 flex gap-2">
          <button
            onClick={() => setEditing(v => !v)}
            className="px-3 py-1 bg-pink-200 text-pink-700 rounded-lg hover:bg-pink-300 transition"
            data-testid={`edit-${todo.id}`}
          >
            {editing ? 'Cancelar' : 'Editar'}
          </button>

          <button
            onClick={() => onDelete(todo.id)}
            className="px-3 py-1 bg-rose-400 text-white rounded-lg hover:bg-rose-500 transition"
            data-testid={`delete-${todo.id}`}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}
