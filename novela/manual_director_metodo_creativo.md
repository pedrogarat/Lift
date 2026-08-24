# Manual del Director & Prompt Maestro: Método de Co-Creación de Novelas

> **Guía Metodológica:** Cómo iniciar una nueva novela o proyecto literario interactivo utilizando la metodología de Co-Creación entre el **Director de Proyecto (Pedro Garat)** y **Antigravity AI**.

---

## 🚀 Opción A: El "Prompt Maestro" (Para iniciar un nuevo chat)

Copia y pega el siguiente prompt en un nuevo chat con Antigravity para iniciar cualquier nueva novela desde cero aplicando exactamente el mismo *Modus Operandi*:

```markdown
Hola Antigravity. Quiero iniciar la creación de una nueva novela interactiva aplicando el "Método de Dirección Creativa de Pedro Garat".

En este proyecto asumiré el rol de Director de Proyecto y Autor Principal, mientras que tú actuarás como Co-Creador Narrativo, Asistente Técnico y Generador Visual.

El proceso debe seguir estas 5 fases estrictas:

1. FASE 1: ARQUITECTURA NARRATIVA Y ESCALETA
   - Diseñaremos una novela dividida en Actos y Capítulos.
   - Para cada capítulo crearemos una "Ficha de la Escena" con: Objetivo Dramático, Personajes Presentes, Punto de Vista (POV) y Dilema Ético/Humano.

2. FASE 2: FICHAS DE PERSONAJES E IDENTIDAD VISUAL
   - Crearemos la base de datos de coherencia de personajes.
   - Cada personaje tendrá inspiración visual en actores/modelos reales, motivaciones psicológicas y un "detalle icónico distintivo".
   - Formularemos prompts detallados para generación de imágenes IA (en inglés y español).

3. FASE 3: REDACCIÓN LITERARIA Y HUMANIZACIÓN DE CONCEPTOS
   - Al redactar los capítulos, eliminaremos explicaciones espesas o jergas pesadas.
   - Aplicaremos el recurso literario de "analogías y símiles cotidianos" para explicar conceptos complejos de forma intuitiva y emocionante para el público general.

4. FASE 4: ILUSTRACIONES Y PORTADA POÉTICA
   - Generaremos 1 ilustración cinematográfica 16:9 por capítulo.
   - La portada huirá de clichés agresivos; buscará un contraste poético y emocional entre los elementos fríos/tecnológicos y lo humano/orgánico.

5. FASE 5: DESPLIEGUE WEB INTERACTIVO Y GITHUB PAGES
   - Construiremos el lector web interactivo (HTML, CSS vanilla, JS estático, audiolibro con voz y música de ambiente, códice de lore, buscador global y sección de Génesis/Dirección).
   - Publicaremos el resultado final en GitHub Pages con un solo comando.

Para empezar, la idea general o temática de mi nueva novela es: [ESCRIBE AQUÍ TU IDEA, GÉNERO O SINOPSIS INICIAL]. 
¿Empezamos definiendo la escaleta y los personajes principales?
```

---

## 📁 Opción B: Crear un Nuevo Proyecto desde la Plantilla

Si quieres duplicar la estructura de archivos en tu ordenador para una nueva obra (por ejemplo: `novela-2`):

### 1. Copia la estructura base
Crea una nueva carpeta en tu sistema e incluye los siguientes archivos fuente:
* `index.html` (Lector web responsivo)
* `style.css` (Diseño cyberpunk / adaptable)
* `app.js` (Lógica interactiva, buscador y audiolibro)
* `build-novel-data.js` (Compilador automático)
* `server.js` (Servidor local para red Wi-Fi)
* Carpeta `novela/` (con subcarpeta `capitulos/`)

### 2. Sustituye los textos de la carpeta `novela/`
Dentro de `novela/` solo necesitas actualizar:
* `novela/personajes.md` (Tus nuevos personajes)
* `novela/biografias.md` (Las biografías de tu nueva novela)
* `novela/escaleta.md` (La escaleta de tu nueva trama)
* `novela/genesis.md` (El informe de dirección de la nueva obra)
* `novela/capitulos/capitulo_1.md ... capitulo_N.md` (Los capítulos redactados)

### 3. Compila y publica
Ejecuta en consola:
```bash
# 1. Recompilar los datos de la nueva novela
node build-novel-data.js

# 2. Subir a tu nuevo repositorio de GitHub
git init
git add .
git commit -m "Publicar nueva novela"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/NUEVA-NOVELA.git
git push -u origin main
```

---

## 🎯 Resumen del Modus Operandi

| Fase | Tarea del Director (Pedro Garat) | Tarea de Antigravity AI |
| :--- | :--- | :--- |
| **1. Concepción** | Define la idea, tono, dilemas y cambios de ritmo | Propone escaleta en 3 actos y fichas de escena |
| **2. Personajes** | Elige inspiraciones visuales y rasgos distintivos | Redacta biografías y prompts de imagen |
| **3. Redacción** | Revisa el tono y pide analogías cotidianas | Redacta capítulos pulidos y fluidos |
| **4. Arte** | Dirige la portada poética y el contraste visual | Genera las imágenes cinematográficas 16:9 |
| **5. Despliegue** | Aprueba la versión final y la URL | Compila el código web y lo sube a GitHub |
