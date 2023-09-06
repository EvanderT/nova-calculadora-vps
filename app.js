document.addEventListener('DOMContentLoaded', function () {



    function actualizarCalculadora() {
        //capturar todos os conjuntos de propriedade da calculadora
        let propriedadesCalculadora = document.querySelectorAll('.propriedade');

        propriedadesCalculadora.forEach(function (propriedade) {
            let contador = propriedade.querySelector('.range_count');
            let inputRange = propriedade.querySelector('.range_input');

            actualizarElementos(contador,inputRange.value);
            
            inputRange.addEventListener('input', function () {
                actualizarElementos(contador,this.value);
            });
        });
    }

    function actualizarElementos(elemento,valor){
        elemento.textContent = valor;
    }

    actualizarCalculadora();
});
