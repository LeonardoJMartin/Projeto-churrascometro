/* Carne 400g por pessoa se 6h ou mais 650g
   Cerveja 1,2l por pessoa se 6h ou mais 2l
   Refri/agua 1l por pessoa se 6h ou mais 1,5l

   Crianças valem por meia pessoa */


function calculaCarne() {
    let adultos = document.getElementById('qtdAdultos').value;
    let criancas = document.getElementById('qtdCriancas').value;
    let duracao = document.getElementById('duracaoChurrasco').value;

    let resultCarne = 0;
    let cerveja = 0;
    let refri = 0;
    if (duracao < 6) {
        resultCarne = adultos * 0.4;
        resultCarne += criancas * 0.2;
        resultCarne = resultCarne.toFixed(1);

        refri = adultos * 1;
        refri += criancas * 0.5;
        refri = refri.toFixed(1);

        cerveja = adultos * 1.2;
        cerveja = cerveja.toFixed(1);
    }
    else{
        resultCarne = adultos * 0.65;
        resultCarne += criancas * 0.325;
        resultCarne = resultCarne.toFixed(1);

        refri = adultos * 1.5;
        refri += criancas * 0.75;
        refri = refri.toFixed(1);

        cerveja = adultos * 2;
        cerveja = cerveja.toFixed(1);
    }

    let result = document.getElementById('resultado');
    result.innerHTML= `<p>Total de Carne: ${resultCarne} kg</p>`;
    result.innerHTML+= `<p>Total de Cerveja: ${cerveja} litros</p>`;
    result.innerHTML+= `<p>Total de Refri/Água: ${refri} litros</p>`;

}
