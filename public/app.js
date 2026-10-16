const form = document.querySelector("#chat-form");
const input = document.querySelector("#message-input");
const sendButton = document.querySelector("#send-button");
const messages = document.querySelector("#messages");
const typingIndicator = document.querySelector("#typing-indicator");
const formError = document.querySelector("#form-error");

let conversationId = null;

function appendMessage(text, sender) {
  const article = document.createElement("article");
  article.className = `message ${sender}-message`;

  if (sender === "assistant") {

    const content = document.createElement("div");
    content.className = "message-content";

    const author = document.createElement("p");
    author.className = "message-author";
    author.textContent = "Río Claro - ";

    const role = document.createElement("span");
    role.textContent = "Asistente Inteligente";

    author.append(role);

    const messageText = document.createElement("p");
    messageText.className = "message-text";
    
    // LIMPIEZA DE TEXTO Y SALTOS DE LÍNEA
    // 1. Eliminar caracteres ocultos y basura hexadecimal
    let textoLimpio = text.replace(/[\uE000-\uF8FF]/g, '');
    
    // 2. Traducir el Markdown (listas, negritas, saltos) a código HTML automático
    messageText.innerHTML = marked.parse(textoLimpio);

    content.append(author, messageText);
    article.append(content);

  } else {

    const messageText = document.createElement("p");
    messageText.className = "message-text";
    messageText.textContent = text; // Mantenemos textContent para el usuario por seguridad

    article.append(messageText);

  }

  messages.append(article);
  
  // Auto-scroll suave hacia el nuevo mensaje
  setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }, 100);

}

form.addEventListener("submit", async (event) => {

  event.preventDefault();

  const message = input.value.trim();

  formError.hidden = true;

  if (!message) {

    formError.textContent =
      "Escribe una consulta antes de enviar.";

    formError.hidden = false;

    input.focus();

    return;
  }

  if (message.length > 2000) {

    formError.textContent =
      "La consulta no puede superar los 2000 caracteres.";

    formError.hidden = false;

    input.focus();

    return;
  }

  appendMessage(message, "user");

  input.value = "";

  input.style.height = "auto";

  sendButton.disabled = true;

  typingIndicator.hidden = false;

  try {

    const response = await fetch("/api/chat", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        message,
        conversation_id: conversationId,
      }),

    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "Chat request failed."
      );
    }

    conversationId = data.conversation_id;

    appendMessage(
      data.reply,
      "assistant"
    );

  } catch {

    appendMessage(
      "No fue posible obtener una respuesta. Inténtalo de nuevo.",
      "assistant"
    );

  } finally {

    sendButton.disabled = false;

    typingIndicator.hidden = true;

    input.focus();

  }

});

input.addEventListener("keydown", (event) => {

  if (
    event.key === "Enter" &&
    !event.shiftKey
  ) {

    event.preventDefault();

    form.requestSubmit();

  }

});

input.addEventListener("input", () => {

  input.style.height = "auto";

  input.style.height =
    `${Math.min(input.scrollHeight, 140)}px`;

  formError.hidden = true;

});