// Função para rolar suavemente até um elemento
function scrollToElement(element) {
    element.scrollIntoView({
        behavior: 'smooth', // Comportamento suave
        block: 'start' // Alinha o topo do elemento com o topo da janela
    });
}

// Verifica se há um hash na URL ao carregar a página
window.addEventListener('load', function () {
    const hash = window.location.hash; // Pega o hash da URL (ex: #equipe)
    if (hash) {
        const targetElement = document.querySelector(hash); // Seleciona o elemento alvo
        if (targetElement) {
            // Rola suavemente até o elemento
            scrollToElement(targetElement);
        }
    }
});

// Adiciona smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão do link
        const targetId = this.getAttribute('href'); // Pega o ID do alvo
        const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

        if (targetElement) {
            scrollToElement(targetElement); // Rola suavemente até o elemento
        }
    });
});

// Adiciona smooth scroll para links entre páginas
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href'); // Pega o href do link
        const [page, hash] = href.split('#'); // Separa a página do hash

        if (page && hash) {
            e.preventDefault(); // Evita o comportamento padrão do link
            window.location.href = page; // Redireciona para a página
            setTimeout(() => {
                const targetElement = document.querySelector(`#${hash}`); // Seleciona o elemento alvo
                if (targetElement) {
                    scrollToElement(targetElement); // Rola suavemente até o elemento
                }
            }, 100); // Aguarda 100ms para garantir que a página foi carregada
        }
    });
});

// Validação do formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso!');
        document.getElementById('form-contato').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Ativar transição suave ao rolar a página
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < window.innerHeight - 100 && sectionBottom > 0) {
            section.classList.add('visible');
        }
    });
});

// Garantir que a primeira seção seja visível ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('#hero');
    heroSection.classList.add('visible');
});