export function filterTasks(tasks, query, filterBy) {
  let filtered = tasks;

  // Filtrar por estado
  if (filterBy === 'completed') {
    filtered = filtered.filter(t => t.completed);
  } else if (filterBy === 'pending') {
    filtered = filtered.filter(t => !t.completed);
  }

  // Filtrar por búsqueda de texto
  const q = query.trim().toLowerCase();
  if (q) {
    filtered = filtered.filter(t =>
      t.author.toLowerCase().includes(q) || t.text.toLowerCase().includes(q)
    );
  }

  return filtered;
}