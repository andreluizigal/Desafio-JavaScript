let perguntas;
httpRequest = new XMLHttpRequest();

httpRequest.open('GET', 'https://quiz-trainee.herokuapp.com/questions', true);
httpRequest.send();

httpRequest.onreadystatechange = function(){
   if(this.readyState == 4 && this.status == 200){
      perguntas = (JSON.parse(this.responseText));
   }
}
var perguntaAtual = -1
var pontos = 0;

function mostrarQuestao() {
    // Esconde e exibe elementos ao iniciar o quiz
    console.log(perguntas);
    if (perguntaAtual == -1) {
        document.getElementById("resultado").style.display = 'none'
        document.getElementById("listaRespostas").style.display = "inline"
        document.getElementById("confirmar").innerHTML = "Próxima"
    } else // Se perguntaAtual > -1 (já começou o quiz)
        // Verifica se nenhuma resposta foi selecionada
        for (var i = 0; i < 4; i++)
            if (document.getElementsByName("resposta")[i].checked) // Se alguma foi selecionada
                break // Pode ir para a próxima pergunta
            else if (i == 3) // Se não tem nenhuma selecionada
                return // Não deixa ir para a próxima

    // Avança para a próxima (ou primeira) pergunta
    perguntaAtual++

    // Finaliza o quiz se não há mais perguntas
    if (perguntaAtual >= perguntas.length) {
        finalizarQuiz();
        return;
    }

    // Troca o titulo da pergunta
    document.getElementById('titulo').innerHTML = perguntas[perguntaAtual].title

    var spansRespostas = document.getElementsByTagName("span")
    var botoesRespostas = document.getElementsByName("resposta")

    for (var i = 0; i < perguntas[perguntaAtual].options.length; i++) {
        // Adiciona aos pontos o valor da resposta da pergunta anterior escolhida
        if (botoesRespostas[i].checked) {
            pontos += Number(botoesRespostas[i].value)
            botoesRespostas[i].checked = false // Deseleciona para a próxima pergunta
        }

        // Atualiza as respostas
        spansRespostas[i].innerHTML = perguntas[perguntaAtual].options[i].answer

        // Atualiza os valores de cada resposta
        spansRespostas[i].parentElement.children[0].value = perguntas[perguntaAtual].options[i].value

    }

}

function finalizarQuiz() {
    var porcentagemFinal = Math.round((pontos / 15) * 100)
    perguntaAtual = -1
    pontos = 0
    document.getElementById('titulo').innerHTML = 'QUIZ DOS VALORES DA GTI'
    document.getElementById("listaRespostas").style.display = "none"
    document.getElementById("resultado").style.display = 'block'
    document.getElementById("resultado").innerHTML = 'Sua pontuação: ' + porcentagemFinal + '%'
    document.getElementById("confirmar").innerHTML = "Refazer Quiz";
}
