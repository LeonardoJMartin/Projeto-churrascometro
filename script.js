/* Carne 700g por pessoa se 6h ou mais 1kg
   Cerveja 1,2l por pessoa se 6h ou mais 2l
   Refri/agua 1l por pessoa se 6h ou mais 1,5l
   Crianças valem por meia pessoa */


function calculaCarne() {
    var lista = document.getElementsByClassName("resultados");
    for(var i = lista.length - 1; i >= 0; i--)
    {
        lista[i].remove();
    }
    let adultos = document.getElementById('qtdAdultos').value;
    let criancas = document.getElementById('qtdCriancas').value;
    let duracao = document.getElementById('duracaoChurrasco').value;

    if(adultos == "" || duracao == ""){
        return alert("Você deve preencher a quantidade de pessoas e a duração aproximada do churrasco.");
    }
    let retorno = verificaCheckbox();
    if (retorno == 0) {
        return alert("Selecione pelo menos uma opção da lista.");
    }
    else {
        let resultCarne = 0;
        let cerveja = 0;
        let refri = 0;
        if (duracao < 6) {
            resultCarne = adultos * 0.7;
            resultCarne += criancas * 0.35;
            resultCarne = resultCarne.toFixed(1);

            refri = adultos * 1;
            refri += criancas * 0.5;
            refri = refri.toFixed(1);

            cerveja = adultos * 1.2;
            cerveja = cerveja.toFixed(1);
        }
        else {
            resultCarne = adultos * 1;
            resultCarne += criancas * 0.5;
            resultCarne = resultCarne.toFixed(2);

            refri = adultos * 1.5;
            refri += criancas * 0.75;
            refri = refri.toFixed(1);

            cerveja = adultos * 2;
            cerveja = cerveja.toFixed(1);
        }
        let result = document.getElementById('resultado');
        let cadaOpcao = resultCarne / retorno;
        let retornoCarne = verificaCarneCheckbox();
        for(let i = 0; i < retornoCarne.length; i++){
            result.innerHTML += `<p class="resultados">${retornoCarne[i]}: ${cadaOpcao.toFixed(2)} kg </p>`;         
        }    
        result.innerHTML += `<p class="resultados">Total de Cerveja: ${cerveja} litros</p>`;
        result.innerHTML += `<p class="resultados">Total de Refri/Água: ${refri} litros</p>`;

        if (adultos >= 0 && duracao > 0) {
            desocultaSessao();
        }
    }
}

function desocultaSessao() {
    document.getElementById('sessaoResultado').hidden = false;
}


function limparCampos() {
    document.getElementById('qtdAdultos').value = "";
    document.getElementById('qtdCriancas').value = "";
    document.getElementById('duracaoChurrasco').value = "";
    let carnes = document.getElementsByClassName('carnes');
    for(let i = 0; i < carnes.length; i++){
        carnes[i].checked = false;
    }
    document.getElementById('sessaoResultado').hidden = true;
}

function verificaCheckbox() {
    let carnes = document.getElementsByClassName('carnes');
    let count = 0;
    for (let i = 0; i < carnes.length; i++) {
        if (carnes[i].checked) {
            count++;
        }
    }
    return count;
}

function verificaCarneCheckbox() {
    let carnes = document.getElementsByClassName('carnes');
    let count = [];
    let i = 0;
        if (carnes[0].checked) {
            count[i] = "Picanha";
            i++;
        }
        if (carnes[1].checked) {
            count[i] = "Costela";
            i++;
        }
        if (carnes[2].checked) {
            count[i] = "Vazio";
            i++;
        }
        if (carnes[3].checked) {
            count[i] = "Coxinha da asa";
            i++;
        }
        if (carnes[4].checked) {
            count[i] = "Coxa";
            i++;
        }
        if (carnes[5].checked) {
            count[i] = "Sobrecoxa";
            i++;
        }
        if (carnes[6].checked) {
            count[i] = "Coração";
            i++;
        }
        if (carnes[7].checked) {
            count[i] = "Salsichão";
            i++;
        }
        if (carnes[8].checked) {
            count[i] = "Pão com alho";
            i++;
        }   
    return count;
}
