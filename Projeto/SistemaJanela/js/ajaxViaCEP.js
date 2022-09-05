// AJAX para consumir a API de CEP.
function submitCep () {
    const cep = $("input#cep").val();
    /* Dentro do parâmetro do AJAX, é inserida a função */
    $.ajax ({
        // Parte inicial.
        type:"GET",
        url:"https://viacep.com.br/ws/" + cep + "/json/",
        dataType:"json",
        success:function(data) {
            // Para criar elementos HTML.
            const ele = '<div>' +
                        '<span>logradouro: ' + data.logradouro + '</span>' +
                        '</div>'
            $(ele).appendTo("#janela-conteudo");
        },
        error:function() {
            alert("Ops! Algo deu errado.");
        },
        // Executa a função abaixo antes de mandar.
        beforSend:function(){
            
        }

    })

}