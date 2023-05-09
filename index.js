function inserirAluno(){
    var matricula = prompt('Digite sua matricula')
    var nome = prompt ('Nome do aluno')
    var faltas = parseInt(prompt ('Numero de faltas'))
    var notab1 = parseFloat(prompt ('Nota B1'))
    var notab2 = parseFloat(prompt ('Nota B2'))
    var media = (notab1 + notab2) / 2;
        if(media >= 7){
            var situacao = 'Aprovado'
        }
        else if( media >= 3 && media < 7){
            var notapr = parseFloat(prompt ('Nota prova final'))
        }
        else{
            var situacao = 'Reprovado'
        }
    
    var mediafinal = (media + notapr) / 2;
        if(mediafinal >= 5){
            var situacao = 'Aprovado'
        }
        else{
            var situacao = 'Reprovado'
        }
    var tabela = document.querySelector('body > table')
    var linha = tabela.insertRow(-1);

    linha.insertCell(0).innerText = matricula;
    linha.insertCell(1).innerText = nome;
    linha.insertCell(2).innerText = faltas;
    linha.insertCell(3).innerText = notab1;
    linha.insertCell(4).innerText = notab2;
    linha.insertCell(5).innerText = media;
    linha.insertCell(6).innerText = notapr;
    linha.insertCell(7).innerText = mediafinal;
    linha.insertCell(8).innerText = situacao;
}