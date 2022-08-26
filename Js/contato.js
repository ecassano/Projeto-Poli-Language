
function verificarCampos(a) {
    var inInfo = document.getElementById(a);
    let info = inInfo.value;
    inInfo.style.textDecoration = "none";


    //Campos vazios
    if (info == "") {
        inInfo.style.textDecoration = "underline";
        inInfo.style.textDecorationStyle = "wavy";
        inInfo.style.textDecorationColor = "red";
        inInfo.style.textDecorationThickness = "1px"

    }


    // inNome e inSobrenome
    if (a == "inNome" || a == "inSobrenome") {

        if (info.length > 0) {
            if (info[0] == " ") {
                info = info.replace(" ", "");
                document.getElementById(a).value = info;
            } else {
                let upper = info.charAt(0).toUpperCase();
                info = info.substring(1);
                document.getElementById(a).value = upper + info;
                info = upper + info;
            }
        }

        if (info.match(/[0-9]/g)) {
            inInfo.style.textDecoration = "underline";
            inInfo.style.textDecorationStyle = "wavy";
            inInfo.style.textDecorationColor = "red";
            inInfo.style.textDecorationThickness = "1px"

        }

        var specials = info.match(/\W|_/g);

        if (specials) {
            for (var i = (specials.length - 1); i >= 0; i--) {
                if (specials[i] == " " || specials[i] == "á" || specials[i] == "é" || specials[i] == "í"
                    || specials[i] == "ó" || specials[i] == "ú" || specials[i] == "â" || specials[i] == "ã"
                    || specials[i] == "ê" || specials[i] == "õ" || specials[i] == "ô") {
                    specials.splice(i, 1);
                }
            }
            if (specials.length > 0) {
                inInfo.style.textDecoration = "underline";
                inInfo.style.textDecorationStyle = "wavy";
                inInfo.style.textDecorationColor = "red";
                inInfo.style.textDecorationThickness = "1px";

            }
        }
    }

    if (a == "inEmail") {
        if (info[0] == " ") {
            info = info.replace(" ", "");
            document.getElementById(a).value = info;
        }
    }
}

function verificarCamposBlur(a) {
    var inInfo = document.getElementById(a);
    let info = inInfo.value;
    inInfo.style.textDecoration = "none";


    if (info.indexOf("@") == -1 || info.indexOf("@") != info.lastIndexOf("@") ||
        info.indexOf('.com') == -1 || info.lastIndexOf(".com") != info.indexOf(".com")) {
        inInfo.style.textDecoration = "underline";
        inInfo.style.textDecorationStyle = "wavy";
        inInfo.style.textDecorationColor = "red";
        inInfo.style.textDecorationThickness = "1px";
    }

    for (var i = 0; i < info.length; i++) {
        if (info[i] == " ") {
            info = info.replace(" ", "");
            document.getElementById(a).value = info;
        }
    }
}

function verificarCamposClick() {
    var inNome = document.getElementById("inNome");
    var inSobrenome = document.getElementById("inSobrenome");
    var inEmail = document.getElementById("inEmail");
    var inMensagem = document.getElementById("inMensagem");

    let nome = inNome.value;
    let sobrenome = inSobrenome.value;
    let email = inEmail.value;
    let mensagem = inMensagem.value;

    if(nome == "" || sobrenome == "" || email == "" || mensagem == ""){
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    if (inNome.style.textDecorationStyle == "wavy" || inSobrenome.style.textDecorationStyle == "wavy"
        || inEmail.style.textDecorationStyle == "wavy" || inMensagem.style.textDecorationStyle == "wavy") {
        alert("Falha ao enviar, por favor preencha os campos corretamente.");
        return false;
    } else {
        alert("Enviado com sucesso!");
    }
}