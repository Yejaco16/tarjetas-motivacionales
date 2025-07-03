let alarmTimeout = null;
let selectedVoice = 'chico';
let showingQuestion = true;

// Preguntas y respuestas
const questions = [
  { question: "¿Qué energía, espacio, conciencia y elección puedo ser para recibir más dinero de lo que jamás imaginé, con total facilidad?", answer: "Eres capaz de recibir más de lo que crees. Solo elige permitirlo." },
  { question: "¿Qué tomaría para que el dinero me busque a mí como yo busco el café en las mañanas?", answer: "Deja de buscar y empieza a invitar. El dinero ama el gozo." },
  { question: "Si no tuviera ningún punto de vista sobre el dinero, ¿cuánto podría recibir hoy?", answer: "Libera los prejuicios y abre tu mente a recibir sin límites." },
  { question: "¿Y si el dinero fuera mi amante, cómo le estaría tratando?", answer: "Con amor, respeto y atención, como mereces." },
  { question: "¿Qué está creando escasez en mi vida que podría soltar ahora mismo?", answer: "Deja atrás miedos y creencias que limitan tu abundancia." },
  { question: "¿Qué es el dinero para mí... y de quién aprendí eso?", answer: "Reconocer tu relación con el dinero es el primer paso para transformarla." },
  { question: "¿Qué juicios estoy usando para limitar el dinero que puedo elegir?", answer: "Suelta los juicios y ábrete a nuevas posibilidades." },
  { question: "¿Qué me impide reconocer que ya soy una energía de riqueza?", answer: "Confía en que la riqueza ya fluye en ti, solo debes aceptarla." },
  { question: "¿Cuánto más dinero podría tener si me atreviera a disfrutar sin culpa?", answer: "Permítete disfrutar y merecer todo lo bueno que llega a ti." },
  { question: "¿Qué posibilidades infinitas con el dinero están disponibles hoy que aún no he reconocido?", answer: "Abre tus ojos a las oportunidades que te rodean." },
  { question: "¿Qué debo dejar de controlar para que el dinero fluya con más gozo?", answer: "Suelta el control y permite que la abundancia se manifieste." },
  { question: "¿Estoy dispuesta a recibir dinero de formas inesperadas y sin esfuerzo?", answer: "Acepta lo inesperado, pues allí puede estar tu mayor bendición." },
  { question: "¿Qué estoy evitando o defendiendo que me impide ser millonaria?", answer: "Enfrenta tus bloqueos y permite que el éxito llegue." },
  { question: "¿Qué más es posible con el dinero que nunca nadie me enseñó?", answer: "El dinero es energía: úsalo para crear vida y felicidad." },
  { question: "¿Qué pasaría si dejara de rechazar ser rica?", answer: "Recibirás abundancia y alegría ilimitada." },
  { question: "¿Y si el dinero no fuera un problema… qué elegiría hoy?", answer: "Permítete soñar y crear sin limitaciones." },
  { question: "¿Qué estoy copiando de mi familia sobre el dinero que ya no me sirve?", answer: "Rompe patrones para crear tu propia realidad financiera." },
  { question: "¿Qué tomaría para que el dinero se muestre hoy con facilidad, alegría y gloria?", answer: "Elige la alegría y la gratitud en cada acción." },
  { question: "¿Qué nivel de gratitud y gozo puedo ser hoy para duplicar mis ingresos?", answer: "Cultiva la gratitud y verás multiplicarse tus bendiciones." },
  { question: "¿Cuánto dinero estoy dispuesto(a) a tener sin perder mi esencia?", answer: "El dinero es un reflejo de tu ser, mantente auténtico." },
  { question: "¿Qué conciencia del dinero estoy listo(a) para recibir hoy?", answer: "Abre tu mente a nuevas ideas sobre la riqueza." },
  { question: "¿Qué energía puedo ser para atraer clientes que me paguen con gozo?", answer: "Sé auténtico y ofrece valor con alegría." },
  { question: "¿Qué más puedo vender, crear o elegir que sea una contribución financiera para mí y para el mundo?", answer: "Explora nuevas formas de crear valor y servir." },
  { question: "¿Qué estoy haciendo más difícil de lo que realmente es con el dinero?", answer: "Simplifica tu relación con el dinero y fluye con confianza." },
  { question: "¿Qué parte de mi magia estoy ignorando que crearía más dinero de inmediato?", answer: "Reconoce y usa tus dones para atraer prosperidad." },
  { question: "¿Qué me impide ser el imán que realmente soy para el dinero?", answer: "Cambia creencias limitantes y abraza tu poder." },
  { question: "¿Qué tomaría para elegir más dinero sin tener que justificarlo?", answer: "Acepta la abundancia sin culpa ni justificaciones." },
  { question: "¿Y si el dinero no fuera serio ni pesado, cómo sería?", answer: "Fluye con ligereza y confianza hacia la riqueza." },
  { question: "¿Qué riqueza energética está disponible para mí ahora mismo?", answer: "Estás rodeado de abundancia, solo debes verla." },
  { question: "¿Qué puedo ser o hacer hoy que cree más dinero ahora y para toda la eternidad?", answer: "Crea con amor y propósito, tu riqueza crecerá." },
];

// Mensajes de bienvenida aleatorios
const welcomeMessages = [
  "¡Que tengas un día lleno de energía positiva!",
  "Recuerda que la abundancia empieza en tu mente.",
  "Eres capaz de lograr todo lo que te propongas.",
  "Hoy es un gran día para crecer y prosperar.",
  "La riqueza fluye hacia ti con facilidad.",
  "Confía en ti y en el proceso de la vida.",
  "Tu actitud determina tu éxito.",
  "Cada pequeño paso suma para tu gran meta.",
  "Abre tu corazón y recibe con alegría.",
  "El universo conspira a tu favor hoy.",
  "Sonríe, mereces toda la abundancia.",
  "Tu potencial es ilimitado.",
  "La gratitud atrae más bendiciones.",
  "El dinero es energía, úsala sabiamente.",
  "Piensa en grande y actúa con confianza.",
  "El éxito es tu derecho natural.",
  "Vive con pasión y propósito.",
  "El cambio comienza dentro de ti.",
  "Aprovecha cada oportunidad que llega.",
  "Cree en ti, eres increíble.",
  "El amor y la abundancia van de la mano.",
  "Tu mente es el motor de tu riqueza.",
  "Sé generoso, recibirás más.",
  "Haz que hoy cuente para tu futuro.",
  "Agradece por lo que tienes y llegarán más cosas buenas.",
  "Mantente enfocado en tus metas.",
  "Tú creas tu realidad financiera.",
  "La perseverancia trae grandes recompensas.",
  "Abre las puertas a nuevas oportunidades.",
  "Tu éxito inspira a otros."
];

function saveName() {
  const nameInput = document.getElementById("username");
  const greeting = document.getElementById("greeting");
  const dailyMsg = document.getElementById("dailyMessage");
  const name = nameInput.value.trim();

  if (!name) {
    alert("Por favor, ingresa tu nombre.");
    return;
  }

  localStorage.setItem("username", name);
  greeting.textContent = `Bienvenido/a, ${name}!`;

  // Mensaje aleatorio diario basado en día del mes
  const day = new Date().getDate();
  const messageIndex = (day - 1) % welcomeMessages.length;
  dailyMsg.textContent = welcomeMessages[messageIndex];

  // Ocultar el input y botón al guardar
  document.getElementById("registro-section").style.display = "none";
}

function setVoice(voice) {
  selectedVoice = voice;

  // Cambiar imagen según voz
  const avatar = document.getElementById("avatar");
  if (voice === "chico") {
    avatar.src = "img/chico.jpg";
  } else {
    avatar.src = "img/chica.jpg";
  }
}

function setAlarm() {
  const timeInput = document.getElementById("alarmTime").value;
  const alarmSoundSelect = document.getElementById("alarmSoundSelect").value;
  const alarmSound = document.getElementById("alarmSound");
  const card = document.getElementById("card");
  const controlesSection = document.getElementById("controles-section");

  if (!timeInput) {
    alert("Por favor, selecciona una hora para la alarma.");
    return;
  }

  alarmSound.src = alarmSoundSelect;

  // Calcular ms hasta la alarma
  const now = new Date();
  const [hours, minutes] = timeInput.split(":").map(Number);
  const alarmTime = new Date();
  alarmTime.setHours(hours, minutes, 0, 0);

  if (alarmTime <= now) {
    alarmTime.setDate(alarmTime.getDate() + 1); // Poner para mañana si ya pasó
  }

  const diff = alarmTime - now;

  if (alarmTimeout) clearTimeout(alarmTimeout);

  alarmTimeout = setTimeout(() => {
    playAlarmAndShowCard();
  }, diff);

  alert(`Alarma configurada para las ${timeInput}`);

  // Opcional: ocultar controles al guardar la alarma y mostrar tarjeta vacía con avatar
  controlesSection.style.display = "none";
  card.classList.remove("hidden");

  // Mostrar pregunta y limpiar respuesta
  showingQuestion = true;
  showQAForToday();

}

function playAlarmAndShowCard() {
  const alarmSound = document.getElementById("alarmSound");
  alarmSound.play();

  speakCurrentQA();
}

function speakCurrentQA() {
  const synth = window.speechSynthesis;
  synth.cancel(); // Cancelar cualquier voz previa

  const day = new Date().getDate();
  const index = (day - 1) % questions.length;

  let textToSpeak = "";
  if (showingQuestion) {
    textToSpeak = questions[index].question;
  } else {
    textToSpeak = questions[index].answer;
  }

  // Configurar voz
  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  const voices = synth.getVoices();

  // Buscar voz por género (no perfecto, depende del navegador)
  let voice = null;
  for (let v of voices) {
    if (selectedVoice === "chico" && v.name.toLowerCase().includes("male")) {
      voice = v;
      break;
    }
    if (selectedVoice === "chica" && v.name.toLowerCase().includes("female")) {
      voice = v;
      break;
    }
  }
  // Si no encontró por género, usar primera disponible
  if (!voice && voices.length > 0) voice = voices[0];

  if (voice) utterance.voice = voice;
  utterance.lang = 'es-ES';

  synth.speak(utterance);
}

function showQAForToday() {
  const day = new Date().getDate();
  const index = (day - 1) % questions.length;

  const questionElem = document.getElementById("question");
  const answerElem = document.getElementById("answer");
  const toggleBtn = document.getElementById("toggleQA");

  questionElem.textContent = questions[index].question;
  answerElem.textContent = questions[index].answer;
  answerElem.classList.add("hidden");
  showingQuestion = true;

  toggleBtn.textContent = "Mostrar Respuesta";
  toggleBtn.onclick = () => {
    if (showingQuestion) {
      answerElem.classList.remove("hidden");
      toggleBtn.textContent = "Mostrar Pregunta";
      speakingAnswer();
    } else {
      answerElem.classList.add("hidden");
      toggleBtn.textContent = "Mostrar Respuesta";
      speakingQuestion();
    }
    showingQuestion = !showingQuestion;
  };
}

function speakingQuestion() {
  speakText(document.getElementById("question").textContent);
}
function speakingAnswer() {
  speakText(document.getElementById("answer").textContent);
}

function speakText(text) {
  const synth = window.speechSynthesis;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = synth.getVoices();

  // Voz según género seleccionado
  let voice = null;
  for (let v of voices) {
    if (selectedVoice === "chico" && v.name.toLowerCase().includes("male")) {
      voice = v;
      break;
    }
    if (selectedVoice === "chica" && v.name.toLowerCase().includes("female")) {
      voice = v;
      break;
    }
  }
  if (!voice && voices.length > 0) voice = voices[0];
  if (voice) utterance.voice = voice;
  utterance.lang = 'es-ES';

  synth.speak(utterance);
}

// Al cargar la página mostrar saludo si hay nombre guardado
window.onload = () => {
  const name = localStorage.getItem("username");
  if (name) {
    document.getElementById("registro-section").style.display = "none";
    const greeting = document.getElementById("greeting");
    const dailyMsg = document.getElementById("dailyMessage");
    greeting.textContent = `Bienvenido/a, ${name}!`;

    const day = new Date().getDate();
    const messageIndex = (day - 1) % welcomeMessages.length;
    dailyMsg.textContent = welcomeMessages[messageIndex];
  }
};
