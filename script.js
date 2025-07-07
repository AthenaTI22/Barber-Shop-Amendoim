document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  const campos = formulario.querySelectorAll("input, textarea, select, button");
  const contatoSection = document.getElementById("contato");

  window.agendarServico = function () {
    contatoSection.scrollIntoView({ behavior: "smooth" });
  };

  campos.forEach((campo, index) => {
    campo.style.opacity = 0;
    campo.style.transform = "translateY(20px)";
    setTimeout(() => {
      campo.style.transition = "all 0.6s ease";
      campo.style.opacity = 1;
      campo.style.transform = "translateY(0)";
    }, 200 * index);
  });

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !telefone || !servico || !mensagem) {
      showMensagem("Por favor, preencha todos os campos.", true);
      return;
    }

    showMensagem(`Obrigado, ${nome}! Sua mensagem foi enviada.`, false);
    formulario.reset();
  });

  function showMensagem(texto, erro) {
    let aviso = document.createElement("div");
    aviso.textContent = texto;
    aviso.style.position = "fixed";
    aviso.style.bottom = "20px";
    aviso.style.left = "50%";
    aviso.style.transform = "translateX(-50%)";
    aviso.style.backgroundColor = erro ? "#e91e63" : "#4caf50";
    aviso.style.color = "#fff";
    aviso.style.padding = "1rem 2rem";
    aviso.style.borderRadius = "6px";
    aviso.style.boxShadow = "0 4px 10px rgba(0,0,0,0.4)";
    aviso.style.opacity = 0;
    aviso.style.transition = "opacity 0.5s ease";

    document.body.appendChild(aviso);

    setTimeout(() => {
      aviso.style.opacity = 1;
    }, 100);

    setTimeout(() => {
      aviso.style.opacity = 0;
      setTimeout(() => aviso.remove(), 500);
    }, 3000);
  }
});

