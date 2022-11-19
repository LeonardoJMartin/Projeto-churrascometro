/* Carne 400g por pessoa + de 6h 650g
   Cerveja 1,2l por pessoa + de 6h 2l
   Refri/agua 1l por pessoa + de 6h 1,5l

   Crianças valem por meia pessoa */


function calculaCarne() {
    let adultos = document.getElementById('qtdAdultos').value;
    let criancas = document.getElementById('qtdCriancas').value;
    let duracao = document.getElementById('duracaoChurrasco').value;

    let resultCarne = 0;
    let cerveja = 0;
    let refri = 0;
    if (duracao <= 6) {
        resultCarne = adultos * 0.4;
        resultCarne += criancas * 0.2;

        refri = adultos * 1;
        refri += criancas * 0.5;

        cerveja = adultos * 1.2;
    }
    else{
        resultCarne = adultos * 0.65;
        resultCarne += criancas * 0.325;

        refri = adultos * 1.5;
        refri += criancas * 0.75;

        cerveja = adultos * 2;
    }

    let result = document.getElementById('resultado');
    result.innerHTML= `<p>Total de Carne: ${resultCarne} kg</p>`;
    result.innerHTML+= `<p>Total de Cerveja: ${cerveja} litros</p>`;
    result.innerHTML+= `<p>Total de Refri/Água: ${refri} litros</p>`;

}
