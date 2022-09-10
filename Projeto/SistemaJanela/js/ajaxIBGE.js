// AJAX para consumir a API do IBGE.

function getEstado () {
    
    $.ajax ({
        type:"GET",
        url:"https://servicodados.ibge.gov.br/api/v1/localidades/estados",
        dataType:"json",
        success:function(data) {
            let option = '<option value=""></option>';
            $.each(data, function(indice,elemento) {
                option += `<option value="${elemento.sigla}" id="${elemento.id}"> ${elemento.nome} </option>`
            });
            $(option).appendTo("#estado");
        },
        
        error:function() {
        },
                
        beforSend:function() {
        }
    })
}

function getCidade(uf) {
    
    $.ajax ({
        type:"GET",
        url:"https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + uf + "/municipios",
        dataType:"json",
        success:function(data) {
            getNewElementCidade(data);
        },
        
        error:function() {
        },
                
        beforSend:function() {
        }
    })
}

function getActionEstado() {
    const uf = $("#estado").find(":selected").attr("value");
    getCidade(uf);
}

function getNewElementCidade(data) {
    $("#label-Cidade").remove();
    $("#cidade").remove();
    let select = '<label id="label-Cidade">Selecione uma cidade: </label>' + 
                 '<select id="cidade"></select>';
    let option = "";
    $.each(data, function(indice,elemento) {
        option += `<option value="${elemento.nome}"> ${elemento.nome} </option>`
    });

    $(select).appendTo("#janela-conteudo");
    $(option).appendTo("#cidade");
}