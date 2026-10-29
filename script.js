// Função que irá executar quando clicar no botão btn-gerar.
function gerarTabuada() {
    //Pega o valor do campo input no HTML.
    const numeroInput = document.getElementById('numero-input')

    //Converte o texto que veio do HTML para o número inteiro.
    let numero = parseInt(numeroInput.value)

    //Pega o elemento onde atabuada será exibida no HTML.
    const resultadoDiv = document.getElementById('resultado-aqui')

    //Limpa o conteúdo no interior onde o resultado nserá exibido.

    resultadoDiv.innerHTML = ''

    //Adiciona o título da tabuada com tag h2.
    resultadoDiv. innerHTML += `<h2>Tabuada do número ${numero}<h2>`

    //Laço de repetição para vgerar a tabuada de 1 até 10.
    for (let i = 1; i<= 10; i++) {
        let resultado = numero * i
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}<p>`
    }
}
//Pega o elemento onde a tabuada será exibida no HTML e associa a uma constante.
const btnGerar = document.getElementById('btn-gerar')
btnGerar.addEventListener('click', gerarTabuada)
