# IA para pymes: diagnóstico, prioridades y calculadora de ROI

Recursos prácticos de **Matias Montico · [Impulso Pymes IA](https://impulsopymesia.com/)** para decidir qué proceso conviene mejorar primero y cómo comprobar si el cambio funcionó.

| Recurso | Qué resuelve | Versión web |
| --- | --- | --- |
| [Checklist de madurez digital](checklist-madurez-digital.md) | Evalúa 25 prácticas en cinco áreas y elige un objetivo de mejora. | [Diagnóstico interactivo](https://impulsopymesia.com/recursos/checklist-madurez-digital/) |
| [Matriz para priorizar procesos](priorizar-procesos.md) | Ordena tareas según las horas que pueden liberarse, el esfuerzo y las condiciones para empezar. | [Recursos y guías para pymes](https://impulsopymesia.com/recursos/) |
| [Calculadora de ROI de IA](index.html) | Distingue el valor del tiempo aprovechado del ahorro real de caja. | [Calculadora y metodología](https://impulsopymesia.com/recursos/calculadora-roi-ia/) |
| [Flujo de consultas para n8n](flujo-consultas-pyme-n8n.json) | Clasifica consultas y prepara borradores para que el equipo los revise. | [Plantilla y guía de configuración](https://impulsopymesia.com/recursos/plantilla-n8n-pymes/) |

Empezá con el checklist. Después compará dos o tres tareas en la matriz y pasá la candidata por la calculadora. Medí durante una semana el tiempo por tarea, incluida la revisión, para sustituir los supuestos por datos propios.

## Ejercicio guiado: preparar presupuestos con IA

[Compará diez presupuestos antes y después de un borrador con IA](ejercicios/automatizar-presupuestos/README.md). Incluye datos ficticios descargables, el tiempo de revisión y los resultados esperados a 20 y 40 presupuestos al mes.

## Calculadora: cómo usarla

**[Probar la calculadora en el navegador](https://matiasconsultor.github.io/recursos-ia-pymes/)**

Descargá el repositorio y abrí `index.html` en tu navegador. No necesita conexión, registro ni claves. Los datos del cálculo no se transmiten ni se guardan.

El ejemplo precargado parte de una persona, 4 horas semanales, una reducción del 50 %, un aprovechamiento del 75 %, un valor de 24 €/h, costes de 35 €/mes y una implantación de 270 €. Sin gastos evitados, el resultado da **8,7 h/mes liberadas**, **156 €/mes de capacidad aprovechada** y **−35 €/mes de caja**. El valor de esas horas no se suma al ahorro de caja.

Para comprobar el ejemplo y los casos límite, ejecutá `node --test test-roi.cjs` con Node.js 18 o posterior.

## Plantilla n8n: cómo usarla

1. Descargá el JSON e importalo con **Workflows → Import from File**. El flujo queda desactivado.
2. Configurá las credenciales en n8n y corregí los marcadores de la hoja y del destinatario interno. No guardes las claves en el archivo.
3. Ejecutá una consulta ficticia. Revisá el borrador, el registro y la notificación antes de activar el webhook. Probá por separado una salida inválida y un fallo de la llamada HTTP.
4. Antes de usar datos reales, revisá el contenido del formulario. El flujo envía al modelo solo el texto de la consulta, sin los campos de nombre, correo ni teléfono. El texto libre todavía puede contener datos personales. El aviso va al equipo para revisión.

**Prueba en n8n 2.49.7 (26/11/2026):** el webhook respondió HTTP 200 en tres escenarios con datos ficticios. Con una salida válida se generó el borrador; una salida inválida o un HTTP 503 del proveedor pasaron a revisión manual sin borrador. Se verificaron el registro y el aviso con servicios simulados.

Antes de usarla en producción, verificá los nodos de Google Sheets, Gmail y el proveedor de IA con credenciales y datos de prueba. La plantilla se distribuye desactivada y sin credenciales.

Material de trabajo para pymes y autónomos. Al citarlo, acreditá a **Impulso Pymes IA** y enlazá el recurso correspondiente.
