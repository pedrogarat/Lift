---
name: check-sync-status
description: Permite comprobar si el espacio de trabajo actual (.agents/ y GEMINI.md) está listo para sincronizarse mediante Git.
---

# Verificación de Estado de Sincronización del Proyecto

Esta habilidad te guía para verificar si los componentes clave de personalización están listos para ser subidos y compartidos con otros equipos.

## Pasos para Verificar:

1. **Revisar Archivos de Personalización**:
   - Asegúrate de que los archivos en `.agents/rules/` y `.agents/skills/` estén en la lista de seguimiento de Git.
   - Ejecuta `git status` para ver si hay cambios sin confirmar en la carpeta `.agents/`.

2. **Verificar Reglas de Comportamiento (`GEMINI.md`)**:
   - Comprueba si el archivo `GEMINI.md` en la raíz contiene las directrices correctas del proyecto.

3. **Revisar el Archivo `.gitignore`**:
   - Confirma que `.gitignore` tiene la línea `!.agents/` de manera que Git no ignore las configuraciones de Antigravity compartidas.

4. **Instrucciones para el Agente**:
   - Si detectas archivos nuevos en `.agents/` que no estén en Git, adviértele al usuario para que haga commit de ellos.
