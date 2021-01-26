var novo = true;
var next = false;
var pontos = 0;
var q = 0;


// Função executada ao clicar no botão Começar
function mostrarQuestao() {

  // Checando se está no meio de um quiz
  if (novo){
    
    // Mudando variavel para dizer que está no meio de um quiz e zerando pontuação
    novo = false;
    pontos = 0;

    // Requisitando o conteudo das questões como objeto json
    var requestURL = 'https://quiz-trainee.herokuapp.com/questions';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    // Executando ao carregar a resposta do servidor
    request.onload = function() {

      // Transferindo o objeto para uma variavel
      var questoes = request.response;

      // Fazendo o botao confirmar mudar para próxima
      document.getElementById("confirmar").innerHTML = 'PRÓXIMA';
      
      // Fazendo as questoes aparecerem
      document.getElementById("listaRespostas").style.display = 'block';
      
      // Escrevendo questões
      var q = 0;
        // Questão 1
          // Atribuindo nomes às respostas
          document.getElementById("titulo").innerHTML = questoes[q].title;
          document.getElementsByTagName("span")[0].innerHTML = questoes[q].options[0].answer;
          document.getElementsByTagName("span")[1].innerHTML = questoes[q].options[1].answer;
          document.getElementsByTagName("span")[2].innerHTML = questoes[q].options[2].answer;
          document.getElementsByTagName("span")[3].innerHTML = questoes[q].options[3].answer;
          
          // Atribuindo valores às respostas
          document.getElementsByTagName("input")[0].value = questoes[q].options[0].value;
          document.getElementsByTagName("input")[1].value = questoes[q].options[1].value;
          document.getElementsByTagName("input")[2].value = questoes[q].options[2].value;
          document.getElementsByTagName("input")[3].value = questoes[q].options[3].value;
          
          console.log("Questão 1");
          // Mudando de questão caso tenha marcado algum item e pressionado o botao.
          if(proximaQuestao()){
            q++;

            // Somando pontuação
            for (let i = 0; i < 4; i++) {
              if(document.getElementsByTagName("input")[i].checked){
                pontos += document.getElementsByTagName("input")[i].value;
              }
            }
            
            // Questão 2
            // Atribuindo nomes às respostas
            document.getElementById("titulo").innerHTML = questoes[q].title;
            document.getElementsByTagName("span")[0].innerHTML = questoes[q].options[0].answer;
            document.getElementsByTagName("span")[1].innerHTML = questoes[q].options[1].answer;
            document.getElementsByTagName("span")[2].innerHTML = questoes[q].options[2].answer;
            document.getElementsByTagName("span")[3].innerHTML = questoes[q].options[3].answer;
            
            // Atribuindo valores às respostas
            document.getElementsByTagName("input")[0].value = questoes[q].options[0].value;
            document.getElementsByTagName("input")[1].value = questoes[q].options[1].value;
            document.getElementsByTagName("input")[2].value = questoes[q].options[2].value;
            document.getElementsByTagName("input")[3].value = questoes[q].options[3].value;

            console.log("Questão 2");
            // Mudando de questão caso tenha marcado algum item e pressionado o botao.
            if(proximaQuestao()){
              q++;

              // Somando pontuação
              for (let i = 0; i < 4; i++) {
                if(document.getElementsByTagName("input")[i].checked){
                  pontos += document.getElementsByTagName("input")[i].value;
                }
              }
              // Questão 3
              // Atribuindo nomes às respostas
              document.getElementById("titulo").innerHTML = questoes[q].title;
              document.getElementsByTagName("span")[0].innerHTML = questoes[q].options[0].answer;
              document.getElementsByTagName("span")[1].innerHTML = questoes[q].options[1].answer;
              document.getElementsByTagName("span")[2].innerHTML = questoes[q].options[2].answer;
              document.getElementsByTagName("span")[3].innerHTML = questoes[q].options[3].answer;
              
              // Atribuindo valores às respostas
              document.getElementsByTagName("input")[0].value = questoes[q].options[0].value;
              document.getElementsByTagName("input")[1].value = questoes[q].options[1].value;
              document.getElementsByTagName("input")[2].value = questoes[q].options[2].value;
              document.getElementsByTagName("input")[3].value = questoes[q].options[3].value;

              console.log("Questão 3");
              // Mudando de questão caso tenha marcado algum item e pressionado o botao.
              if(proximaQuestao()){
                q++;

                // Somando pontuação
                for (let i = 0; i < 4; i++) {
                  if(document.getElementsByTagName("input")[i].checked){
                    pontos += document.getElementsByTagName("input")[i].value;
                  }
                }
                
                // Questão 4
                // Atribuindo nomes às respostas
                document.getElementById("titulo").innerHTML = questoes[q].title;
                document.getElementsByTagName("span")[0].innerHTML = questoes[q].options[0].answer;
                document.getElementsByTagName("span")[1].innerHTML = questoes[q].options[1].answer;
                document.getElementsByTagName("span")[2].innerHTML = questoes[q].options[2].answer;
                document.getElementsByTagName("span")[3].innerHTML = questoes[q].options[3].answer;
                
                // Atribuindo valores às respostas
                document.getElementsByTagName("input")[0].value = questoes[q].options[0].value;
                document.getElementsByTagName("input")[1].value = questoes[q].options[1].value;
                document.getElementsByTagName("input")[2].value = questoes[q].options[2].value;
                document.getElementsByTagName("input")[3].value = questoes[q].options[3].value;

                console.log("Questão 4");
                // Mudando de questão caso tenha marcado algum item e pressionado o botao.
                if(proximaQuestao()){
                  q++;

                  // Somando pontuação
                  for (let i = 0; i < 4; i++) {
                    if(document.getElementsByTagName("input")[i].checked){
                      pontos += document.getElementsByTagName("input")[i].value;
                    }
                  }
                  
                  // Questão 5
                  // Atribuindo nomes às respostas
                  document.getElementById("titulo").innerHTML = questoes[q].title;
                  document.getElementsByTagName("span")[0].innerHTML = questoes[q].options[0].answer;
                  document.getElementsByTagName("span")[1].innerHTML = questoes[q].options[1].answer;
                  document.getElementsByTagName("span")[2].innerHTML = questoes[q].options[2].answer;
                  document.getElementsByTagName("span")[3].innerHTML = questoes[q].options[3].answer;
                  
                  // Atribuindo valores às respostas
                  document.getElementsByTagName("input")[0].value = questoes[q].options[0].value;
                  document.getElementsByTagName("input")[1].value = questoes[q].options[1].value;
                  document.getElementsByTagName("input")[2].value = questoes[q].options[2].value;
                  document.getElementsByTagName("input")[3].value = questoes[q].options[3].value;
                  
                  console.log("Questão 5");
                  // Mudando de questão caso tenha marcado algum item e pressionado o botao.
                  if(proximaQuestao()){
                    // Somando pontuação
                    for (let i = 0; i < 4; i++) {
                      if(document.getElementsByTagName("input")[i].checked){
                        pontos += document.getElementsByTagName("input")[i].value;
                      }
                    }
                    
                    // Finalizando quiz
                    finalizarQuiz(pontos);
                  }
                }
              }
            }
          }
      finalizarQuiz(pontos);    
    }
  }
}

// Checa se é possivel avançar para proxima questão
function proximaQuestao(){
  if(novo){
    var marcado = false;
    for (let m = 0; m < 4; m++) {
      if(document.getElementsByTagName("input")[m].checked){
        marcado = true;
        console.log('marcado');
      }
    }
  }
}


function finalizarQuiz(p) {
  // Exibindo pontuação
  document.getElementById("resultado").innerHTML = "Sua pontuação: " + 100*p/15 + "%";
  
  // Fazendo o botao 'próxima' mudar para 'Refazer quiz'
  document.getElementById("confirmar").innerHTML = 'Refazer quiz';
  
  // Mudando status de quiz em andamento
  novo = true;
}

