// == SCRIPT REDAÇÃO PARANÁ ==
// Feito por: cris15k

(function() {
    // Interface inicial
    let texto = prompt("📝 SCRIPT REDAÇÃO PARANÁ\n\nCole sua redação aqui:", "");
    
    if (!texto || texto.trim() === "") {
        alert("❌ Nenhum texto foi colado.");
        return;
    }

    texto = texto.trim();

    // Escolha de velocidade
    let velocidade = prompt("Velocidade de digitação:\n\n1 → Lenta\n2 → Rápida (Recomendado)\n3 → Muito Rápida\n\nDigite 1, 2 ou 3:", "2");
    
    let delay = velocidade === "1" ? 80 : velocidade === "3" ? 8 : 25;

    alert("✅ Redação carregada!\n\nAgora clique no campo de digitação da plataforma e aguarde.\nNão mexa no mouse ou teclado enquanto estiver digitando.");

    // Função principal de digitação
    function iniciarDigitacao() {
        let campo = document.activeElement;

        if (!campo || (campo.tagName !== "TEXTAREA" && campo.tagName !== "INPUT" && !campo.isContentEditable)) {
            alert("❌ Erro: Clique primeiro no campo onde deseja digitar a redação!");
            return;
        }

        let index = 0;

        function digitarProximo() {
            if (index < texto.length) {
                let char = texto[index];

                if (campo.isContentEditable) {
                    document.execCommand('insertText', false, char);
                } else {
                    let start = campo.selectionStart;
                    campo.value = campo.value.substring(0, start) + char + campo.value.substring(campo.selectionEnd);
                    campo.selectionStart = campo.selectionEnd = start + 1;
                }

                // Dispara eventos importantes
                campo.dispatchEvent(new Event('input', { bubbles: true }));
                campo.dispatchEvent(new Event('change', { bubbles: true }));

                index++;
                setTimeout(digitarProximo, delay);
            }
        }

        digitarProximo();
    }

    // Pequeno delay para dar tempo de clicar no campo
    setTimeout(iniciarDigitacao, 800);

    // Rodapé azul "Feito por cris15k"
    let footer = document.createElement("div");
    footer.style.cssText = `
        position: fixed;
        bottom: 15px;
        left: 15px;
        background: #0066ff;
        color: white;
        padding: 10px 14px;
        border-radius: 8px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        z-index: 9999999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        cursor: pointer;
        user-select: none;
    `;
    footer.innerHTML = 'Feito por: <strong>cris15k</strong>';
    footer.title = "Clique para abrir meu GitHub";
    
    footer.onclick = function() {
        window.open('https://github.com/cris15k', '_blank');
    };

    document.body.appendChild(footer);

    // Remove o footer automaticamente após 8 segundos
    setTimeout(() => {
        if (footer.parentNode) footer.parentNode.removeChild(footer);
    }, 8000);

})();
