// AJAX para consumir a API do IBGE.

function getEstado () {
    
    $.ajax ({
        type:"GET",
        url:"https://servicodados.ibge.gov.br/api/v1/localidades/estados",
        dataType:"json",
        success:function(data) {
            let option = '<option value="">Selecione um estado</option>';
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