// Variáveis globais
let pontos = 0;
var q = -1;
var questoes;
var novo;

// Requisitando o conteudo das questões como objeto json
var requestURL = 'https://quiz-trainee.herokuapp.com/questions';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  // Transferindo o objeto para uma variavel e permitindo iniciar o quiz
  questoes = request.response;
  novo = true;

  // Adicionando klayton inicial
  var klay = new Image (300, 300);
  klay.src = 'images/inicio.png'
  document.getElementById('resultado').appendChild(klay);
}


function mostrarQuestao() {
    // Atribuindo nomes e valores da questão
    document.getElementById("titulo").innerHTML = questoes[q].title;
    for (let i = 0; i < questoes[q].options.length; i++) {
        document.getElementsByTagName("span")[i].innerHTML = questoes[q].options[i].answer;
        document.getElementsByTagName("input")[i].value = questoes[q].options[i].value;
    }
}

// Checa se é possivel avançar para proxima questão
function proximaQuestao(){
    if(novo){
        // Fazendo o botao confirmar mudar para próxima
        document.getElementById("confirmar").innerHTML = 'PRÓXIMA';
      
        // Fazendo as questoes aparecerem
        document.getElementById("listaRespostas").style.display = 'block';

        // Zerando pontos, mudando status do quiz e avançando para as questões
        pontos = 0;
        document.getElementById("resultado").innerHTML = " ";
        novo = false;
        q++;
        mostrarQuestao();
    }
    if(novo != true){
        // Checando se marcou resposta, somando pontos e avançando para próxima
        for (let m = 0; m < questoes[q].options.length; m++) {
          if(document.getElementsByTagName("input")[m].checked){
            pontos += 1*document.getElementsByTagName("input")[m].value;
            document.getElementsByTagName("input")[m].checked = false;
            q++;
            console.log("pontuação atual: " + pontos + "/15"); // Pontuação atual no prompt
            if(q < questoes.length){
                mostrarQuestao();
            }

            // Encerrando o quiz caso chegue à última questão
            else{
                finalizarQuiz();
                return null;
            }
          }
        }
    }
}


function finalizarQuiz() {
    // Mudando título
    document.getElementById("titulo").innerHTML = "QUIZ DOS VALORES DA GTI"

    // Fazendo as questoes desaparecerem
    document.getElementById("listaRespostas").style.display = 'none';
    
    // Exibindo pontuação e klayton correspondente
    var klayton = new Image (300, 300);
    if(pontos > 13){
      klayton.src = 'images/bom.png'
    }
    else if(pontos > 8){
      klayton.src = 'images/ok.png'
    }
    else if(pontos > 4){
      klayton.src = 'images/medio.png'
    }
    else{
      klayton.src = 'images/ruim.png'
    }
    document.getElementById('resultado').appendChild(klayton);
    document.getElementById("resultado").innerHTML += "<br></br>" + "Sua pontuação: " + 100*pontos/15 + "%";


    // Fazendo o botao 'próxima' mudar para 'Refazer quiz'
    document.getElementById("confirmar").innerHTML = 'Refazer quiz';
    
    // Mudando status do quiz e resetando questões
    q = -1;
    novo = true;
}

