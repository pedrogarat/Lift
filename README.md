# Proyecto Sincronizable de Antigravity

Este espacio de trabajo está diseñado y preconfigurado para sincronizarse fácilmente con otra instancia de Antigravity en una computadora diferente.

---

## 🛠️ Cómo Funciona la Sincronización

Antigravity busca y carga automáticamente todas las reglas y habilidades guardadas dentro de este espacio de trabajo:
- **`GEMINI.md`**: Reglas globales que afectan al agente al abrir este proyecto.
- **`.agents/`**: Directorio donde se guardan habilidades (`skills/`), reglas específicas (`rules/`) y plugins de este espacio de trabajo.

Al usar un sistema de control de versiones como **Git**, todos estos archivos de configuración e instrucciones personalizadas se sincronizan automáticamente entre tus equipos.

---

## 🚀 Paso a Paso para la Sincronización

### Paso 1: Configurar el Repositorio de Git (Máquina 1)
En la terminal de este proyecto en tu máquina actual, inicializa Git y sube el código a un servidor (se recomienda un repositorio privado en GitHub o GitLab):

```bash
git init
git add .
git commit -m "Inicializar proyecto con configuraciones de Antigravity"
# Reemplaza con la URL de tu repositorio remoto
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

### Paso 2: Clonar el Repositorio (Máquina 2)
En tu otra computadora, clona el repositorio en la ubicación deseada:

```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
```

Una vez clonado y abierto en la segunda instalación de Antigravity, el agente cargará instantáneamente las reglas de `GEMINI.md` y la habilidad `check-sync-status`.

---

## ⚠️ Resolución del Historial de Conversaciones (Rutas Absolutas)

> [!IMPORTANT]
> **Antigravity vincula el historial de chats e indexación al path absoluto de tu carpeta de proyecto.**
> Si clonas el proyecto en `C:\Users\UsuarioA\Proyectos\sync-project` en el Equipo A y en `C:\Users\UsuarioB\Proyectos\sync-project` en el Equipo B, es posible que Antigravity no asocie el historial de chat debido a la diferencia de rutas.

### Solución: Usar Enlaces Simbólicos (Symlinks)

Para solucionar esto y mantener exactamente la misma ruta absoluta en ambos equipos, te recomendamos clonar el repositorio en cualquier carpeta física y luego crear un **enlace simbólico** (Junction) a una ruta estandarizada idéntica (por ejemplo, `C:\proyectos-sync\sync-project`):

#### En Windows (Cmd como Administrador):
```cmd
mklink /J "C:\proyectos-sync\sync-project" "C:\Ruta\Real\Donde\Clonaste\El\Proyecto"
```

#### En macOS / Linux:
```bash
ln -s /Ruta/Real/Donde/Clonaste/El/Proyecto /Users/compartido/proyectos-sync/sync-project
```

Luego, **abre la ruta estandarizada** en tu Antigravity IDE en ambos equipos. De esta forma, Antigravity verá exactamente el mismo path absoluto y compartirá el contexto de manera transparente.
