document.addEventListener('DOMContentLoaded', function () {

    //valores de custos
    let totalPagamento = 0;
    let coresValue = 0;
    let ramValue = 0;
    let storageValue = 0;
    let bandValue = 0;
    let ipValue = 0;
    let totalPagamentoInfo = document.getElementById('custo_total');

    //capturar todos os conjuntos de propriedade da calculadora
    let listaPropriedades = document.querySelectorAll('.propriedade');


    //Iterar sobre o conjunto de propriedades
    listaPropriedades.forEach(function (propriedade) {

        //Definir as variáveis para o texto da contagem e o input do tipo range
        let contador = propriedade.querySelector('.range_count');
        let inputRange = propriedade.querySelector('.range_input');

        //Adicionar o listener para que 
        inputRange.addEventListener('input', function () {
            actualizarElementos(contador, this.value);
            actualizarCustoPagamento(coresValue, ramValue);
        });
    });






    function actualizarCalculadora(propriedadesCalculadora) {

        //Iterar sobre o conjunto de propriedades
        propriedadesCalculadora.forEach(function (propriedade) {

            //Definir as variáveis para o texto da contagem e o input do tipo range
            let contador = propriedade.querySelector('.range_count');
            let inputRange = propriedade.querySelector('.range_input');

            actualizarVariaveisPrecos(inputRange);

            //Adicionar o listener para que 
            inputRange.addEventListener('input', function () {
                actualizarVariaveisPrecos(this);
                actualizarElementos(contador, this.value);
                actualizarCustoPagamento(coresValue, ramValue,storageValue,bandValue,ipValue);

            });

            actualizarElementos(contador, inputRange.value);
        });

        actualizarCustoPagamento(coresValue, ramValue,storageValue,bandValue,ipValue);

    }

    function actualizarElementos(elemento, valor) {
        elemento.textContent = valor;
    }

    function actualizarCustoPagamento(coresValue, ramValue,storageValue,bandValue,ipValue) {
        totalPagamento = parseInt(ramValue) + parseInt(coresValue) + parseInt(storageValue) + parseInt(bandValue) + parseInt(ipValue);
        totalPagamentoInfo.value = totalPagamento;
    }

    function actualizarVariaveisPrecos(elemento) {
        //Atribuir valores as variáveis de preços com base no id do input do tipo range
        switch (elemento.id) {
            case 'cores_value':
                coresValue = parseInt(elemento.value) * 1550;
                break;

            case 'ram_value':
                ramValue = parseInt(elemento.value)*895;
                break;

            case 'storage_value':
                storageValue = parseInt(elemento.value)*25;
                break;

            case 'band_value':
                bandValue = parseInt(elemento.value)*10;
                break;

            case 'ip_value':
                ipValue = parseInt(elemento.value)*(2000);
                break;
        }

    }

    actualizarCalculadora(listaPropriedades);


});
