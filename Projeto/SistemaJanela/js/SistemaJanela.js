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

function fechar() {
    alert("Olá, vou fechar.")
}

function abrirJanela(ele) {
    console.log($(ele))
    if ($(ele).hasClass("tabuada")) {
        $("#janela").find("#janela-conteudo").text("Tabuada");
    }
    if ($(ele).hasClass("imc")) {
        $("#janela").find("#janela-conteudo").text("IMC");
    }
    if ($(ele).hasClass("calculadora")) {
        $("#janela").find("#janela-conteudo").text("Calculadora");
    }
    if ($(ele).hasClass("ajax")) {
        $("#janela").find("#title").text("Exemplo AJAX");
        const form = '<label>CEP</label>' + '<input type="text" id="cep">' + '<button id="enviar_cep">Enviar</button>';
        $(form).appendTo("#janela-conteudo");
    }
    $("#janela").show();
}