javascript:(function() {

    let t = prompt("📝 SCRIPT REDAÇÃO PARANÁ\n\nCole sua redação aqui:", "");

    if (!t || t.trim() === "") {
        alert("Nenhum texto colado.");
        return;
    }

    t = t.trim();

    let v = prompt(
        "Velocidade:\n1 = Lenta\n2 = Rápida (recomendado)\n3 = Muito Rápida",
        "2"
    );

    let d = v === "1" ? 80 : v === "3" ? 8 : 25;

    alert("✅ Texto carregado com sucesso!\n\nAgora clique no campo de digitação e não mexa no mouse/teclado.");

    function digitar() {
        let e = document.activeElement;

        if (
            !e ||
            (e.tagName !== "TEXTAREA" &&
                e.tagName !== "INPUT" &&
                !e.isContentEditable)
        ) {
            alert("❌ Clique primeiro no campo onde quer digitar!");
            return;
        }

        let i = 0;

        function prox() {
            if (i < t.length) {
                let c = t[i];

                if (e.isContentEditable) {
                    document.execCommand("insertText", false, c);
                } else {
                    let s = e.selectionStart;

                    e.value =
                        e.value.substring(0, s) +
                        c +
                        e.value.substring(e.selectionEnd);

                    e.selectionStart = e.selectionEnd = s + 1;
                }

                e.dispatchEvent(new Event("input", { bubbles: true }));
                e.dispatchEvent(new Event("change", { bubbles: true }));

                i++;
                setTimeout(prox, d);
            }
        }

        prox();
    }

    setTimeout(digitar, 700);

    let footer = document.createElement("div");

    footer.style.position = "fixed";
    footer.style.bottom = "10px";
    footer.style.left = "10px";
    footer.style.background = "#0066ff";
    footer.style.color = "white";
    footer.style.padding = "8px 12px";
    footer.style.borderRadius = "6px";
    footer.style.fontSize = "13px";
    footer.style.zIndex = "999999";
    footer.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    footer.style.cursor = "pointer";

    footer.innerHTML = 'Feito por: <strong>cris15k</strong>';

    footer.onclick = function () {
        window.open("https://github.com/cris15k", "_blank");
    };

    document.body.appendChild(footer);

    setTimeout(() => {
        footer.remove();
    }, 8000);

})();
