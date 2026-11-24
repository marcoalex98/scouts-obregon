import type { SectionSlug } from './sections';
import { site } from './site';

type Topic = { title: string; text: string };
type Question = { question: string; answer: string };
export type SectionDetails = {
  intro: string[];
  focus: string;
  activities: Topic[];
  learning: Topic[];
  journeyTitle: string;
  journey: Topic[];
  guidanceTitle: string;
  guidanceIntro: string;
  guidance: Topic[];
  questions: Question[];
};

// Educational examples, not a confirmed programme or calendar for the local group.
// Add only real photographs with explicit publication consent; never infer it from receipt.
export const sectionDetails = {
  manada: {
    focus: 'Descubrir el mundo a través del juego, la imaginación y la amistad.',
    intro: [
      'La Manada de Lobatos es la etapa de los primeros descubrimientos. El juego ofrece una forma cercana de explorar lo que nos rodea, expresar ideas y aprender a convivir. Una historia, un reto sencillo o una tarea compartida pueden abrir muchas preguntas y nuevas maneras de resolverlas.',
      'La propuesta pone el énfasis en participar, probar y aprender poco a poco. Compartir materiales, escuchar a otra persona o pedir ayuda también son pequeños logros. El interés está en el esfuerzo y en el crecimiento de cada niña y niño, sin convertir cada experiencia en una competencia.',
      'Dentro del Grupo Scout 5 Mak’Chu, Manada es la puerta de entrada para este rango de edad. Esta página explica el enfoque de la etapa y ofrece ejemplos para entenderlo. Las condiciones de incorporación se confirmarán con el grupo; el lugar y el horario de reunión aparecen más abajo.',
    ],
    activities: [
      { title: 'Historias que invitan a jugar', text: 'Inventar personajes, resolver una misión imaginaria o representar un cuento permite poner en palabras lo que sentimos. La imaginación ayuda a mirar una misma situación desde distintas perspectivas.' },
      { title: 'Juegos de cooperación', text: 'Un reto en el que cada participante aporta algo puede ayudar a practicar turnos, acuerdos y escucha. La pregunta deja de ser quién termina primero y pasa a ser cómo lo conseguimos juntos.' },
      { title: 'Pequeños descubrimientos', text: 'Observar formas, sonidos o cambios en el entorno despierta la curiosidad. Una exploración sencilla puede convertirse en una conversación sobre cómo cuidar los espacios que compartimos.' },
      { title: 'Crear con las manos', text: 'Dibujar, construir con materiales sencillos o inventar un objeto da espacio a la creatividad. También permite practicar la paciencia, cuidar los materiales y buscar otra solución cuando algo no sale.' },
      { title: 'Expresarse y escuchar', text: 'Una canción, una pequeña representación o una ronda de ideas pueden ser oportunidades para hablar frente a otras personas. Participar también significa escuchar con atención y respetar maneras diferentes de expresarse.' },
      { title: 'Primeros gestos de servicio', text: 'Ayudar a ordenar un espacio o colaborar en una tarea común permite reconocer que nuestras acciones cuentan. Son ejemplos cotidianos de responsabilidad y cuidado por los demás.' },
    ],
    learning: [
      { title: 'Confianza para intentar', text: 'Animarse a probar algo nuevo, reconocer el esfuerzo y entender que equivocarse es parte de aprender.' },
      { title: 'Amistad y empatía', text: 'Compartir, reconocer cómo se siente otra persona y encontrar formas amables de resolver desacuerdos.' },
      { title: 'Autonomía cotidiana', text: 'Cuidar sus pertenencias, tomar pequeñas decisiones y asumir tareas acordes con su etapa.' },
      { title: 'Curiosidad', text: 'Observar con atención, hacer preguntas y buscar respuestas a través de la experiencia.' },
      { title: 'Comunicación', text: 'Expresar necesidades e ideas, respetar turnos y aprender a pedir ayuda cuando hace falta.' },
      { title: 'Cuidado del entorno', text: 'Reconocer que los materiales, los espacios compartidos y la naturaleza merecen atención y respeto.' },
    ],
    journeyTitle: 'Del juego a un pequeño gran logro.',
    journey: [
      { title: 'Imaginar', text: 'Una pregunta o una historia despierta el interés y da sentido al reto.' },
      { title: 'Intentar', text: 'Probar ideas y descubrir qué funciona permite aprender con la experiencia.' },
      { title: 'Colaborar', text: 'Escuchar y compartir responsabilidades ayuda a encontrar una solución en equipo.' },
      { title: 'Compartir', text: 'Contar qué gustó, qué costó trabajo y qué se aprendió permite reconocer el avance.' },
    ],
    guidanceTitle: 'Acompañar sus primeros pasos.',
    guidanceIntro: 'Para madres, padres y tutores, conocer la propuesta y conversar con el grupo es tan importante como el entusiasmo por empezar. Estas ideas pueden ayudar a preparar ese primer acercamiento.',
    guidance: [
      { title: 'Escuchar sus intereses', text: 'Hablen sobre qué le gustaría descubrir y qué le genera dudas. No hace falta que todas las niñas y niños disfruten de las mismas actividades ni que se adapten al mismo ritmo.' },
      { title: 'Conversar antes de asistir', text: 'Revisa la ubicación y el horario de esta página y conversa con el grupo sobre cómo sería el primer acercamiento. Pregunta por el acompañamiento adulto, la comunicación con familias y las condiciones de participación.' },
      { title: 'Preparar sin adelantarse', text: 'Pregunta qué materiales o vestimenta hacen falta antes de realizar compras. El uniforme, las cuotas y los requisitos de ingreso aún están pendientes de confirmación para este sitio.' },
      { title: 'Reconocer el proceso', text: 'Después de una experiencia, pregunta qué disfrutó, qué descubrió y a quién ayudó. Valorar esos pequeños pasos puede abrir una conversación más útil que centrarse solo en el resultado.' },
    ],
    questions: [
      { question: '¿Qué es la Manada de Lobatos?', answer: 'Es la sección que introduce a las niñas y niños de esta etapa en la experiencia scout mediante el juego, la imaginación y la convivencia. Busca dar espacio a la curiosidad, la amistad y las primeras responsabilidades compartidas.' },
      { question: '¿Necesita haber participado antes en scouts?', answer: 'La explicación de esta etapa parte de los primeros descubrimientos; no necesitas conocer términos scouts para entenderla. El grupo confirmará los requisitos y la forma de incorporación antes de asistir.' },
      { question: '¿Qué pasa si le cuesta integrarse a un grupo nuevo?', answer: 'Conviene conversar con quienes acompañan la sección sobre sus intereses, inquietudes y necesidades. Pregunta cómo se plantea el primer acercamiento y qué opciones de acompañamiento puede ofrecer el grupo; no se debe dar por hecho un proceso de adaptación específico.' },
      { question: '¿Las familias permanecen durante las actividades?', answer: 'La dinámica de acompañamiento y permanencia de madres, padres o tutores debe confirmarse directamente con el grupo. Este sitio todavía no publica una regla al respecto.' },
      { question: '¿Se realizan campamentos o salidas?', answer: 'Las experiencias fuera del lugar habitual de reunión requieren información específica. Aquí no anunciamos ninguna salida: fechas, actividades, participación, traslados y autorizaciones se confirmarán cuando exista una propuesta del grupo.' },
      { question: '¿Qué hay que comprar para empezar?', answer: 'No hay una lista de compras publicada. Antes de adquirir uniforme o materiales, confirma qué se necesita, cuándo se utiliza y cuáles son las cuotas vigentes, si aplican.' },
      { question: '¿Cómo se comparte información personal o de salud?', answer: 'No publiques datos sensibles en espacios abiertos. Antes de compartir información, pide al grupo que confirme el canal privado autorizado, quién la recibirá y para qué se necesita.' },
    ],
  },
  tropa: {
    focus: 'Explorar en patrulla y aprender a resolver retos en equipo.',
    intro: [
      'En la Tropa de Scouts, la exploración y la vida en patrulla dan lugar a nuevos retos. Una patrulla es un equipo pequeño: un espacio para aportar ideas, organizarse y descubrir que el resultado depende de la colaboración de todas las personas.',
      'Aprender una habilidad tiene más sentido cuando sirve para resolver algo. Por eso, esta etapa conecta la práctica con decisiones concretas: qué necesitamos, cómo nos repartimos el trabajo y qué podemos mejorar después. La responsabilidad crece junto con la confianza.',
      'La Tropa forma parte del camino juvenil del Grupo Scout 5 Mak’Chu. Los ejemplos de esta página ayudan a entender la etapa; no representan actividades, salidas o reuniones ya programadas por el grupo.',
    ],
    activities: [
      { title: 'Retos en patrulla', text: 'Resolver una tarea en equipo puede implicar elegir una estrategia, repartir funciones y ajustar el plan. Cada aportación cuenta, incluida la de quien observa un detalle que los demás no habían visto.' },
      { title: 'Orientación y observación', text: 'Leer una representación del entorno, reconocer referencias o interpretar indicaciones son ejemplos de habilidades de exploración. Lo valioso es comprender cómo se llega a una respuesta, no solo acertarla.' },
      { title: 'Habilidades prácticas', text: 'Practicar nudos o construir una solución sencilla permite relacionar una técnica con una necesidad. Repetir, revisar y mejorar forma parte del aprendizaje; las técnicas concretas dependerán de la propuesta de la sección.' },
      { title: 'Organizar una experiencia', text: 'Pensar qué materiales requiere un reto, cuánto tiempo puede tomar y qué responsabilidades hay que cubrir introduce la planeación. Un plan útil también admite cambios y escucha al equipo.' },
      { title: 'Conocer el entorno', text: 'Observar un espacio natural y conversar sobre su cuidado permite conectar la exploración con la responsabilidad. Las actividades fuera de la sede, cuando se propongan, necesitarán información y condiciones específicas.' },
      { title: 'Ayudar como equipo', text: 'Identificar una tarea que beneficia a otras personas puede dar un propósito común a la patrulla. La colaboración empieza por escuchar qué hace falta y acordar qué está al alcance del equipo.' },
    ],
    learning: [
      { title: 'Trabajo en equipo', text: 'Aportar sin hacerlo todo, escuchar otras propuestas y cumplir los acuerdos compartidos.' },
      { title: 'Responsabilidad', text: 'Entender cómo una tarea personal influye en el resultado y en las otras personas.' },
      { title: 'Habilidades de exploración', text: 'Observar, practicar y relacionar conocimientos con situaciones concretas.' },
      { title: 'Resolución de problemas', text: 'Comparar opciones, probar una solución y revisar por qué funcionó o qué faltó.' },
      { title: 'Liderazgo compartido', text: 'Tomar la iniciativa y dar espacio para que otras personas también puedan hacerlo.' },
      { title: 'Convivencia', text: 'Expresar diferencias con respeto y construir acuerdos que se puedan cumplir.' },
    ],
    journeyTitle: 'Una patrulla. Muchas formas de aportar.',
    journey: [
      { title: 'Entender el reto', text: 'Escuchar al equipo y acordar qué queremos lograr antes de empezar.' },
      { title: 'Organizarnos', text: 'Repartir responsabilidades y preparar lo que necesitamos para intentarlo.' },
      { title: 'Ponerlo a prueba', text: 'Aplicar habilidades y hacer ajustes cuando la experiencia lo pida.' },
      { title: 'Aprender juntos', text: 'Reconocer las aportaciones y decidir qué haríamos diferente la próxima vez.' },
    ],
    guidanceTitle: 'Más autonomía, con comunicación.',
    guidanceIntro: 'La vida en patrulla abre espacio a decisiones y responsabilidades nuevas. Para las familias, acompañar también significa escuchar cómo se vive ese proceso.',
    guidance: [
      { title: 'Hablar de los intereses', text: 'Exploren qué atrae de esta etapa: conocer personas, desarrollar habilidades o participar en retos compartidos. También es útil hablar de lo que genera nervios o dudas.' },
      { title: 'Preguntar por el acompañamiento', text: 'Antes de incorporarse, confirma quién orienta la sección, cómo se comunican las actividades y qué información reciben las familias. Los procedimientos concretos están pendientes de publicar.' },
      { title: 'Preparar cada experiencia', text: 'Los materiales y las condiciones pueden variar. Solicita las indicaciones del grupo antes de hacer compras o dar por hecho una salida, un traslado o una actividad.' },
      { title: 'Valorar la colaboración', text: 'Preguntar cómo se organizó el equipo o qué aportó cada integrante ayuda a reconocer aprendizajes que van más allá de completar una tarea.' },
    ],
    questions: [
      { question: '¿Qué significa trabajar en patrulla?', answer: 'Significa formar parte de un equipo pequeño que comparte retos y responsabilidades. La patrulla ofrece oportunidades para participar, tomar acuerdos y aprender de las habilidades de otras personas.' },
      { question: '¿Hay que venir de Manada para conocer Tropa?', answer: 'Puedes acercarte a conocer la sección que corresponde a tu edad aunque estés explorando el escultismo por primera vez. La incorporación y los requisitos concretos se confirmarán con el grupo.' },
      { question: '¿Todo se trata de competir?', answer: 'El trabajo en equipo, la práctica y la reflexión son parte central del enfoque. Un reto puede tener un resultado, pero también importa cómo se resolvió, cómo se trataron las personas y qué se aprendió.' },
      { question: '¿Qué habilidades se necesitan antes de empezar?', answer: 'La página describe habilidades que se pueden desarrollar, no una prueba de ingreso. Consulta con el grupo las condiciones de participación y comparte tus dudas antes de asistir.' },
      { question: '¿Dónde se anuncian las salidas y campamentos?', answer: 'Este sitio no tiene salidas confirmadas. El grupo deberá informar por su canal autorizado las fechas, condiciones, acompañamiento, traslados y autorizaciones de cada propuesta.' },
      { question: '¿Qué sucede al pasar a la siguiente etapa?', answer: 'Comunidad de Caminantes es la siguiente sección del recorrido. El momento y la forma de transición deben conversarse con el grupo; aquí no se publica un procedimiento automático.' },
    ],
  },
  comunidad: {
    focus: 'Tomar decisiones, explorar intereses y convertir ideas en proyectos.',
    intro: [
      'La Comunidad de Caminantes es una etapa para ganar autonomía y explorar lo que quieres aportar. Los retos dejan más espacio a proponer, decidir y construir proyectos con otras personas, desde los intereses de quienes participan.',
      'Tener una idea es el comienzo. Darle forma implica escuchar otras perspectivas, elegir un objetivo posible y sostener acuerdos. También significa reconocer cuándo hay que pedir apoyo o ajustar lo planeado. El liderazgo se aprende al participar, no solo al dirigir.',
      'En el recorrido del Grupo Scout 5 Mak’Chu, Comunidad conecta la exploración con una participación cada vez más consciente. Las propuestas siguientes son ejemplos educativos, no proyectos o actividades locales ya confirmados.',
    ],
    activities: [
      { title: 'Diseñar un proyecto', text: 'Partir de una inquietud, investigar opciones y definir un resultado posible permite convertir el interés en acción. Un proyecto puede empezar pequeño y ganar profundidad a medida que el equipo aprende.' },
      { title: 'Retos elegidos en equipo', text: 'Escoger un desafío requiere escuchar qué motiva a las demás personas y acordar cómo abordarlo. La elección también implica pensar en los recursos, las condiciones y el apoyo que harían falta.' },
      { title: 'Explorar intereses', text: 'Una investigación, una conversación o una práctica creativa pueden abrir preguntas sobre habilidades y vocaciones. La intención es descubrir posibilidades, sin exigir tener resuelto todo el futuro.' },
      { title: 'Participar en la comunidad', text: 'Observar una necesidad del entorno y escuchar a quienes la viven ayuda a imaginar una colaboración útil. Cualquier proyecto real necesita acuerdos y confirmación antes de anunciarse.' },
      { title: 'Aprender nuevas herramientas', text: 'Comunicar una idea, preparar un presupuesto orientativo o documentar un proceso son ejemplos de habilidades que pueden acompañar un proyecto. La herramienta cobra sentido al ayudar a resolver una necesidad.' },
      { title: 'Revisar las decisiones', text: 'Conversar sobre lo que salió bien, las dificultades y los cambios de plan permite aprender de la experiencia. Evaluar no es buscar culpables: es entender lo sucedido y tomar mejores decisiones después.' },
    ],
    learning: [
      { title: 'Autonomía', text: 'Elegir con información, reconocer límites y hacerse responsable de las decisiones.' },
      { title: 'Planeación', text: 'Convertir una idea en pasos, identificar recursos y dar seguimiento a los acuerdos.' },
      { title: 'Liderazgo', text: 'Facilitar la participación y asumir responsabilidades sin dejar fuera otras voces.' },
      { title: 'Pensamiento crítico', text: 'Hacer preguntas, contrastar puntos de vista y revisar lo que damos por hecho.' },
      { title: 'Comunicación', text: 'Explicar una propuesta, escuchar comentarios y negociar acuerdos con respeto.' },
      { title: 'Compromiso', text: 'Sostener una tarea y comunicar a tiempo cuando las condiciones cambian.' },
    ],
    journeyTitle: 'Una idea puede convertirse en tu próximo reto.',
    journey: [
      { title: 'Preguntar', text: 'Identificar qué nos interesa y qué nos gustaría comprender o cambiar.' },
      { title: 'Proponer', text: 'Compartir opciones y construir un objetivo que tenga sentido para el equipo.' },
      { title: 'Hacer', text: 'Organizar el trabajo, ponerlo en práctica y pedir apoyo cuando sea necesario.' },
      { title: 'Reflexionar', text: 'Reconocer el aprendizaje y decidir qué queremos llevar al siguiente proyecto.' },
    ],
    guidanceTitle: 'Dar espacio para decidir y acompañar.',
    guidanceIntro: 'Para jóvenes y familias, esta etapa puede abrir conversaciones sobre confianza, responsabilidades y proyectos personales. La comunicación ayuda a que ese espacio de autonomía tenga sentido.',
    guidance: [
      { title: 'Poner los intereses sobre la mesa', text: 'Habla de lo que quieres aprender y de cómo te gustaría participar. No necesitas tener una gran idea: una pregunta honesta puede ser un buen punto de partida.' },
      { title: 'Acordar los compromisos', text: 'Revisa el horario de reunión y, antes de incorporarte, pregunta por la participación esperada y la forma de comunicar cambios. Esos acuerdos ayudan a organizar tu tiempo.' },
      { title: 'Conocer las condiciones', text: 'Cada propuesta requiere información sobre su alcance y organización. Las familias deben confirmar con el grupo los canales de comunicación, acompañamiento y autorizaciones correspondientes.' },
      { title: 'Dejar espacio a la reflexión', text: 'Una experiencia puede cambiar tus intereses. Conversar sobre lo que aprendiste y sobre tus nuevas preguntas también forma parte de construir un camino propio.' },
    ],
    questions: [
      { question: '¿Qué distingue a Comunidad de Tropa?', answer: 'Comunidad pone más énfasis en la autonomía, las decisiones y los proyectos. Se mantiene el trabajo compartido, con oportunidades para proponer y dar seguimiento a ideas propias.' },
      { question: '¿Necesito llegar con un proyecto?', answer: 'Los proyectos se presentan aquí como una forma de aprender, no como un requisito de ingreso. Puedes empezar por identificar qué te interesa; confirma con el grupo cómo se organiza la participación.' },
      { question: '¿Puedo participar si nunca he sido scout?', answer: 'Puedes solicitar información sobre la sección que corresponde a tu edad. El grupo confirmará los requisitos y el proceso de incorporación; esta página no presupone experiencia previa.' },
      { question: '¿Cómo se eligen las actividades?', answer: 'La participación y la toma de decisiones forman parte del enfoque de la etapa. La dinámica concreta para elegir y organizar actividades debe confirmarse con quienes acompañan la Comunidad.' },
      { question: '¿Cómo se combina con la escuela?', answer: `Las reuniones son los ${site.meeting.day.toLowerCase()}, de ${site.meeting.hours}. La disponibilidad de tiempo es una conversación importante antes de asumir compromisos; consulta con el grupo la participación esperada en otras actividades.` },
      { question: '¿Cuál es la siguiente sección?', answer: 'El Clan de Rovers continúa el recorrido con énfasis en servicio, compromiso y proyecto de vida. La transición se conversa con el grupo, sin asumir un procedimiento automático.' },
    ],
  },
  clan: {
    focus: 'Servir a la comunidad mientras construyes tu propio proyecto de vida.',
    intro: [
      'El Clan de Rovers vincula el servicio y el compromiso con las decisiones de la vida joven. Es una etapa para preguntarte qué valoras, qué quieres aprender y cómo puedes aportar a tu comunidad desde tus capacidades e intereses.',
      'Un proyecto de vida no es un plan que deba estar resuelto de una vez. Se construye al explorar opciones, asumir compromisos y reflexionar sobre las experiencias. Compartir ese proceso con otras personas puede ampliar la mirada y ayudar a poner las ideas en práctica.',
      'En el Grupo Scout 5 Mak’Chu, esta sección lleva el nombre de Clan de Rovers Filótimos. Los ejemplos que siguen explican el enfoque de la etapa; no anuncian proyectos, alianzas ni actividades locales vigentes.',
    ],
    activities: [
      { title: 'Escuchar antes de servir', text: 'Conocer una situación y escuchar a las personas involucradas ayuda a distinguir una necesidad real de una suposición. El servicio cobra sentido cuando parte del respeto y busca una aportación útil.' },
      { title: 'Construir un proyecto', text: 'Definir objetivos, responsabilidades y recursos convierte una intención en un compromiso concreto. Cualquier colaboración externa necesita acuerdos antes de publicarse como una actividad del Clan.' },
      { title: 'Explorar el rumbo personal', text: 'Reflexionar sobre intereses, estudios, trabajo y valores permite hacer preguntas sobre el futuro. La intención es tomar decisiones más conscientes, sin presentar una sola manera correcta de construir una vida.' },
      { title: 'Compartir habilidades', text: 'Explicar algo que sabes hacer o aprender una habilidad de otra persona puede enriquecer al equipo. Enseñar también invita a ordenar ideas, escuchar preguntas y reconocer lo que falta por aprender.' },
      { title: 'Coordinar con otras personas', text: 'Repartir responsabilidades y dar seguimiento a los acuerdos requiere comunicación. El liderazgo incluye reconocer las capacidades de los demás y cuidar que los compromisos sean realistas.' },
      { title: 'Evaluar lo que dejamos', text: 'Revisar un proyecto implica preguntar si la acción fue útil y qué consecuencias tuvo. Documentar el aprendizaje permite mejorar la siguiente experiencia sin confundir buenas intenciones con resultados comprobados.' },
    ],
    learning: [
      { title: 'Servicio consciente', text: 'Escuchar necesidades y colaborar con respeto, sin decidir por otras personas.' },
      { title: 'Compromiso', text: 'Asumir tareas realistas y responder por los acuerdos que se construyen.' },
      { title: 'Liderazgo', text: 'Coordinar esfuerzos, facilitar decisiones y reconocer el trabajo compartido.' },
      { title: 'Gestión de proyectos', text: 'Definir objetivos, organizar recursos y revisar avances con criterio.' },
      { title: 'Autoconocimiento', text: 'Reconocer intereses, capacidades y límites para orientar las decisiones personales.' },
      { title: 'Ciudadanía activa', text: 'Mirar el entorno con atención y encontrar formas responsables de participar.' },
    ],
    journeyTitle: 'Del propósito a una aportación concreta.',
    journey: [
      { title: 'Escuchar', text: 'Comprender la situación y a las personas antes de proponer una solución.' },
      { title: 'Comprometerse', text: 'Acordar una contribución posible y las responsabilidades que implica.' },
      { title: 'Actuar', text: 'Poner el proyecto en marcha, comunicar avances y ajustar con responsabilidad.' },
      { title: 'Evaluar', text: 'Revisar los resultados y reconocer cómo la experiencia influye en tu camino.' },
    ],
    guidanceTitle: 'Un compromiso que tenga sentido para ti.',
    guidanceIntro: 'Acercarte al Clan es una oportunidad para conocer su enfoque y conversar sobre tus intereses y disponibilidad. Estas preguntas pueden ayudarte a decidir con información.',
    guidance: [
      { title: 'Identifica lo que te mueve', text: 'Piensa qué situaciones de tu comunidad te interesan y qué habilidades quisieras desarrollar. No hace falta presentar una respuesta definitiva para empezar la conversación.' },
      { title: 'Revisa tu disponibilidad', text: 'Considera cómo se relacionaría la participación con tus estudios, trabajo y otros compromisos. Revisa el horario de reunión y conversa sobre la dinámica del Clan antes de asumir nuevas responsabilidades.' },
      { title: 'Conoce al Clan', text: 'Pregunta cómo se organizan los proyectos, cómo se toman acuerdos y qué acompañamiento existe. Los procedimientos específicos de Filótimos están pendientes de publicar.' },
      { title: 'Distingue las formas de participar', text: 'Ser Rover es parte de una sección juvenil. El voluntariado adulto tiene un apartado propio y un proceso distinto; no se presenta como una quinta sección.' },
    ],
    questions: [
      { question: '¿Cómo se llama el Clan del grupo?', answer: 'Su nombre es Clan de Rovers Filótimos, dentro del Grupo Scout 5 Mak’Chu de Ciudad Obregón, Provincia Sonora.' },
      { question: '¿Qué significa proyecto de vida?', answer: 'Es una forma de reflexionar sobre tus valores, intereses y decisiones, y de relacionarlos con acciones concretas. No exige tener definido todo el futuro: puede revisarse a partir de nuevas experiencias.' },
      { question: '¿Necesito experiencia previa en servicio?', answer: 'El servicio es parte del enfoque educativo de la etapa. Los ejemplos de esta página no son requisitos de ingreso; consulta con el grupo el proceso real de incorporación.' },
      { question: '¿Qué proyectos están activos ahora?', answer: 'Todavía no hay proyectos vigentes confirmados para esta página. Publicaremos información cuando el grupo valide el contenido y su difusión, sin asumir que un antecedente histórico sigue activo.' },
      { question: '¿Se puede combinar con estudios o trabajo?', answer: `Nos reunimos los ${site.meeting.day.toLowerCase()}, de ${site.meeting.hours}. Antes de asumir compromisos, conversa sobre tu disponibilidad y la participación esperada en proyectos y otras actividades.` },
      { question: '¿Ser Rover es lo mismo que ser adulto voluntario?', answer: 'No. Clan es una sección juvenil con su propio rango de edad y enfoque formativo. El voluntariado adulto es otra manera de colaborar y tiene un apartado independiente en el sitio.' },
    ],
  },
} satisfies Record<SectionSlug, SectionDetails>;
