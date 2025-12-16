import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onToggle, onDelete, onEdit }) {
  if (!todos.length)
    return (
      <div className="text-center text-pink-400 italic">
        No hay tareas aún.
      </div>
    )

  return (
    <div className="flex flex-col gap-3">
      {todos.map(t => (
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}
