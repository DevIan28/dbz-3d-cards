# 🐉 Dragon Ball Z — 3D Cards

> Aplicación web interactiva que permite **invocar personajes de Dragon Ball Z** en 3D con animaciones, sonidos y visualización dinámica.  
> Desarrollado con **React + Vite**, usando modelos `.glb` y la **API pública de Dragon Ball**.

---

## 🚀 Demo en vivo
🔗 **[https://devian28.github.io/dbz-3d-cards/](https://devian28.github.io/dbz-3d-cards/)**

---

## Características principales

✅ **Interfaz dinámica**  
- Catálogo de cartas con imágenes, nombres y razas.  
- Diseño moderno, responsivo y temático de Dragon Ball.  

✅ **Visualización 3D interactiva**  
- Integración de `<model-viewer>` para rotar y hacer zoom.  
- Si el personaje no tiene modelo, se muestra una versión 2D ampliada.  

✅ **Integración con API**  
- Datos en tiempo real desde [web.dragonball-api.com](https://web.dragonball-api.com).  
- Filtro por raza, buscador de personajes y opción *“Solo 3D”*.  

✅ **Efectos visuales y auditivos**  
- Sonido de invocación (`/sfx/invoke.mp3`).  
- Pantalla de carga animada con esferas del dragón.  
- Fondo y aura dinámica al invocar personajes.  

✅ **Optimización para GitHub Pages**  
- Archivos `.glb` y `.mp3` cargados correctamente mediante `import.meta.env.BASE_URL`.  
- Build limpio y ligero.  

---

## 🧩 Tecnologías utilizadas

| Tecnología | Uso |
|-------------|-----|
| ⚛️ React + Vite | Framework base y bundler rápido |
| 💠 `<model-viewer>` | Renderizado 3D interactivo |
| 🎨 CSS3 / Flex / Animaciones | Diseño temático Dragon Ball |
| 🔊 Audio API HTML5 | Sonidos de invocación |
| 🌐 Dragon Ball API | Datos de personajes |

---

## 🛠️ Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/DevIan28/dbz-3d-cards.git
cd dbz-3d-cards

# Instalar dependencias
npm install

# Ejecutar modo desarrollo
npm run dev

