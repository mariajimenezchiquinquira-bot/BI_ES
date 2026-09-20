# Contexto del proyecto — Portafolio de María José Jiménez

Este archivo resume la estructura del proyecto y los cambios hechos con ayuda de Claude, para tener contexto rápido en futuras sesiones.

## Datos generales

- Proyecto: React + Vite (`data-portfolio-studio`)
- Ubicación: `C:\Users\alura\Downloads\Claude\PortfolioHTML\data-portfolio-studio`
- Repositorio: `github.com/mariajimenezchiquinquira-bot/data-portfolio-studio`, rama `main`
- Todo el contenido del portafolio vive en `src/routes/index.tsx`
- Las imágenes de los proyectos están en `src/assets/projects/`

## Flujo de deployment (confirmado)

El sitio en vivo (https://maria-jose-jimenez.vercel.app/) está desplegado en **Vercel**, y el proyecto de Vercel SÍ está conectado directamente al repositorio de GitHub (`mariajimenezchiquinquira-bot/data-portfolio-studio`, verificado en Vercel > Project Settings > Git > "Connected Git Repository").

Esto significa que el deployment es automático: no hace falta ningún paso adicional en Vercel ni ningún comando de despliegue manual. Basta con:

```
cd "C:\Users\alura\Downloads\Claude\PortfolioHTML\data-portfolio-studio"
git add -A
git commit -m "mensaje descriptivo"
git push origin main
```

Al hacer push a `main`, Vercel detecta el commit y publica el nuevo build solo, normalmente en uno o dos minutos. Si después de un push no se ven los cambios en el navegador, probablemente es caché del navegador — recargar con Ctrl+Shift+R (recarga forzada) antes de asumir que el deployment falló.

## Cambios realizados hasta ahora

### Customer Segmentation for Credit Card Clients
- El botón "Notebook" apunta a `public/notebook-segmentacion-clientes.html` (antes era un PDF alojado en Google Drive, luego un PDF local, y finalmente se cambió a un archivo HTML).
- El bloque "Solution" se renombró a "Approach".

### Zippto — Custom Flashcards
- Texto del bloque "Result" actualizado a: *"a custom UI, and intuitive study flows — demonstrating a complete product build from UI/UX design to deployment."*
- Imágenes `zippto-flashcard-front.png` y `zippto-flashcard-back.png` reemplazadas por capturas nuevas de la app (mismo nombre de archivo, contenido actualizado).

### Premium Tool Request Automation (Power Automate)
Imágenes usadas en `src/assets/projects/`:
- `formulario.png`
- `power-automate-flow.png`
- `power-automate-email-detail.png`
- `power-automate-email-confirmation.png`
- `power-automate-email-approved.png`

Layout de la galería (personalizado, no usa el componente `ProjectImageGrid` estándar):
- `power-automate-flow.png` grande, a la izquierda, ocupando 2 filas.
- A la derecha: `formulario.png` (fila 1) y `power-automate-email-detail.png` (fila 2).
- Fila 3: `power-automate-email-approved.png` (izquierda) y `power-automate-email-confirmation.png` (derecha).

### Botón LinkedIn (header)
- Antes tenía `href="#"`. Ahora apunta a `https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/` con `target="_blank"`.
- El botón de LinkedIn del footer ya estaba correcto desde antes.

### Zippto — orden de imágenes en la segunda fila (sesión posterior)
- La galería usa el componente estándar `ProjectImageGrid` (grid de 2 columnas, en el orden del array `images`).
- Se intercambió el orden de las imágenes 3 y 4 del array para que en la segunda fila `zipptoBack` ("flashcard back side") quede a la izquierda y `zipptoFront` ("flashcard front side") quede a la derecha.

### Premium Tool Request Automation — imagen reemplazada (sesión posterior)
- Se reemplazó el contenido del archivo `src/assets/projects/power-automate-email-detail.png` por una captura nueva enviada por el usuario (mismo nombre de archivo, no hubo que tocar el código).

### Limpieza de archivos no usados
- En la misma sesión también se eliminaron del repo (ya no estaban en uso): `public/notebook-segmentacion-clientes.pdf`, `src/assets/projects/n8n-flow.png`, `src/assets/projects/n8n-information-extractor.png`.

### Customer Churn & Capital Loss Analysis — imagen más grande y reorden de skills (sesión posterior)
- La imagen del dashboard de Power BI en esta sección se agrandó (clase `max-w-xl` → `max-w-3xl` en `src/routes/index.tsx`).
- Se reordenó el array `SKILLS` en `src/routes/index.tsx` según el siguiente orden solicitado: Business Intelligence, Business Analysis, Data Analysis, Generative AI, Financial Analysis, Python, SQL, Power BI, N8N, Power Automate, Excel, Claude Code, Process Improvement, Automation, Digital Product Development, Agile Methodologies.
- Nota: durante el push de estos cambios se encontraron archivos de bloqueo de git colgados (`.git/index.lock`, `.git/HEAD.lock`, `.git/objects/maintenance.lock`), probablemente por tener otro programa (VS Code, GitHub Desktop, etc.) tocando el repo al mismo tiempo. Se eliminaron manualmente para poder completar el commit/push. Si vuelve a pasar, cerrar otros programas que usen el repo antes de correr git.

## Pendiente / notas de seguridad

- El remote de git (`git remote -v`) tiene un token de GitHub incrustado en la URL. Se recomienda rotarlo/reemplazarlo por seguridad cuando el usuario tenga oportunidad.

## ⚠️ IMPORTANTE: hay 3 proyectos/portafolios distintos, no uno solo

Existen 3 carpetas/repositorios separados en `C:\Users\alura\Downloads\Claude\PortfolioHTML\`, cada uno con su propio sitio en Vercel:

| Carpeta | Repo GitHub | URL en vivo |
|---|---|---|
| `portfolio-product` | `data-portfolio-studio` | (portafolio "producto/completo", 5 proyectos) |
| `portfolio-bi` | `portfolio-bi` | https://portfolio-bi-iota.vercel.app/ |
| `portfolio-data-analysis` | `portfolio-data-analysis` | https://portfolio-data-analysis-silk.vercel.app/ |

**Antes de hacer un cambio hay que preguntar o confirmar en cuál(es) de los 3 aplica**, porque tienen contenido parecido pero no idéntico (por ejemplo, "Nu Split — Shared Payments Feature" solo existe en `portfolio-bi` y `portfolio-product`, no en `portfolio-data-analysis`). Si el usuario menciona una sección sin decir el sitio, buscar en los 3 antes de asumir cuál es. Un cambio pedido para "el portafolio" casi siempre debe aplicarse en los 3 si la sección existe en los 3, y avisar explícitamente en cuáles se aplicó.

## Convenciones sobre imágenes en las galerías de proyectos (`ProjectImageGrid`)

Componente en `src/components/portfolio/ImagePlaceholder.tsx`. Preferencia confirmada del usuario:

- **NO** usar un marco forzado tipo `aspect-[4/3]` con `object-contain` — eso recorta/reduce imágenes con proporciones distintas a 4:3 y dejaba espacio vacío alrededor (se notaba como "fondo gris" o "espacio en blanco" según el color de fondo del marco).
- **SÍ** usar el estilo de `portfolio-product` (la versión correcta, ya replicada en los 3 proyectos): el `<a>` contenedor SIN `aspect-*` fijo, y la imagen con `className="max-h-[420px] w-auto max-w-full object-contain ..."` — así cada imagen respeta su proporción natural y no queda espacio sobrante.
- El fondo de la tarjeta/marco de imagen debe ser blanco (`bg-white`), no gris (antes era `bg-card-foreground/[0.03]`, que se veía como un gris clarito indeseado).
- Cuando varias imágenes de una misma fila/sección deben verse "del mismo tamaño" entre sí (ej. las 6 gráficas de "Customer Segmentation"), la forma correcta es generar/exportar esas imágenes ya con las mismas dimensiones en píxeles (mismo ancho×alto) ANTES de subirlas — no forzar un marco CSS parejo, porque eso recorta o dejaba espacio vacío según la proporción de cada imagen.

## Sección "Customer Segmentation for Credit Card Clients" — origen de las imágenes

- Las 6 gráficas de esta sección (Elbow Method, Dominant Merchant Category, Average Transaction Amount, Most Used Card Franchise, Domestic vs. International Spending, Spending by Day of Week) se generan con matplotlib/seaborn desde el notebook de Jupyter `ConsumoTarjetasCredito.ipynb` (Google Colab), que lee el archivo `infoclientebanca_en.xlsx`. El usuario tiene ambos archivos y los puede volver a compartir si hace falta regenerar las gráficas.
- Las imágenes finales usadas en el sitio están en `src/assets/projects/` con nombres `segmentation-*.png` (ej. `segmentation-5-elbow-method.png`).
- El botón "Notebook" de esta sección apunta a un archivo HTML exportado del mismo notebook (`ConsumoTarjetasCredito.html` en `portfolio-bi`/`portfolio-data-analysis`, o `notebook-segmentacion-clientes.html` en `portfolio-product` — el nombre varía por proyecto).
- Para que las 6 gráficas del notebook no tuvieran fondo gris y quedaran del mismo tamaño, se les agregó `facecolor='white'` y se unificó `figsize=(6, 4)` en el código del notebook antes de re-ejecutarlo y volver a exportar tanto las imágenes PNG como el HTML.

## Flujo de deployment — aplica igual en los 3 proyectos

Mismo flujo que ya estaba documentado: `git add -A`, `git commit`, `git push origin main` desde la carpeta del proyecto correspondiente. Vercel despliega solo tras el push (1-2 min). Si el usuario no ve cambios, recordarle recargar con Ctrl+Shift+R antes de asumir que el deploy falló, y verificar en Vercel > Deployments que el commit correcto quedó en Production.

Nota técnica: al hacer `git commit`/`add` desde el bridge remoto a veces quedan archivos de lock (`.git/HEAD.lock`, `.git/index.lock`) que no se pueden borrar por permisos — si pasa, pedir permiso de borrado (`device_request_delete_permission`) sobre la carpeta `PortfolioHTML` y luego eliminar los `.lock` antes de reintentar el commit.

## Secciones WeWork y Bud Light (business case studies) — agregadas en `portfolio-bi`

Se agregaron dos `ProjectCard` nuevas al inicio de la sección de proyectos de `portfolio-bi` (antes de los proyectos técnicos), siguiendo la recomendación del profesor de la usuaria de incluir casos de negocio de estrategia/entendimiento del negocio, no solo análisis técnico:

- **WeWork: Strategic Collapse of a $47B Business Model** — colapso del modelo de negocio de WeWork (2019 IPO fallido → quiebra 2023).
- **Bud Light / AB InBev: The Cost of a Marketing Decision** — crisis de marca de Bud Light en 2023 y su impacto en ventas/market share.

Ambas usan tags `["Business Case", "Strategy Analysis", "Business Understanding"]` y bloques `Problem` / `Approach` / `Result` como el resto del portafolio. Se quitaron las secciones "Nu Split — Shared Payments Feature", "Vehicle Contract Automation" y "Customer Segmentation for Credit Card Clients" de `portfolio-bi` para dejar solo: WeWork, Bud Light, Customer Churn & Capital Loss Analysis, Outline, UI Work.

### Imágenes/gráficas
Generadas con matplotlib replicando la paleta del portafolio (PURPLE `#8B7FE8`, GOLD `#D4B106`, YELLOW `#F0D43A`), en `src/assets/projects/`:
- WeWork: `wework-valuation.png`, `wework-timeline.png`, `wework-losses-donut.png` (layout especial: grid `sm:grid-cols-[1.5fr_1fr_1fr]` en vez del `ProjectImageGrid` estándar, para que las 3 quepan en una fila con distinto ancho).
- Bud Light: `budlight-ranking.png`, `budlight-market-share.png`, `budlight-sales-volume.png` (usa `ProjectImageGrid` estándar de 3 columnas).
- El texto "boycott"/"boicot" se reemplazó por "brand crisis"/"crisis de marca" en la gráfica `budlight-sales-volume` (y en el texto del portafolio) porque no es un término universalmente conocido/entendido. El eje Y de esa gráfica se simplificó de "Sales Volume (Indexed, 100 = Pre-Crisis)" a "Sales Volume (%)" con barras en 100%/70%, sin el símbolo "~" ni el "(-30%)" al lado del número — se prefiere lo más limpio/directo posible en las etiquetas de gráficos.
- También existen versiones en español de las 6 gráficas (sufijo `_es`, generadas pero no necesariamente usadas todavía en el sitio — confirmar con la usuaria antes de reemplazar el set en inglés que sí está en producción).

### PDFs "View Full Analysis" (botón `DocsLink`)
Cada card tiene un botón que abre un PDF de análisis más profundo (3 páginas, formato consultoría):
- `public/docs/WeWork_Case_Study_Analysis.pdf` → botón en la card de WeWork.
- `public/docs/BudLight_Case_Study_Analysis.pdf` → botón en la card de Bud Light.
- El componente `DocsLink` (ícono `FileText`) ya existía en `ProjectCard.tsx`; se usó con `label="View Full Analysis"`.
- **Importante:** los PDFs deben tener metadatos de título correctos (`/Title`), si no el navegador muestra "(anonymous)" en la pestaña al abrirlos. Los PDFs generados con ReportLab traen `/Title: (anonymous)` por defecto — hay que sobreescribir el metadata con `pypdf` (`PdfWriter.add_metadata`) antes de subirlos.
- Preferencias de diseño de estos PDFs (estilo formal/académico, un solo color navy, sin mayúsculas sostenidas, captions "Figura N.", referencias APA, etc.) están guardadas en la memoria de la usuaria — ver `/topics/portafolio.md` en el sistema de memoria de Claude.

### ⚠️ Lección aprendida: archivos hardlinkeados en este proyecto
Varias veces `device_commit_files` reportó `"written"` exitosamente pero el archivo en el computador de la usuaria NO se actualizó (se quedó con el contenido viejo) — pasó tanto con PDFs como con `index.tsx`. La causa: los archivos están hardlinkeados (`nlink > 1`, probablemente por git o por OneDrive), y sobreescribir "in place" no siempre rompe el link correctamente sin `force: true`. **Protocolo a seguir de ahora en adelante:** después de cualquier `device_commit_files`, verificar con `device_stage_files` que el contenido nuevo realmente llegó (o pedirle a la usuaria que confirme con `git status` / abriendo el archivo) ANTES de decir que el cambio está listo — no asumir que "written" en la respuesta del tool significa que el archivo cambió de verdad.

## ⚠️ Existe un CUARTO proyecto: `portfolio-bi-es` (versión en español de `portfolio-bi`)

| Carpeta | Repo GitHub | URL en vivo |
|---|---|---|
| `portfolio-bi-es` | `BI_ES` (`mariajimenezchiquinquira-bot/BI_ES`) | proyecto en Vercel llamado `portfolio-bi-es` |

Creado copiando `portfolio-bi` completo (excluyendo `node_modules`, `.git`, `.lovable`) y traduciendo todo el contenido al español. **Nota:** la copia inicial con `robocopy` generó hardlinks en vez de copias independientes (mismo problema que la sección anterior, pero a nivel de sistema de archivos de Windows, no de `device_commit_files`) — hubo que borrar la carpeta y volver a copiar con `Copy-Item -Recurse` en PowerShell para obtener archivos realmente independientes. Si se necesita clonar este patrón para un futuro portafolio "-es", usar `Copy-Item`, no `robocopy`.

### Cambios de contenido respecto a `portfolio-bi` (inglés)
- Todo `src/routes/index.tsx` traducido al español (título, meta SEO, perfil, nombres de proyectos, bloques Problema/Enfoque/Resultado, alt text de imágenes, lista de `SKILLS`).
- Encabezado del hero: se quitó "Business Intelligence Emphasis", queda solo "Estudiante de Ingeniería Industrial" (mismo cambio aplicado en los otros 3 portafolios en esa misma sesión).
- Botón "View on GitHub" → "Ver en GitHub" (traducido en `src/components/portfolio/ProjectCard.tsx` — **solo en la copia de este proyecto**, no afecta a `portfolio-bi` ni a los demás, porque cada proyecto tiene su propia copia del componente).
- Encabezado de sección "Habilidades" se cambió a **"Skills"** por preferencia explícita de la usuaria (inconsistencia intencional: el resto de la sección/página sigue en español, pero ese título específico se dejó en inglés).
- Se quitó "Notion" y "Jira" del array `SKILLS` (ya se habían quitado antes del CV de BI y del `portfolio-bi` en inglés, por no ser herramientas realmente usadas en el día a día — se replicó la misma decisión aquí para mantener consistencia entre el CV de BI y ambos portafolios de BI).

### Imágenes reemplazadas por versiones en español
Todas en `src/assets/projects/`, mismo nombre de archivo que en `portfolio-bi` (inglés), contenido reemplazado por gráficas re-generadas con textos/etiquetas en español:
- `wework-timeline.png`, `wework-losses-donut.png`, `wework-valuation.png`
- `budlight-ranking.png`, `budlight-market-share.png`, `budlight-sales-volume.png`
- `churn-capital-loss-dashboard-v2.png` (dashboard de Power BI, screenshot en español)

**Nota sobre un bug intermitente:** en una ronda de subida, 2 de las 3 imágenes de Bud Light aparecieron rotas en el sitio en vivo (ícono de imagen no cargada) mientras la tercera sí se veía bien, a pesar de que `git log`/`git status` confirmaban que los 3 archivos estaban correctamente commiteados y pusheados con tamaños razonables. Se resolvió re-escribiendo y re-commiteando los 3 archivos con `force: true` — probablemente fue un problema de caché del CDN de Vercel/navegador que no se invalidó bien tras el primer deploy, no un problema real de los archivos ni del código. Si vuelve a pasar: forzar un nuevo commit de las imágenes afectadas (aunque el contenido sea el mismo) y probar en ventana de incógnito antes de investigar más a fondo.

### PDFs reemplazados
- `public/docs/WeWork_Case_Study_Analysis.pdf` → versión en español ("WeWork: Análisis de Caso").
- `public/docs/BudLight_Case_Study_Analysis.pdf` → versión en español ("Bud Light: Análisis de Caso").
- Mismo nombre de archivo que en `portfolio-bi` (inglés) — solo cambia el contenido/idioma del PDF.

### Notebook y galería de segmentación de tarjetas (esto se hizo en `portfolio-data-analysis-es`, no en `portfolio-bi-es`)
Aunque relacionado, este cambio fue en el proyecto `portfolio-data-analysis-es`, no en `portfolio-bi-es` (que ya no tiene esa sección — ver nota arriba de que se quitó "Customer Segmentation" de `portfolio-bi`). Se documenta aquí por si en el futuro se vuelve a agregar esa sección a `portfolio-bi-es`:
- Se reemplazó `public/ConsumoTarjetasCredito.html` (notebook exportado) por una versión en español subida por la usuaria.
- El notebook en español traía 8 gráficas; se usaron solo las 6 que ya estaban en la galería (se decidió no agregar las 2 extra — "Distribución de Clientes por Cluster" y "Gasto por Momento del Día" — para no cambiar el diseño existente).

## Limpieza de archivos sueltos en `portfolio-bi-es` (sesión posterior)

Se revisó qué assets en `src/assets/projects/`, `public/docs/` y `public/` ya no estaban referenciados en `src/routes/index.tsx` (quedaron de secciones removidas: Bud Light, Nu Split, Customer Segmentation, Vehicle Contract Automation) y se eliminaron:

- Imágenes: `budlight-market-share.png`, `budlight-ranking.png`, `budlight-sales-volume.png`, `nusplit-jira-board.png`, `nusplit-notion-cover.png`, `nusplit-notion-timeline-backlog.png`, `nusplit-tableau-dashboard.png`, `segmentation-2-domestic-vs-international.png`, `segmentation-4-dominant-category.png`, `segmentation-5-elbow-method.png`, `segmentation-6-avg-transaction-by-cluster.png`, `segmentation-card-franchise.png`, `segmentation-weekday-heatmap.png`, `n8n-confirmation-message.png`, `n8n-flow-diagram.png`, `n8n-sheets.png`.
- `public/docs/vehicle-contract-automation-technical-documentation.pdf`.
- `public/ConsumoTarjetasCredito.html`.

Assets que quedaron (sí están en uso): `churn-capital-loss-dashboard-v2.png`, las 4 imágenes de `payrasplit-*.png`, las 3 de `wework-*.png`, y los PDFs `WeWork_Case_Study_Analysis.pdf` y `BudLight_Case_Study_Analysis.pdf`.

## Actualización de contenido — proyecto WeWork y footer (sept 2026)

### Footer
- "Skills" → "Skills & Tools".
- Línea de copyright simplificada: "© 2026 María José Jiménez" → "© María José Jiménez".

### Proyecto Bud Light
- Se eliminó por completo la card del proyecto Bud Light/AB InBev (incluyendo sus imports de imágenes ya no usados).

### Proyecto Payra Split (nuevo)
- Se agregó la card de Payra Split, copiada de `portfolio-product-es`, ubicada justo debajo de la card de WeWork.
- Se agregaron 4 imágenes nuevas: `payrasplit-jira-board.png`, `payrasplit-notion-cover.png`, `payrasplit-notion-timeline-backlog.png`, `payrasplit-tableau-dashboard.png`.

### Proyecto "Análisis de Fuga de Clientes y Pérdida de Capital"
- Título actualizado a "Análisis — Fuga de Clientes y Pérdida de Capital".
- Texto de Problema/Enfoque/Resultados reescrito con la nueva redacción proporcionada por la usuaria.

### Proyecto WeWork (varias rondas de ajuste en la misma sesión)
- Título final: **"WeWork — Business Case"**.
- Tags finales: `Business Intelligence`, `Business Strategy`, `Financial Analysis`.
- Estructura de texto final: **Problema / Análisis / Insight** (se probaron versiones intermedias con Enfoque/Resultado y con un bloque extra de "Valor para la toma de decisiones", pero se descartaron a favor de esta versión más simple).
- Botón "Ver análisis completo" (`DocsLink`): se reemplazó el archivo enlazado de PDF a HTML — ahora apunta a `public/docs/WeWork_Case_Study_Analysis.html` (documento autocontenido con gráficas SVG, en español).
- Imágenes: se reemplazaron las 3 gráficas individuales (`wework-timeline.png`, `wework-valuation.png`, `wework-losses-donut.png`) por una sola imagen de dashboard combinado, `wework-dashboard-overview.png`, con layout de una sola imagen centrada (en vez del grid de 3 columnas). Los 3 archivos antiguos se eliminaron de `src/assets/projects/`.
- Esta imagen de dashboard se volvió a reemplazar dos veces más en la misma sesión a medida que la usuaria refinó el screenshot; en un intento intermedio se subió por error la versión en inglés (destinada a `portfolio-bi`) — se corrigió verificando el contenido real del archivo en el dispositivo antes de confirmar el cambio como terminado.

### Lección reforzada
- `device_commit_files` puede reportar éxito ("written") sin que el contenido real en el dispositivo de la usuaria coincida con el archivo fuente, especialmente al reutilizar el mismo nombre de archivo (`wework-dashboard-overview.png`) entre `portfolio-bi` y `portfolio-bi-es`. Protocolo: después de cada escritura de imagen, volver a leer el archivo desde el dispositivo (`device_stage_files` + inspección visual) antes de dar el cambio por confirmado, y si persiste, usar `fileUuid` en vez de `stagedPath` y/o cambiar el nombre del archivo staged para evitar colisiones de caché.
