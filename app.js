(function() {
    const navegacion = document.querySelector('.dropdown');

    navegacion.addEventListener('click', function(e) {

        const elementoActivo = document.querySelector('.mostrar');

        if (elementoActivo !== null) {
            elementoActivo.classList.remove('mostrar');
        }

        if (e.target.classList.contains('fa-caret-down')) {
            const elemento = e.target;
            elemento.parentElement.parentElement.children[1].classList.add('mostrar');

            e.preventDefault();
        }
        return false;
    })
})();