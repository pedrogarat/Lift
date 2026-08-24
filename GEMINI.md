# Reglas del Proyecto (Sincronizado)

Este archivo define las reglas generales de comportamiento para Antigravity en este espacio de trabajo. Dado que este proyecto se sincroniza entre múltiples equipos, es vital mantener consistencia.

## Directrices de Desarrollo

1. **Persistencia de Personalizaciones**: Cualquier regla o habilidad nueva que deba compartirse entre equipos DEBE crearse dentro de la carpeta `.agents/` en este proyecto para que Git la sincronice automáticamente.
2. **Rutas Relativas**: Al escribir código o scripts, utiliza siempre rutas relativas en lugar de rutas absolutas para evitar fallos cuando el proyecto se ejecute en otra computadora con diferentes directorios de usuario.
3. **Documentación del Proyecto**: Asegúrate de que todos los cambios importantes en la estructura del proyecto queden documentados en el `walkthrough.md` o en el `README.md`.
4. **Respeto a las Reglas Locales**: No intentes modificar archivos de configuración global fuera del proyecto (como `~/.gemini/config/`) a menos que el usuario lo solicite expresamente.
