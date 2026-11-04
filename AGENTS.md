# Contexto del proyecto: scoutsobregon.com

Este archivo es la fuente de contexto para cualquier agente o sesión de Codex que trabaje en el sitio web `scoutsobregon.com`. Debe leerse antes de diseñar, redactar o implementar. Las instrucciones nuevas del usuario siempre prevalecen sobre este documento.

## 1. Identidad del proyecto

- Sitio: `scoutsobregon.com`.
- Organización: Grupo Scout 5 Mak’Chu.
- Asociación territorial mencionada por el usuario: Provincia Sonora.
- Ubicación: Ciudad Obregón, Sonora, México.
- Responsable del proyecto web: Marco Alejandro Marcial Coronado.
- Contexto de Marco dentro del grupo: Consejero Rover Responsable (CRR) del Clan de Rovers durante 2026.
- Objetivo general: dar presencia digital al grupo, difundir qué ofrece el escultismo en Ciudad Obregón, orientar a madres y padres y facilitar la incorporación de nuevos jóvenes y adultos voluntarios.

El sitio debe comunicar una organización activa, cercana, segura y formativa. No debe sentirse como una página corporativa rígida ni como un sitio exclusivamente infantil.

## 2. Público principal

El contenido debe poder entenderse sin conocimientos previos sobre escultismo.

1. Niñas, niños, adolescentes y jóvenes interesados en participar.
2. Madres, padres y tutores que necesitan información clara y confianza.
3. Personas adultas interesadas en colaborar como voluntarias.
4. Integrantes actuales que buscan actividades, noticias, galería o información del grupo.

El tono debe ser cálido, activo, directo y familiar. Marco prefiere textos breves y concisos: evitar párrafos largos, lenguaje burocrático y explicaciones repetitivas.

## 3. Secciones scouts: fuente de verdad actual

Usar exactamente estos nombres, edades y familias de color. Estos rangos sustituyen cualquier versión histórica distinta.

| Sección | Edades | Color Tailwind | Idea que debe transmitir |
| --- | ---: | --- | --- |
| Manada de Lobatos | 6 a 9 años | `yellow` | descubrimiento, juego, imaginación y primeras aventuras |
| Tropa de Scouts | 10 a 13 años | `green` | exploración, patrullas, habilidades y trabajo en equipo |
| Comunidad de Caminantes | 14 a 17 años | `blue` | retos, autonomía, liderazgo y proyectos |
| Clan de Rovers | 18 a 21 años | `red` | servicio, compromiso, liderazgo y proyecto de vida |

Reglas de implementación:

- Cada sección debe tener una página o apartado propio y una identidad visual basada en su color.
- El color refuerza la sección, pero nunca debe ser el único medio para distinguirla: siempre mostrar nombre, rango de edad e iconografía o fotografía pertinente.
- Mantener el color centralizado en datos o tokens; no dispersar clases Tailwind por todo el proyecto.
- Usar contraste accesible. Ejemplos iniciales: `yellow-400` con texto oscuro; `green-600`, `blue-600` y `red-600` con texto claro. Los tonos exactos pueden ajustarse durante el diseño sin cambiar la familia cromática.
- En fotografías, ilustraciones o recursos generados, respetar la sección correcta. Se sabe que el uniforme de Caminantes es azul y el de Clan es rojo. No inventar los uniformes de Manada o Tropa si no existen referencias aprobadas.

Una estructura de datos conveniente sería equivalente a:

```ts
type ScoutSection = {
  slug: string;
  name: string;
  shortName: string;
  minAge: number;
  maxAge: number;
  color: 'yellow' | 'green' | 'blue' | 'red';
  summary: string;
};
```

La navegación, las tarjetas de Inicio y las páginas de sección deben consumir una misma fuente de datos para evitar edades, nombres o colores inconsistentes.

## 4. Contenido esperado en la página de cada sección

Cada apartado debe ayudar a un visitante a responder rápidamente: “¿Es para mi edad?”, “¿Qué voy a hacer?”, “¿Qué voy a aprender?” y “¿Cómo me uno?”.

Contenido recomendado:

- nombre oficial y rango de edad visible desde el hero;
- descripción breve de la etapa;
- experiencias o actividades habituales, sin prometer actividades que no hayan sido confirmadas;
- habilidades y valores que se desarrollan;
- una pequeña galería real cuando existan fotografías autorizadas;
- preguntas frecuentes útiles para jóvenes y familias;
- llamada a la acción consistente: `Quiero unirme` o `Solicitar información`.

No llenar las páginas con definiciones genéricas copiadas. Priorizar la experiencia real del Grupo 5 Mak’Chu.

## 5. Adultos voluntarios

El sitio debe incluir un apartado independiente llamado **Adultos voluntarios**. No debe tratarse como una quinta sección juvenil ni heredar uno de los cuatro colores de sección.

Objetivos del apartado:

- explicar de forma sencilla cómo una persona adulta puede colaborar;
- mostrar que el voluntariado sostiene las experiencias formativas de las secciones;
- explicar posibles tipos de apoyo sin inventar cargos oficiales;
- aclarar el proceso de contacto, formación y acompañamiento únicamente cuando esos datos sean proporcionados por el grupo;
- responder dudas sobre tiempo, experiencia previa, seguridad y responsabilidades;
- cerrar con una llamada a la acción específica: `Quiero ser voluntario`.

Para su identidad visual usar una base neutral —por ejemplo `slate` o azul marino— combinada con pequeños acentos de los cuatro colores scouts. No asignar una edad mínima exacta en contenido público hasta que Marco confirme el criterio vigente; en conversaciones anteriores se manejó “mayores de 22 años”, pero no debe asumirse como norma oficial.

## 6. Arquitectura de información propuesta

- Inicio
- Conócenos
- Secciones
  - Manada de Lobatos
  - Tropa de Scouts
  - Comunidad de Caminantes
  - Clan de Rovers
- Adultos voluntarios
- Para madres y padres
- Actividades o calendario
- Galería
- Preguntas frecuentes
- Contacto
- Únete a Mak’Chu

El calendario es deseable, pero no debe complicar innecesariamente la primera versión. El sitio se planteó originalmente como estático y actualizable directamente por Marco.

### Profundidad del contenido por ruta

- Inicio mantiene una presentación breve de las cuatro secciones, con enlaces a sus páginas.
- `/secciones` explica y compara las etapas.
- `/secciones/manada`, `/secciones/tropa`, `/secciones/comunidad` y `/secciones/clan` desarrollan actividades orientativas, aprendizajes, acompañamiento, preguntas frecuentes y una galería independiente.
- Las galerías se completan solo con fotografías reales autorizadas. Distinguir ejemplos educativos de actividades locales confirmadas; no convertirlos en promesas o calendario.

## 7. Contenido real ya conocido

Estos antecedentes pueden ayudar a dar autenticidad al sitio, pero deben revisarse por vigencia y autorización antes de publicarse.

### Grupo y Clan

- El Clan de Rovers se documenta como **Clan de Rovers Filótimos**. Usar esta grafía con acento cuando se haga referencia al nombre formal.
- Marco fue aceptado como Consejero Rover Responsable para el periodo enero–diciembre de 2026.
- El horario vigente comunicado por Marco para las reuniones del grupo es sábados de 5:00 a 7:00 p. m. Sustituye el antecedente del Clan de 4:00 a 6:00 p. m.
- Se han explorado lemas como “Guiados por el honor y la amistad”, pero ninguno debe considerarse lema oficial sin confirmación.

### Actividades y proyectos documentados

- Proyecto `Sembrando Reciclaje`, relacionado con servicio comunitario y árboles. Los antecedentes mencionan una primera jornada, árboles destinados a la comunidad y relación con el Museo Sonora de la Revolución. Confirmar cifras, fechas y formulación antes de publicarlo.
- Partidas Rover de Rosa Molina en mayo de 2025 y Daniela Soto en octubre de 2025.
- Acantonamiento de Manadas.
- Participación en la fiesta de aniversario por los 25 años del Clan 104, en Magdalena de Kino.
- Taller scout de mapas y brújula con referencias a Hornos, Buenavista y la presa Oviachic.
- Actividades técnicas y de pionerismo, como el diseño de una balsa scout con cámaras y bambú.

El informe 2025 también contiene nombres de integrantes y datos financieros. Esos datos son internos y no deben publicarse automáticamente.

## 8. Identidad visual conocida

- Pañoleta del grupo: naranja, con línea azul cielo y borde exterior azul marino.
- Colores de las secciones: amarillo, verde, azul y rojo según la tabla de este archivo.
- La identidad general puede tomar la pañoleta como elemento unificador, sin competir con los colores de cada sección.
- Evitar una estética genérica de campamento estadounidense. El sitio debe sentirse local, propio de Ciudad Obregón y del Grupo 5 Mak’Chu.
- Usar fotografías reales del grupo siempre que exista autorización. No sustituir historia real por imágenes de stock engañosas.

### Tema principal y variantes por sección

- El color principal por defecto del sitio es la familia `purple` de Tailwind. Esta decisión del usuario prevalece sobre cualquier propuesta anterior de color principal.
- Las páginas generales, incluido Adultos voluntarios, usan el tema `purple`. El voluntariado mantiene superficies neutrales y puede incluir pequeños acentos de las cuatro secciones, sin convertirse en una quinta sección juvenil.
- Al entrar en una sección, el color principal cambia para toda su página: Manada de Lobatos usa `yellow`; Tropa de Scouts, `green`; Comunidad de Caminantes, `blue`; Clan de Rovers, `red`.
- Botones, enlaces, estados activos de navegación, indicadores de foco y acentos visuales compartidos deben consumir el tema vigente mediante tokens centralizados. Evitar colores principales fijos dispersos en componentes.
- Resolver el tema en el HTML inicial de cada página, también cuando se acceda directamente desde un buscador o se recargue. No depender de un clic anterior ni de JavaScript del cliente para obtener el color correcto.
- Al regresar a una página general se recupera `purple`; no persistir el tema de una sección como preferencia global.
- Conservar los colores originales de la pañoleta, los logotipos y las fotografías. Las tarjetas de secciones en páginas generales pueden mostrar el color propio de cada sección.
- Elegir los tonos y colores de texto para asegurar contraste accesible en cada tema, especialmente en Manada. El tema no sustituye los nombres y rangos de edad visibles.

### Apariencia clara y oscura

- El modo por defecto es `light`; sin selección manual, seguir la preferencia del sistema mediante `prefers-color-scheme: dark`, incluidos cambios con la página abierta.
- El menú lateral incluye un switch light/dark. Guardar la selección manual en localStorage y aplicarla antes del primer render al navegar o recargar. Sin selección manual, detectar y aplicar la preferencia del sistema en segundo plano, sin textos de estado, notificaciones ni botón para usar la configuración del sistema. Si el almacenamiento no está disponible, el switch debe seguir funcionando en la página actual.
- El menú lateral bloquea el scroll de fondo y se cierra con su botón, Escape, el fondo desenfocado o la navegación. Restaurar siempre el scroll; no conservar el menú abierto al volver mediante el historial.
- El modo claro u oscuro es independiente de la identidad de sección: conservar `data-theme` para `purple`, `yellow`, `green`, `blue` y `red`.
- Centralizar superficies, textos, bordes y variantes de cada paleta en tokens. Conservar contraste legible en los dos modos y los colores originales de logotipos y fotografías.

## 9. Preferencias técnicas y de trabajo

Marco es desarrollador front-end y trabaja habitualmente con Vue 3, TypeScript, Tailwind, Vite y Astro. Para este proyecto ya se había considerado un sitio estático.

Preferencia inicial, salvo que el repositorio o una instrucción posterior indiquen otra cosa:

- Astro para páginas estáticas y SEO;
- TypeScript;
- Tailwind CSS;
- componentes reutilizables y contenido basado en datos;
- JavaScript del cliente solo donde aporte valor real;
- diseño responsive empezando por móvil;
- HTML semántico, navegación por teclado y contraste accesible;
- imágenes optimizadas, carga diferida y buen rendimiento;
- metadatos locales orientados a búsquedas como “scouts en Ciudad Obregón”.

Antes de modificar un repositorio existente, inspeccionar su stack y sus convenciones. No reemplazar una base ya construida únicamente para ajustarla a estas preferencias.

## 10. Privacidad y seguridad

El sitio involucra principalmente a menores de edad. Aplicar estas reglas en todo momento:

- no publicar nombres completos, teléfonos, correos personales, ubicaciones precisas o rutinas de menores sin autorización explícita;
- no inferir permisos de imagen por el simple hecho de recibir fotografías;
- evitar calendarios públicos con información que comprometa la seguridad de participantes;
- usar un canal institucional de contacto cuando sea proporcionado;
- no inventar protocolos, acreditaciones, cargos, cuotas, horarios ni requisitos;
- tratar nombres de integrantes, reportes financieros e informes internos como información no publicable por defecto.

## 11. Datos pendientes de solicitar

### Ubicación y horario autorizados para publicar

- Reuniones del grupo: sábados de 5:00 a 7:00 p. m., hora local de Ciudad Obregón.
- Parque de la colonia del Valle, frente a Plaza Tutuli, detrás de KFC, Ciudad Obregón, Sonora.
- Enlace proporcionado por Marco: https://maps.app.goo.gl/EnxtCn9FLkfAmh5g9
- El enlace resuelve a Grupo SCOUT 5 Mak’Chu; coordenadas del marcador: 27.4956628, -109.947079.
- Centralizar estos datos en `site.meeting`. Esta autorización corresponde al punto de encuentro y horario general del grupo; no autoriza publicar itinerarios ni datos personales de menores.

### Datos aún pendientes

No bloquear la estructura inicial por estos datos, pero usar marcadores claramente identificables y pedirlos antes de publicar:

- logotipo oficial y manual de identidad, si existe;
- fotografías autorizadas;
- historia oficial y fecha de fundación del Grupo 5 Mak’Chu;
- cambios o excepciones al lugar y horario general, si deben anunciarse;
- teléfono, correo, WhatsApp y redes sociales institucionales;
- proceso real de inscripción y de incorporación de adultos voluntarios;
- cuotas o requisitos, si deben aparecer;
- responsables públicos de cada sección;
- política de privacidad y consentimiento para formularios;
- actividades próximas que alimentarán el calendario.

## 12. Reglas para Codex

1. Dar prioridad a los datos actuales de la conversación sobre antecedentes históricos.
2. No inventar información institucional para completar una maqueta. Usar marcadores honestos cuando falte contenido.
3. Conservar exactamente las edades actuales: Manada 6–9, Tropa 10–13, Comunidad 14–17 y Clan 18–21.
4. Mantener la relación fija entre sección y color Tailwind.
5. Diseñar Inicio como una entrada al grupo completo, no como una página centrada solo en el Clan.
6. Crear una ruta clara tanto para familias como para adultos voluntarios.
7. Mantener los textos públicos breves, concretos y fáciles de escanear.
8. No exponer datos personales o internos incluidos en este contexto.
9. Centralizar contenido repetido para evitar inconsistencias.
10. Antes de desplegar, revisar accesibilidad, rendimiento, SEO, formularios, enlaces y vista móvil.
