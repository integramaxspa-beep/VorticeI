# Vórtice — Revista Cultural (GitHub Pages)

Sitio estático listo para publicar la revista **Vórtice** en GitHub Pages.

## 🚀 Publicación rápida

1. Crea un repositorio en GitHub llamado `vortice` (o el nombre que prefieras).
2. Sube **todo** el contenido de esta carpeta a la raíz del repo (incluye `.nojekyll`).
3. En GitHub, ve a **Settings → Pages** y en **Build and deployment** elige:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `/ (root)`
4. Guarda. Tu sitio quedará disponible en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

> Si usas el nombre especial `TU-USUARIO.github.io`, publica desde la rama `main` directamente en la raíz y tu dominio será `https://TU-USUARIO.github.io/`.

## ✏️ Editar contenido

- Portada: `index.html`
- Ediciones: `ediciones/index.html`
- Una edición: `ediciones/v001/index.html`
- Artículos: crea archivos HTML dentro de `articulos/` y enlázalos desde la edición correspondiente.
- Estilos: `assets/css/styles.css`
- JS (tema, menú, PWA): `assets/js/app.js`
- Logo / imágenes: `assets/img/*`

> Consejo: copia `articulos/tu-primer-articulo.html` como plantilla para nuevas notas.

## 🌓 Tema y accesibilidad

- Botón 🌓 cambia entre **auto / oscuro / claro** y recuerda tu preferencia.
- Tipografía y contrastes optimizados para lectura.
- Navegación accesible (teclado y lectores de pantalla).

## 🔌 Formularios

El formulario usa **Formspree** como placeholder. Cambia la URL en `contacto.html` (atributo `action`) por tu servicio preferido, o usa `mailto:` si no necesitas backend.

## 📈 Analítica (opcional)

En el `<head>` hay meta etiquetas SEO/OG. Si quieres **Google Analytics 4**, añade tu snippet en el `<head>` de cada página (busca el comentario `GA4` si lo agregas).

## 📦 PWA / Offline

Se incluye un *service worker* y `manifest.webmanifest` para lectura básica sin conexión. GitHub Pages sirve el sitio por HTTPS, así que funcionará sin config extra.

## 🛠️ Desarrollo local

Abre `index.html` en tu navegador o usa un servidor local:

```bash
python3 -m http.server 4321
# visita http://localhost:4321
```

## 🧼 Sin Jekyll

Se incluye `.nojekyll` para evitar el build de GitHub Pages y servir los archivos tal cual.

---

Hecho con ❤️ por y para la cultura independiente.
