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
    fadeInSections(); // Executa a função assim que a página carrega
});

function agendarConsulta(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    
    if (nome && idade) {
        const mensagem = `Olá, me chamo ${nome}, tenho ${idade} anos. Gostaria de agendar uma consulta.`;
        const numeroWhatsApp = "5511940159399"; // Substitua pelo número do WhatsApp com código do país e DDD
        const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        
        window.open(link, "_blank"); // Abre o WhatsApp em nova guia
    } else {
        alert("Preencha todos os campos!");
    }
}

