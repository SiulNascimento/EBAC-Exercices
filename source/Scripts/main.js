document.addEventListener('DOMContentLoaded', function() {
    document.getElemetById('form-wheel').addEventListener('submit', function() {
        let numeroMaximo = document.getElementById('numero-maximo');
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio+1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
    })
})