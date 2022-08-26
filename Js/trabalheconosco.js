//Function Blur
function verificarCamposBlur(a) {
    var inInfo = document.getElementById(a);
    document.getElementById(a).value = inInfo.value.trim();
    let info = inInfo.value;
    inInfo.style.textDecoration = "none";

    if (info == "") {
        inInfo.style.textDecoration = "underline";
        inInfo.style.textDecorationStyle = "wavy";
        inInfo.style.textDecorationColor = "red";
        inInfo.style.textDecorationThickness = "1px";
    }

    if (a == "inNome" || a == "inSobrenome" || a == "inNomeMae" || a == "inNomePai" || a == "inPais" || a == "inCidade" || a == "inBairro" || a == "inProfissao") {
        if (info.match(/[0-9]/g)) {
            inInfo.style.textDecoration = "underline";
            inInfo.style.textDecorationStyle = "wavy";
            inInfo.style.textDecorationColor = "red";
            inInfo.style.textDecorationThickness = "1px";
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

    if (a == "inCPF" || a == "inID" || a == "inCNH" || a == "inNumero") {
        for (var j = 0; j < info.length; j++) {
            if (isNaN(info[j])) {
                inInfo.style.textDecoration = "underline";
                inInfo.style.textDecorationStyle = "wavy";
                inInfo.style.textDecorationColor = "red";
                inInfo.style.textDecorationThickness = "1px";
            }
        }
    }

    if (a == "inCPF" || a == "inCNH" || a == "inTel" || a == "inCel") {
        if (info.length != 11) {
            inInfo.style.textDecoration = "underline";
            inInfo.style.textDecorationStyle = "wavy";
            inInfo.style.textDecorationColor = "red";
            inInfo.style.textDecorationThickness = "1px";
        }
    }

    if(a == "inID"){
        if(info.length != 9){
            inInfo.style.textDecoration = "underline";
            inInfo.style.textDecorationStyle = "wavy";
            inInfo.style.textDecorationColor = "red";
            inInfo.style.textDecorationThickness = "1px";
        }
    }

    if (a == "inCPF" && info.length == 11) {
        info = info.substring(0, 3) + "." + info.substring(3, 6) + "." + info.substring(6, 9) + "-" + info.substring(9);
        document.getElementById(a).value = info;
    }

    if (a == "inID" && info.length == 9) {
        info = info.substring(0, 2) + "." + info.substring(2, 5) + "." + info.substring(5, 8) + "-" + info.substring(8);
        document.getElementById(a).value = info;
    }

    if (a == "inCel" && info.length == 11) {
        info = "(" + info.substring(0, 2) + ") " + info.substring(2);
        document.getElementById(a).value = info;
    }

    if (a == "inEndereco") {
        var specials = info.match(/\W|_/g);

        if (specials) {
            for (var i = (specials.length - 1); i >= 0; i--) {
                if (specials[i] == " " || specials[i] == "á" || specials[i] == "é" || specials[i] == "í"
                    || specials[i] == "ó" || specials[i] == "ú" || specials[i] == "â" || specials[i] == "ã"
                    || specials[i] == "ê" || specials[i] == "õ" || specials[i] == "ô" || specials[i] == ".") {
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

        if (info.match(/[0-9]/g)) {
            inInfo.style.textDecoration = "underline";
            inInfo.style.textDecorationStyle = "wavy";
            inInfo.style.textDecorationColor = "red";
            inInfo.style.textDecorationThickness = "1px"
        }
    }

}

//Function Keyup
function verificarCampos(a) {
    var inInfo = document.getElementById(a);
    let info = inInfo.value;
    inInfo.style.textDecoration = "none";

    // inNome e inSobrenome
    if (a == "inNome" || a == "inSobrenome" || a == "inNomeMae" || a == "inNomePai" || a == "inPais" || a == "inCidade" || a == "inBairro" || a == "inProfissao") {

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
            inInfo.style.textDecorationThickness = "1px";
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

    if (a == "inEndereco") {
        var specials = info.match(/\W|_/g);

        if (specials) {
            for (var i = (specials.length - 1); i >= 0; i--) {
                if (specials[i] == " " || specials[i] == "á" || specials[i] == "é" || specials[i] == "í"
                    || specials[i] == "ó" || specials[i] == "ú" || specials[i] == "â" || specials[i] == "ã"
                    || specials[i] == "ê" || specials[i] == "õ" || specials[i] == "ô" || specials[i] == ".") {
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

        if (info.match(/[0-9]/g)) {
            inInfo.style.textDecoration = "underline";
            inInfo.style.textDecorationStyle = "wavy";
            inInfo.style.textDecorationColor = "red";
            inInfo.style.textDecorationThickness = "1px"
        }
    }

    if (a == "inEmail") {
        if (info[0] == " ") {
            info = info.replace(" ", "");
            document.getElementById(a).value = info;
        }
    }

    if (a == "inCPF" || a == "inID" || a == "inCNH" || a == "inNumero") {
        for (var j = 0; j < info.length; j++) {
            info = info.replace(" ", "");
            document.getElementById(a).value = info;

            if (isNaN(info[j])) {
                inInfo.style.textDecoration = "underline";
                inInfo.style.textDecorationStyle = "wavy";
                inInfo.style.textDecorationColor = "red";
                inInfo.style.textDecorationThickness = "1px";
            }
        }
    }
}


//Function onFocus
function verificarCamposFocus(a) {
    var inInfo = document.getElementById(a);
    document.getElementById(a).value = inInfo.value.trim();
    let info = inInfo.value;
    inInfo.style.textDecoration = "none";

    if (a == "inCPF" || a == "inID") {
        for (var i = 0; i < info.length; i++) {
            if (info[i] == "." || info[i] == "-") {
                info = info.replace(".", "");
                info = info.replace("-", "");
                inInfo.value = info;
            }
        }
    }

    if (a == "inCel" || a == "inTel") {
        for (var i = 0; i < info.length; i++) {
            if (info[i] == "(" || info[i] == ")") {
                info = info.replace("(", "");
                info = info.replace(")", "");
                info = info.replace(" ", "");
                inInfo.value = info;
            }
        }
    }
}

//Function Enviar
function verificarEnvio() {
    var inNome = document.getElementById("inNome");
    var inSobrenome = document.getElementById("inSobrenome");
    var inNomeMae = document.getElementById("inNomeMae");
    var inNomePai = document.getElementById("inNomePai");
    var inCPF = document.getElementById("inCPF");
    var inID = document.getElementById("inID");
    var inCNH = document.getElementById("inCNH");
    var inCel = document.getElementById("inCel");
    var inEmail = document.getElementById("inEmail");
    var inPais = document.getElementById("inPais");
    var inCidade = document.getElementById("inCidade");
    var inEndereco = document.getElementById("inEndereco");
    var inBairro = document.getElementById("inBairro");
    var inNumero = document.getElementById("inNumero");
    var inProfissao = document.getElementById("inProfissao");

    let nome = inNome.value
    let sobrenome = inSobrenome.value
    let nomeMae = inNomeMae.value
    let nomePai = inNomePai.value
    let cpf = inCPF.value
    let id = inID.value
    let cnh = inCNH.value
    let cel = inCel.value
    let email = inEmail.value
    let pais = inPais.value
    let cidade = inCidade.value
    let endereco = inEndereco.value
    let bairro = inBairro.value
    let numero = inNumero.value
    let profissao = inProfissao.value

    if (nome == "" || sobrenome == "" || nomeMae == "" || nomePai == "" || cpf == "" || id == ""
        || cnh == "" || cel == "" || email == "" || pais == "" || cidade == "" || endereco == "" ||
        bairro == "" || numero == "" || profissao == "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    if (inNome.style.textDecorationStyle == "wavy" || inSobrenome.style.textDecorationStyle == "wavy" || inNomeMae.style.textDecorationStyle == "wavy" ||
        inNomePai.style.textDecorationStyle == "wavy" || inCPF.style.textDecorationStyle == "wavy" || inID.style.textDecorationStyle == "wavy" ||
        inCNH.style.textDecorationStyle == "wavy" || inCel.style.textDecorationStyle == "wavy" || inEmail.style.textDecorationStyle == "wavy" ||
        inPais.style.textDecorationStyle == "wavy" || inCidade.style.textDecorationStyle == "wavy" || inEndereco.style.textDecorationStyle == "wavy" ||
        inBairro.style.textDecorationStyle == "wavy" || inNumero.style.textDecorationStyle == "wavy" || inProfissao.style.textDecorationStyle == "wavy") {
        alert("Falha ao enviar, por favor preencha os campos corretamente.");
        return false;
    } else {
        alert("Enviado com sucesso!");
        return true;
    }
}