var elementos = document.querySelectorAll("[type=radio]");

for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener("change", (e) => {
        let marcado = e.target.value;

        if (marcado == "correta") {
            let parentNode = e.target.parentNode;
            parentNode.style.color = "green";
            parentNode.style.fontWeight = "bold";

            let els = parentNode.parentNode.querySelectorAll("[type=radio]");

            for (var j = 0; j < els.length; j++) {
                els[j].disabled = true;
            }

        } else if (marcado == "incorreta") {

            let parentNode = e.target.parentNode;
            parentNode.style.color = "red";

            let els = parentNode.parentNode.querySelectorAll("[type=radio]");

            for (var j = 0; j < els.length; j++) {
                els[j].disabled = true;
            }

            let correta = parentNode.parentNode.querySelector("[value=correta]");
            correta.parentNode.style.color = "green";
            correta.parentNode.style.fontWeight = "bold";
        }
    })
}

function reload() {
    if (confirm("Tem certeza?") == true) {
        location.reload();
    } else {
        return;
    }
}