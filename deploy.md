# Despliegue en AWS Lightsail

Guía para alojar **alejandrito_app_v2** (Next.js) en un servidor AWS Lightsail existente, exponiendo la app en el **puerto 5001**.

---

## Requisitos previos

- Servidor Lightsail con Node.js instalado (v18+ recomendado).
- Acceso SSH al servidor.
- Repositorio clonado o desplegado en el servidor.

---

## 1. Conectar al servidor y clonar el repositorio

```bash
ssh usuario@tu-ip-lightsail
cd /ruta/donde/tienes/tus/apps   # ej: /home/ubuntu/apps
git clone https://github.com/JoelDirdam/app_alejandrito.git alejandrito_app
cd alejandrito_app
```

---

## 2. Instalar dependencias y construir

```bash
npm ci
npm run build
```

---

## 3. Ejecutar la app en el puerto 5001

Next.js usa la variable de entorno `PORT` para elegir el puerto:

```bash
PORT=5001 npm start
```

Para dejarla corriendo en segundo plano (con `nohup`):

```bash
PORT=5001 nohup npm start > alejandrito.log 2>&1 &
```

---

## 4. Usar PM2 (recomendado si ya lo usas en el servidor)

Si en Lightsail ya usas PM2 para otras apps:

```bash
npm install -g pm2
PORT=5001 pm2 start npm --name "alejandrito" -- start
pm2 save
pm2 startup   # para que arranque al reiniciar el servidor
```

Para ver logs y estado:

```bash
pm2 logs alejandrito
pm2 status
```

---

## 5. Proxy inverso (Nginx) hacia el puerto 5001

Si usas Nginx como proxy para otras apps, añade un `server` para esta:

```nginx
server {
    listen 80;
    server_name alejandrito.tudominio.com;   # o la IP/subdominio que uses

    location / {
        proxy_pass http://127.0.0.1:5001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Recarga Nginx:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

---

## 6. Firewall (Lightsail / sistema)

Si quieres abrir solo el puerto 5001 en el firewall (o usas solo Nginx en 80/443, no hace falta):

- **Lightsail**: En la consola AWS → Lightsail → tu instancia → Networking → añadir regla TCP **5001** si necesitas acceso directo al puerto.
- En la mayoría de casos basta con Nginx en 80/443 y proxy a `127.0.0.1:5001`.

---

## 7. Actualizar la app (redeploy)

```bash
cd /ruta/alejandrito_app
git pull origin main
npm ci
npm run build
pm2 restart alejandrito
# o, si no usas PM2:
# pkill -f "next start" (o el proceso que use el puerto 5001)
# PORT=5001 nohup npm start > alejandrito.log 2>&1 &
```

---

## Resumen de puertos

| Servicio   | Puerto |
|-----------|--------|
| App Next.js (alejandrito) | **5001** |
| Nginx (opcional)          | 80 / 443 |

La app queda disponible en `http://tu-servidor:5001` o a través del dominio configurado en Nginx.
