console.log("1ª linha do arquivo JS");

function calcular() {

    // //alert(document.getElementById("tab1").value) //Aqui ele pega o valor (value) do Elemento 'tab1' do documento interito HTML.

    //Pega o valor do input do formulário e atribui para cada variável criada abaixo.    
    let tab1 = document.getElementById("tab1").value;
    let tab2 = document.getElementById("tab2").value;

    //Validação dos valores caso o primeiro seja menor que o segundo.
    if (tab2 < tab1) { //Trocando o 'suco de copos' para passar do primeiro para o segundo. Serve para tratar quando o usuário coloca o número menor primeiro.
        let aux = tab2;
        tab2 = tab1;
        tab1 = aux;
    }
    
    //Cria um elemento UL no HTML da página.
    const container = document.createElement("ul"); //O próprio JS tem a capacidade de criar um elemento HTML, neste exemplo um 'ul'.

    //Laço responsável por gerenciar quantas vezes vai rodar a tabuada
    do {
               
        for (let index = 1; index <= 10; index++) {
            let linha = document.createElement("li");
            linha.className = "tab" + tab1
            let result = tab1 + " x " + index + " = " + tab1*index;
            linha.appendChild(document.createTextNode(result));
            
            container.appendChild(linha);
            
            
        }

        tab1++;
        
    } while (tab1 <= tab2);

    //appenChild - COMANDO PARA INSERIR TAGS HTML
    //Como adicionar um elemento em um elemento pai, direito no HTML - Isso chama-se DOM - Essa alteração é somente em tempo de execução, não altera o documento .html.
    document.body.appendChild(container);    

}