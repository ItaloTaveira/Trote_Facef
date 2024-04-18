function Pontuação() {
    let equipe = Text(document.getElementById("equipe").value);
    let leite = Number(document.getElementById("leite").value);
    let sangue = Number(document.getElementById("sangue").value);
    let social = Number(document.getElementById("social").value);
    let apresentação = Number(document.getElementById("apresentação").value);
    let mascote = Number(document.getElementById("mascote").value);
    let quiz = Number(document.getElementById("quiz").value);
    let pontuaçãoextra = Number(document.getElementById("pontuaçãoextra").value);
    let kits = Number(document.getElementById("kits").value);
    let suplementos = Number(document.getElementById("suplementos").value)
    let kitsextra = Number(document.getElementById("kitsextra").value);
    let suplementosextra = Number(document.getElementById("suplementosextra").value);
    let arroz05 = Number(document.getElementById("arroz05").value);
    let arroz01 = Number(document.getElementById("arroz01").value);
    let feijão02 = Number(document.getElementById("feijão02").value);
    let feijão01 = Number(document.getElementById("feijão01").value);
    let macarrão = Number(document.getElementById("macarrão").value);
    let oleo = Number(document.getElementById("oleo").value);   

    switch (equipe.toLowerCase()) {
        case "amarela":
            equipeNome
            let l = leite * 2
            let s = sangue * 20;
            let k = (kits * 100) / 91
            let ke = kitsextra * 30
            let su = (suplementos * 100) / 41
            let se = suplementosextra * 15
            let a05 = arroz05 * 5
            let a01 = arroz01 * 1
            let f02 = feijão02 * 2
            let f01 = feijão01 * 1
            let m = macarrão * 0.5
            let o = oleo * 1
            resultado = (l + s + social + apresentação + mascote + quiz + pontuaçãoextra + k + su + ke + se + a05 + a01 + f02 + f01 + m + o)
            document.getElementById("resultado").textContent
            break;
        case "azul":
            equipeNome = "Equipe Azul";
            let l2 = leite * 2
            let s2 = sangue * 20;
            let k2 = (kits * 100) / 92
            let ke2 = kitsextra * 30
            let su2 = (suplementos * 100) / 41
            let se2 = suplementosextra * 15
            let a052 = arroz05 * 5
            let a012 = arroz01 * 1
            let f022 = feijão02 * 2
            let f012 = feijão01 * 1
            let m2 = macarrão * 0.5
            let o2 = oleo * 1
            resultado = (l2 + s2 + social + apresentação + mascote + quiz + pontuaçãoextra + k2 + su2 + ke2 + se2 + a052 + a012 + f022 + f012 + m2 + o2)
            document.getElementById("resultado").textContent
            break;
        case "roxa":
            equipeNome = "Equipe Roxa";
            equipeNome = "Equipe Azul";
            let l3 = leite * 2
            let s3 = sangue * 20;
            let k3 = (kits * 100) / 92
            let ke3 = kitsextra * 30
            let su3 = (suplementos * 100) / 41
            let se3 = suplementosextra * 15
            let a053 = arroz05 * 5
            let a013 = arroz01 * 1
            let f023 = feijão02 * 2
            let f013 = feijão01 * 1
            let m3 = macarrão * 0.5
            let o3 = oleo * 1
            resultado = (l3 + s3 + social + apresentação + mascote + quiz + pontuaçãoextra + k3 + su3 + ke3 + se3 + a053 + a013 + f023 + f013 + m3 + o3)
            document.getElementById("resultado").textContent
            break;
        case "vermelho":
            equipeNome = "Equipe Vermelha";
            equipeNome = "Equipe Azul";
            let l4 = leite * 2
            let s4 = sangue * 20;
            let k4 = (kits * 100) / 92
            let ke4 = kitsextra * 30
            let su4 = (suplementos * 100) / 41
            let se4 = suplementosextra * 15
            let a054 = arroz05 * 5
            let a014 = arroz01 * 1
            let f024 = feijão02 * 2
            let f014 = feijão01 * 1
            let m4 = macarrão * 0.5
            let o4 = oleo * 1
            resultado = (l4 + s4 + social + apresentação + mascote + quiz + pontuaçãoextra + k4 + su4 + ke4 + se4 + a054 + a014 + f024 + f014 + m4 + o4)
            document.getElementById("resultado").textContent
            break;
        default:
            document.getElementById("resultado").textContent = "Equipe desconhecida";
            return;
    }

    
}
