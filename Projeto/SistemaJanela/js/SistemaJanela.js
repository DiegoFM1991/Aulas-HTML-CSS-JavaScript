
const menu = "#menu-ativo";

function start() {
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

    esconderElemento($(menu));
       
    $("janela-conteudo").find(".dados:not(.template)").remove(); // Remove dados sem template.
    let dados = $("#janela-conteudo").find(".dados.template").clone().removeClass("template"); // Faz o clone.
    
    if ($(ele).hasClass("tabuada")) {
        $("#janela").find("#title").text("Tabuada");
        $(dados).text("Tabuada");
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
        $(form).appendTo($(dados));
    }
    if ($(ele).hasClass("ibge")) {
        $("#janela").find("#title").text("Exemplo IBGE");
        const select = '<label>Selecione um estado: </label>' +
                       '<select id="estado" onchange="getActionEstado()"></select>';
        $(select).appendTo($(dados));
        getEstado();
    }

    $(dados).appendTo("#janela-conteudo");
    $("#janela").show();

}