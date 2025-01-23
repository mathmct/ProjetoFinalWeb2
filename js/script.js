document.addEventListener("DOMContentLoaded", function() {
    console.log("Script carregado com sucesso!");

    const form = document.querySelector("form");

    if (form) {
        console.log("Página do formulário detectada.");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            let isValid = true;
            let errorMessage = "";

            const nome = document.getElementById("nome").value.trim();
            console.log("Nome inserido:", nome);

            if (!nome) {
                isValid = false;
                errorMessage += "Insira seu Nome\n";
            }

            const email = document.getElementById("email").value.trim();
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!email || !emailPattern.test(email)) {
                isValid = false;
                errorMessage += "Email Inválido\n";
            }

            const telefone = document.getElementById("telefone").value.trim();
            const telefonePattern = /^\(?\d{2}\)?\d{8,9}$/;
            if (!telefone || !telefonePattern.test(telefone)) {
                isValid = false;
                errorMessage += "Telefone Inválido\n";
            }

            if (!isValid) {
                alert("Erros encontrados:\n" + errorMessage);
            } else {
                localStorage.setItem("nomeTorcedor", nome);
                console.log("Nome armazenado com sucesso:", nome);
                alert("Formulário enviado com sucesso!");
                form.reset();
                window.location.href = "index.html";
            }
        });
    }

    const h2Element = document.getElementById("mudarNome");
    if (h2Element) {
        console.log("Página inicial detectada.");
        const nomeArmazenado = localStorage.getItem("nomeTorcedor");
        console.log("Nome recuperado do localStorage:", nomeArmazenado);

        if (nomeArmazenado) {
            h2Element.textContent = `Bem vindo de volta, ${nomeArmazenado}!`;
        }
    }
});
