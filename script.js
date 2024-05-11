// Script JavaScript comum para todas as páginas

// Função para redirecionar para a página principal
function goToPage1() {
    window.location.href = "pagina1.html";
}

// Função para redirecionar para a página 2
function goToPage2() {
    window.location.href = "pagina2.html";
}

// Função para redirecionar para a página 3
function goToPage3() {
    window.location.href = "pagina3.html";
}

// Função para mudar para o tema claro
function switchToLightMode() {
    document.querySelectorAll("body").forEach(function(body) {
        body.style.backgroundColor = "#fff"; // Fundo claro
        body.style.color = "#333"; // Texto escuro
    });
}

// Vinculando as funções aos botões correspondentes
document.addEventListener("DOMContentLoaded", function() {
    // Botão "<" para retornar à página principal ou à página 2, dependendo da página atual
    var backButton = document.querySelector(".left");
    if (backButton) {
        backButton.addEventListener("click", function() {
            var currentPage = window.location.pathname.split("/").pop();
            if (currentPage === "pagina3.html") {
                goToPage2();
            } else {
                goToPage1();
            }
        });
    }

    // Botão ">" para ir para a página 3
    var nextButton = document.querySelector(".right");
    if (nextButton) {
        nextButton.addEventListener("click", goToPage3);
    }

    //Botões "Light/Dark Mode"
    var darkModeButtons = document.querySelectorAll("#dark-mode-toggle");
    darkModeButtons.forEach(function(button) {
        button.addEventListener("click", switchToLightMode);
    });
});

// Variável para controlar o estado do tema
var isLightMode = false;

// Função para alternar entre o tema claro e escuro
function toggleTheme() {
    document.querySelectorAll("body").forEach(function(body) {
        if (isLightMode) {
            // Tema escuro
            body.style.backgroundColor = "#333";
            body.style.color = "#fff";
        } else {
            // Tema claro
            body.style.backgroundColor = "#fff";
            body.style.color = "#333";
        }
    });

    // Atualizar o estado do tema
    isLightMode = !isLightMode;
}

// Vinculando a função ao botão "Light/Dark Mode"
document.addEventListener("DOMContentLoaded", function() {
    var darkModeButtons = document.querySelectorAll("#dark-mode-toggle");
    darkModeButtons.forEach(function(button) {
        button.addEventListener("click", toggleTheme);
    });
});

