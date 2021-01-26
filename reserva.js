var novo = true;
var ok = false;
var pontos = 0;



// Função executada ao clicar no botão Começar
function mostrarQuestao() {

  // Checando se está no meio de um quiz
  if (novo){
    
    // Mudando variavel para dizer que está no meio de um quiz
    novo = false;

    // Requisitando o conteudo das questões como objeto json
    var requestURL = 'https://quiz-trainee.herokuapp.com/questions';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    // Executando ao carregar a resposta
    request.onload = function() {

      // Transferindo o objeto para uma variavel
      var questoes = request.response;

      // Fazendo o botao confirmar mudar para próxima
      document.getElementById("confirmar").innerHTML = 'PRÓXIMA';
      
      // Fazendo as questoes aparecerem
      document.getElementById("listaRespostas").style.display = 'block';
      var i = 0;
      while (i < questoes.length) {
        document.getElementById("titulo").innerHTML = questoes[i].title;
        
        // Aparecendo cada item
        for (let j = 0; j < questoes[i].options.length; j++) {
          
          document.getElementsByTagName("span")[j].innerHTML = questoes[i].options[j].answer;
          
        }
        console.log('chegou aqui');

        // Esperando responder para poder avançar
        

        

        
        i++;
      }

      // Fazendo o botao proxima sumir e o confirmar resaparecer e mudando para 'Refazer quiz'
      document.getElementById("confirmar").innerHTML = 'Refazer quiz'; 
      
      console.log('ok');

    }


    // Encerra o quiz
    novo = false;
  }


}

function proximaQuestao(){
  if (document.getElementsByTagName("input")[0].checked == true)
  ok = true;
  console.log('ok: ' + ok);

}


function finalizarQuiz() {
    
}

