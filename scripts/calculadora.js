function Pontuação() {
    let equipe = document.getElementById("equipe").value;
    let leite = Number(document.getElementById("leite").value);
    let sangue = Number(document.getElementById("sangue").value);
    let social = Number(document.getElementById("social").value);
    let apresentação = Number(document.getElementById("apresentação").value);
    let mascote = Number(document.getElementById("mascote").value);
    let quiz = Number(document.getElementById("quiz").value);
    let extra = Number(document.getElementById("pontuaçãoextra").value);
    let kit = Number(document.getElementById("kit").value);
    let kitsextras = Number(document.getElementById("kitsextras").value);
    let suplementosextras = Number(document.getElementById("suplementosextras").value);
    let arroz05 = Number(document.getElementById("arroz05").value);
    let arroz01 = Number(document.getElementById("arroz01").value);
    let feijão02 = Number(document.getElementById("feijão02").value);
    let feijão01 = Number(document.getElementById("feijão01").value);
    let macarrão = Number(document.getElementById("macarrão").value);
    let oleo = Number(document.getElementById("oleo").value);

    let resultado = 0;
    if (equipe === "1") { 
        let l = leite * 2;
        let s = sangue * 20;
        let k = (kit * 100) / 91;
        let ke = kitsextras * 30;
        let se = suplementosextras * 15;
        let a05 = arroz05 * 5;
        let a01 = arroz01 * 1;
        let f02 = feijão02 * 2;
        let f01 = feijão01 * 1;
        let m = macarrão * 0.5;
        let o = oleo * 1;

        resultado = l + s + social + apresentação + mascote + quiz + extra + k + ke + se + a05 + a01 + f02 + f01 + m + o;
    }

    document.getElementById("resultado").textContent = resultado.toString();
}
