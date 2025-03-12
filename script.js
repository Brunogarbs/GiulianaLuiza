// Animação ao rolar a página (efeito fade-in)
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    
    function fadeInSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", fadeInSections);
    fadeInSections();
});

function agendarConsulta(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value.trim();
    let idade = document.getElementById("idade").value.trim();

    if (!nome || !idade) {
        alert("Preencha todos os campos!");
        return;
    }
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nome)) {
        alert("O nome não pode conter números ou caracteres especiais!");
        return;
    }
    if (isNaN(idade) || idade <= 0) {
        alert("Idade inválida!");
        return;
    }
    const numeroCriptografado = atob("NTUxMTk0MDE1OTM5OQ=="); 
    const mensagem = `Olá, me chamo ${nome}, tenho ${idade} anos. Gostaria de agendar uma consulta.`;
    const link = `https://wa.me/${numeroCriptografado}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank"); 
}

document.addEventListener("DOMContentLoaded", function () {
    const instagramUsername = "giupsico_";
    const instagramBaseUrl = "https://www.instagram.com/";
    document.getElementById("instagramLink").href = instagramBaseUrl + instagramUsername;
    
    const numeroCriptografado = atob("NTUxMTk0MDE1OTM5OQ==");
    const whatsappBaseUrl = "https://wa.me/";
    document.getElementById("whatsappLink").href = whatsappBaseUrl + numeroCriptografado;
});
