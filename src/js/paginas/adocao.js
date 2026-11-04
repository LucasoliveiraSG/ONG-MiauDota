// Validação do formulário
const form = document.getElementById("formulario");
const feedback = document.getElementById("feedback");
const msg = document.getElementById("mensagem");

// Contador em tempo real
const contador = document.getElementById("contador");
const limitemax = msg.getAttribute("maxlenght");
msg.addEventListener("input", () => {
    const digitado = msg.value.length;
    const restantes = digitado - limitemax;
    contador.textContent = restantes;
});

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Leitura dos valores com .trim()
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value;
    const textoMsg = msg.value.trim();

    // Validações
    if (nome.length < 3) {
        feedback.style.color = "red";
        feedback.textContent = "O nome precisa ter pelo menos 3 caracteres.";
        return;
    }
    if (!email.includes("@")) {
        feedback.style.color = "red";
        feedback.textContent = "Insira um e-mail válido.";
        return;
    }
    if (assunto === "") {
        feedback.style.color = "red";
        feedback.textContent = "Selecione um assunto.";
        return;
    }
    if (textoMsg.length < 10) {
        feedback.style.color = "red";
        feedback.textContent = "A mensagem precisa ter pelo menos 10 caracteres.";
        return;
    }

    // Sucesso simulado
    feedback.style.color = "green";
    feedback.textContent = "Mensagem enviada com sucesso! (Simulação)";
    form.reset();
    contador.textContent = "0";
});