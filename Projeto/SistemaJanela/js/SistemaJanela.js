function start() {
    menu = "#menu-ativo";
        if ($(menu).is(":visible")){
            esconderElemento($(menu));
        } else {
            mostrarElemento($(menu));
        }   
}

function esconderElemento(elemento) {
    $(elemento).hide();
}

function mostrarElemento(elemento) {
    $(elemento).show();
}   