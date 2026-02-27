# 📜 Manual de Usuario y Despliegue - El Arca de Noé

Este documento es una guía paso a paso para la administración, actualización y puesta en producción del menú digital de "El Arca de Noé".

---

## 1. 🖼️ Gestión de Imágenes

El sistema utiliza imágenes alojadas externamente para garantizar velocidad y facilidad de actualización.

### Cambiar el Logo Principal
El logo actual es una composición de iconos en el código. Para usar una imagen real:
1. Sube tu logo (formato `.png` o `.svg` transparente) a un servidor de imágenes o a la carpeta `/public`.
2. Edita el archivo `app/components/Header.tsx`.
3. Reemplaza el contenido del `div` del logo (líneas 7-15) por una etiqueta de imagen estándar:
   ```tsx
   <img src="/logo.png" alt="Logo El Arca de Noe" className="w-28 h-28 object-contain" />
   ```

### Imágenes de Productos
Las imágenes se vinculan mediante una "Imagen Map" en los archivos de cada página.
- **Ubicación**: 
  - Inicio: `app/page.tsx`
  - Fríos/Postres: `app/frios/page.tsx`
- **Cómo actualizar**:
  1. Sube la foto del producto a un servicio como **PostImages**, **Imgur** o **Google Photos**.
  2. Copia el **enlace directo** (debe terminar en `.jpg`, `.png`, o ser un enlace permanente).
  3. En los archivos mencionados, busca la constante `imageMap` y reemplaza el enlace correspondiente al nombre del producto.

### Especificaciones Técnicas
- **Dimensiones recomendadas**: Cuadradas (1:1), preferiblemente **500x500 píxeles**.
- **Peso**: Menos de **200 KB** por imagen para carga rápida.

---

## 2. 🍔 Actualización de Menú y Precios

Toda la información de los productos reside en un único archivo central.

### Archivo de Datos: `public/Menu.json`
Para editar productos, abre este archivo y sigue esta estructura:

```json
{
  "nombre": "Café americano",
  "etiqueta": "POPULAR",
  "precio": "$3.000",
  "descripcion": "Descripción del producto aquí..."
}
```

- **Añadir nuevo producto**: Copia un bloque de producto existente y pégalo al final de la lista de su categoría, asegurándote de mantener las comas y llaves correctamente.
- **Actualizar precios**: Solo cambia el valor dentro de las comillas en el campo `"precio"`.
- **Eliminar producto**: Borra el bloque completo desde la llave de apertura `{` hasta la de cierre `}`.

---

## 3. 🚀 Publicación en Vercel (Producción)

Sigue estos pasos para subir tu aplicación a internet de forma gratuita y profesional.

### Paso A: Crear Cuenta en GitHub
1. Ve a [github.com](https://github.com/) y regístrate.
2. Crea un **Nuevo Repositorio** (New Repository) llamado `el-arca-menu`.
3. Déjalo como **Público** o **Privado** según prefieras.

### Paso B: Cargar el Código
Si ya tienes Git instalado en tu PC, ejecuta estos comandos en la terminal de la carpeta del proyecto:
```bash
git init
git add .
git commit -m "Carga inicial del menú"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/el-arca-menu.git
git push -u origin main
```

### Paso C: Desplegar en Vercel
1. Crea una cuenta en [vercel.com](https://vercel.com/) usando tu cuenta de GitHub.
2. Haz clic en **"Add New"** > **"Project"**.
3. Importa el repositorio `el-arca-menu`.
4. Haz clic en **"Deploy"**.
5. ¡Listo! Vercel te dará un enlace (ej: `el-arca-menu.vercel.app`) para compartir con tus clientes.

---

## 🛠️ Recomendaciones para el Administrador

1. **Cuidado con el JSON**: Si olvidas una coma o una llave en `Menu.json`, la página podría mostrar un error. Siempre revisa que el formato sea válido (puedes usar un [Validador JSON online](https://jsonlint.com/)).
2. **Nombres Exactos**: Si cambias el nombre de un producto en el JSON, asegúrate de actualizarlo también en el `imageMap` de los archivos `.tsx` para que la imagen se siga mostrando.
3. **Optimización**: No uses fotos de cámara profesional directamente sin comprimirlas. Usa herramientas como [TinyPNG](https://tinypng.com/) antes de subirlas.
4. **WhatsApp**: El botón de pedidos en el pie de página se configura en `app/components/Footer.tsx`. Asegúrate de que el número sea el correcto.

---
> **Desarrollado para:** El Arca de Noé - Coffee & Roasters ☕
