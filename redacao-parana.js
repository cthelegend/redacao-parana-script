// =============================================
// SCRIPT REDAÇÃO PARANÁ - cris15k
// =============================================

(function() {
    let texto = prompt("📝 SCRIPT REDAÇÃO PARANÁ\n\nCole sua redação aqui:", "");

    if (!texto || texto.trim() === "") {
        alert("❌ Nenhum texto foi colado.");
        return;
    }

    texto = texto.trim();

    let velocidade = prompt("Velocidade de digitação:\n\n1 → Lenta\n2 → Rápida (Recomendado)\n3 → Muito Rápida\n\nDigite 1, 2 ou 3:", "2");
    
    let delay = velocidade === "1" ? 80 : velocidade === "3" ? 8 : 25;

    alert("✅ Redação carregada!\n\nAgora clique no campo de digitação da plataforma.\nNão mexa no mouse/teclado.");

    function iniciarDigitacao() {
        let campo = document.activeElement;

        if (!campo || (campo.tagName !== "TEXTAREA" && campo.tagName !== "INPUT" && !campo.isContentEditable)) {
            alert("❌ Clique primeiro no campo onde quer digitar!");
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

                campo.dispatchEvent(new Event('input', {bubbles: true}));
                campo.dispatchEvent(new Event('change', {bubbles: true}));

                index++;
                setTimeout(digitarProximo, delay);
            }
        }

        digitarProximo();
    }

    setTimeout(iniciarDigitacao, 700);

    // Rodapé azul
    let footer = document.createElement("div");
    footer.style.position = "fixed";
    footer.style.bottom = "15px";
    footer.style.left = "15px";
    footer.style.background = "#0066ff";
    footer.style.color = "white";
    footer.style.padding = "10px 15px";
    footer.style.borderRadius = "8px";
    footer.style.fontSize = "14px";
    footer.style.zIndex = "99999999";
    footer.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
    footer.style.cursor = "pointer";
    footer.innerHTML = 'Feito por: <strong>cris15k</strong>';
    
    footer.onclick = () => window.open('https://github.com/cris15k', '_blank');

    document.body.appendChild(footer);

    setTimeout(() => footer.remove(), 8000);

})();
