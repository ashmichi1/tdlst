# 📝 Todo List Application

Una aplicación moderna de lista de tareas construida con React y Tailwind CSS.

## ✨ Características

- ✅ Crear, editar y eliminar tareas
- 🔐 Sistema de autenticación con login
- 🎨 Interfaz moderna y responsiva
- 💾 Persistencia de datos
- 🌈 Diseño limpio con Tailwind CSS

## 🚀 Tecnologías Utilizadas

- **React** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS para diseño
- **JavaScript (ES6+)** - Lenguaje de programación

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## 🔧 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/ashmichi1/tdlst.git
   cd tdlst
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   
   Visita `http://localhost:5173` para ver la aplicación

## 📁 Estructura del Proyecto

```
Frontend/
├── src/
│   ├── components/
│   │   ├── Login.jsx          # Componente de inicio de sesión
│   │   ├── TodoForm.jsx        # Formulario para crear tareas
│   │   ├── TodoItem.jsx        # Componente individual de tarea
│   │   └── TodoList.jsx        # Lista de todas las tareas
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos globales
├── public/                     # Archivos públicos
├── index.html                  # HTML principal
├── tailwind.config.cjs         # Configuración de Tailwind
├── vite.config.js              # Configuración de Vite
└── package.json                # Dependencias del proyecto
```

## 🎯 Uso

1. **Iniciar sesión**: Ingresa tus credenciales en la pantalla de login
2. **Agregar tarea**: Escribe una nueva tarea y presiona "Agregar"
3. **Marcar como completada**: Haz clic en la tarea para marcarla como completada
4. **Editar tarea**: Usa el botón de editar para modificar una tarea existente
5. **Eliminar tarea**: Usa el botón de eliminar para remover una tarea

## 📦 Scripts Disponibles

```bash
# Inicia el servidor de desarrollo
npm run dev

# Construye la aplicación para producción
npm run build

# Previsualiza la build de producción
npm run preview

# Lint del código
npm run lint
```

## 🛠️ Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto (si es necesario):

```env
VITE_API_URL=tu_url_de_api
```

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Ashly Michelle Garcia Vasquez**
**Jehimy Vanessa Hernandez Rodriguez**
- GitHub: [@ashmichi1](https://github.com/ashmichi1)
- Repositorio Frontend: [todo-list](https://github.com/ashmichi1/todo-list)
- Repositorio Completo: [tdlst](https://github.com/ashmichi1/tdlst)

