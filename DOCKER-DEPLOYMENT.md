# 🐳 Guía de Despliegue con Docker

Documentación completa para desplegar el proyecto Todo List usando Docker.

## 📋 Prerequisitos

### 1. Instalar Docker Desktop

**Windows:**
- Descarga: [Docker Desktop para Windows](https://www.docker.com/products/docker-desktop)
- Requisitos: Windows 10/11 de 64 bits, WSL 2 habilitado
- Ejecuta el instalador y reinicia tu PC

**Mac:**
- Descarga: [Docker Desktop para Mac](https://www.docker.com/products/docker-desktop)
- Compatible con Intel y Apple Silicon (M1/M2)

**Linux:**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

### 2. Verificar instalación

```bash
docker --version
# Debería mostrar: Docker version 24.x.x

docker-compose --version
# Debería mostrar: Docker Compose version v2.x.x
```

---

## 🚀 Despliegue Rápido (3 pasos)

### Paso 1: Clonar el repositorio
```bash
git clone https://github.com/ashmichi1/tdlst.git
cd tdlst
```

### Paso 2: Construir las imágenes
```bash
docker-compose build
```

### Paso 3: Iniciar los contenedores
```bash
docker-compose up -d
```

✅ **¡Listo!** Abre http://localhost:3000 en tu navegador

---

## 📁 Estructura de Archivos Docker

Tu proyecto debe tener esta estructura:

```
tdlst/
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile          # ← Instrucciones para construir la imagen
│   ├── nginx.conf          # ← Configuración del servidor web
│   ├── .dockerignore       # ← Archivos que Docker ignora
│   ├── package.json
│   └── vite.config.js
├── Backend/  (opcional)
│   └── Dockerfile
├── docker-compose.yml      # ← Orquestación de servicios
├── DOCKER-DEPLOYMENT.md    # ← Esta guía
└── README.md
```

---

## 🔧 Configuración Detallada

### Variables de Entorno

Si tu aplicación necesita variables de entorno, tienes 2 opciones:

**Opción 1: Directamente en docker-compose.yml**
```yaml
services:
  frontend:
    environment:
      - VITE_API_URL=http://localhost:5000/api
      - VITE_APP_NAME=Todo List
```

**Opción 2: Archivo .env (recomendado)**

Crea un archivo `.env` en la raíz:
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Todo List
NODE_ENV=production
```

Luego en `docker-compose.yml`:
```yaml
services:
  frontend:
    env_file:
      - .env
```

---

## 📝 Comandos Esenciales

### Gestión Básica

```bash
# Iniciar todos los servicios
docker-compose up -d

# Iniciar y ver logs en tiempo real
docker-compose up

# Detener todos los servicios
docker-compose stop

# Detener y eliminar contenedores
docker-compose down

# Reiniciar todos los servicios
docker-compose restart

# Reiniciar un servicio específico
docker-compose restart frontend
```

### Ver Información

```bash
# Ver contenedores en ejecución
docker-compose ps

# Ver logs de todos los servicios
docker-compose logs

# Ver logs de un servicio específico
docker-compose logs frontend

# Ver logs en tiempo real
docker-compose logs -f

# Ver logs de las últimas 100 líneas
docker-compose logs --tail=100
```

### Construcción y Actualización

```bash
# Reconstruir las imágenes
docker-compose build

# Reconstruir sin usar caché
docker-compose build --no-cache

# Reconstruir y reiniciar
docker-compose up -d --build

# Reconstruir solo el frontend
docker-compose build frontend
```

### Acceso y Debugging

```bash
# Entrar al contenedor del frontend
docker-compose exec frontend sh

# Ejecutar comandos dentro del contenedor
docker-compose exec frontend ls -la /usr/share/nginx/html

# Ver uso de recursos
docker stats

# Inspeccionar un contenedor
docker inspect todo-frontend
```

### Limpieza

```bash
# Eliminar contenedores y redes
docker-compose down

# Eliminar contenedores, redes y volúmenes
docker-compose down -v

# Limpiar imágenes sin usar
docker system prune

# Limpiar TODO (¡cuidado!)
docker system prune -a --volumes
```

---

## 🌐 Acceso a la Aplicación

Una vez desplegado, accede a:

- **Frontend (React)**: http://localhost:3000
- **Backend (API)**: http://localhost:5000 (si existe)
- **MongoDB**: mongodb://localhost:27017 (si existe)

---

## 🔍 Solución de Problemas

### ❌ El contenedor no inicia

**Ver logs para identificar el error:**
```bash
docker-compose logs frontend
```

**Errores comunes:**
- Puerto ya en uso → Cambia el puerto en `docker-compose.yml`
- Falta node_modules → Se instala automáticamente, espera a que termine el build
- Error en el código → Revisa los logs del contenedor

### ❌ Puerto 3000 ya está en uso

**Ver qué proceso usa el puerto:**
```bash
# Windows
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :3000
```

**Solución 1: Cambiar el puerto**
En `docker-compose.yml`:
```yaml
ports:
  - "3001:80"  # Cambia 3000 por 3001
```

**Solución 2: Liberar el puerto**
```bash
# Windows
taskkill /PID <número_del_proceso> /F

# Linux/Mac
kill -9 <PID>
```

### ❌ Error de construcción

```bash
# Limpiar caché y reconstruir
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### ❌ Cambios en el código no se reflejan

Docker cachea las imágenes. Para ver los cambios:

```bash
# Reconstruir la imagen
docker-compose up -d --build
```

### ❌ No se puede conectar al backend

Verifica que:
1. El backend esté corriendo: `docker-compose ps`
2. La URL en el frontend sea correcta: `http://localhost:5000/api`
3. Ambos contenedores estén en la misma red

---

## 📦 Despliegue en Producción

### En Docker Hub

```bash
# 1. Login en Docker Hub
docker login

# 2. Construir y etiquetar la imagen
docker build -t ashmichi1/todo-frontend:latest ./Frontend

# 3. Subir la imagen
docker push ashmichi1/todo-frontend:latest

# 4. Usar en otro servidor
docker pull ashmichi1/todo-frontend:latest
docker run -d -p 80:80 ashmichi1/todo-frontend:latest
```

### En un VPS (AWS, DigitalOcean, etc.)

```bash
# 1. Conectarse al servidor
ssh usuario@tu-servidor.com

# 2. Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 3. Clonar el repositorio
git clone https://github.com/ashmichi1/tdlst.git
cd tdlst

# 4. Desplegar
docker-compose up -d

# 5. Configurar dominio y SSL (opcional)
# Usa Nginx como proxy reverso y Certbot para SSL
```

### Con Nginx y SSL (Producción Real)

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx

# Obtener certificado SSL
sudo certbot --nginx -d tudominio.com

# Configurar Nginx como proxy reverso
sudo nano /etc/nginx/sites-available/todo-list
```

Contenido de Nginx:
```nginx
server {
    listen 80;
    server_name tudominio.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔒 Mejores Prácticas de Seguridad

1. **No incluyas archivos sensibles**
   - Usa `.dockerignore` para excluir `.env`
   - Nunca subas credenciales al repositorio

2. **Variables de entorno seguras**
   ```bash
   # Usa Docker secrets en producción
   echo "mi_password_seguro" | docker secret create db_password -
   ```

3. **Usa imágenes oficiales**
   - Preferir `node:18-alpine` sobre `node:latest`
   - Imágenes más pequeñas = menos vulnerabilidades

4. **Mantén Docker actualizado**
   ```bash
   docker version
   # Actualiza si hay versión más reciente
   ```

5. **Limita recursos**
   ```yaml
   services:
     frontend:
       deploy:
         resources:
           limits:
             cpus: '0.5'
             memory: 512M
   ```

---

## 📊 Monitoreo y Performance

### Ver uso de recursos

```bash
# Recursos en tiempo real
docker stats

# Uso de disco
docker system df

# Detalles de una imagen
docker image inspect ashmichi1/todo-frontend
```

### Logs persistentes

```bash
# Guardar logs en archivo
docker-compose logs > logs.txt

# Ver logs con timestamps
docker-compose logs -t
```

---

## 🆘 Recursos Adicionales

- **Documentación oficial**: https://docs.docker.com/
- **Docker Compose**: https://docs.docker.com/compose/
- **Docker Hub**: https://hub.docker.com/
- **Nginx en Docker**: https://hub.docker.com/_/nginx
- **Mejores prácticas**: https://docs.docker.com/develop/dev-best-practices/

---

## 📞 Soporte

¿Problemas o preguntas?

1. Revisa esta guía completa
2. Busca en [Stack Overflow](https://stackoverflow.com/questions/tagged/docker)
3. Abre un issue: https://github.com/ashmichi1/tdlst/issues

---

## 🎓 Comandos de Referencia Rápida

```bash
# Iniciar
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down

# Reconstruir
docker-compose up -d --build

# Entrar al contenedor
docker-compose exec frontend sh

# Ver estado
docker-compose ps

# Limpiar todo
docker-compose down -v && docker system prune -a
```

---

**Última actualización**: Diciembre 2024  
**Versión**: 1.0  
**Autor**: @ashmichi1