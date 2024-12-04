Aquí tienes el contenido estructurado y formateado para un archivo `.md`:

```markdown
# Configuración y Ejecución de la API

## Comando de Ejecución

Para iniciar la API, utiliza el siguiente comando en la terminal:

```bash
npm run dev
```

## Configuración de Conexión

La API se conecta utilizando una dirección IP específica. Esto permite realizar peticiones desde otro dispositivo conectado a la misma red. La configuración de escucha del servidor es la siguiente:

```javascript
app.listen(3000, '0.0.0.0', () => {
  console.log("Server listening on http://192.168.1.158:3000/");
});
```

### Cambiar la IP por la Propia

La dirección IP `192.168.1.158` debe ser sustituida por la IP de tu máquina. Si no conoces tu dirección IP, puedes obtenerla ejecutando el siguiente comando en el terminal (CMD):

```bash
ipconfig
```

Busca la dirección IPv4 en la configuración de tu red.

### Ejecución Local

Si deseas ejecutar la API de manera local, puedes reemplazar la línea de configuración del servidor con la siguiente:

```javascript
app.listen(3000, () => {
  console.log("Server listening on port", 3000);
});
```

## Ruta POST: `/notificacion`

### Descripción

Este método permite enviar notificaciones mediante la ruta `/notificacion`. 

### Parámetros

El único parámetro requerido es el **email** al que se enviará la notificación.

### Configuración del Transporte

Para el envío de correos, se utiliza `nodemailer` con la siguiente configuración:

```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'santiagobg0203@gmail.com', // Tu cuenta de Gmail
    pass: 'nfbn vedb wqpk mtnn',      // Contraseña de aplicación de Google
  },
});
```

### Autenticación Personalizada

Si prefieres utilizar tu propia cuenta de Gmail, necesitas generar una **contraseña de aplicación** desde tu cuenta de Google y sustituir los valores correspondientes en el bloque `auth`.

---

¡Asegúrate de manejar la información confidencial como contraseñas con precaución, utilizando herramientas como variables de entorno para evitar exponerlas en tu código!
```