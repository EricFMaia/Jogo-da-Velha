function criarJogoDaVelha() {
    return {
        placarJogadorX: 0,
        placarJogadorO: 0,
        // onde estão o placar dos dois jogadores
        pontosDojogadoX: document.querySelector('#prontos-do-x'),
        pontosDojogadoO: document.querySelector('#prontos-do-o'),

        // onde esta no html onde mostra o turno de quem esta jogando 
        jogadorX: document.querySelector('.x'),
        jogadorO: document.querySelector('.o'),

        // onde esta a section jogo da velha no html 
        sectionOndeTemOjogo: document.querySelector('.jogo'),

        numerosParaDefinirQualJogadorJoga: 2,// determina qual jogador vai jogar primeiro baseado em numeros 'impares' e numeros 'pares'

        //mostra quais quadrados os jogadores marcaram, pelo id
        quaisQuadradosJogadorXMarcou: [],
        quaisQuadradosJogadorOMarcou: [],

        // array com os IDs de todos os quadrados do jogo
        todosOsIdsDosQuadrados: [q1, q2, q3, q4, q5, q6, q7, q8, q9],



        // Função para identificar qual jogador está na vez de jogar
        identificarQualJogadorEstaNaVezDeJogar() {
            if (this.numerosParaDefinirQualJogadorJoga % 2 !== 0) {
                return true
            }
        },

        // Função para verificar se um quadrado já foi jogado
        seOjogadorJaJogouNesseQuadrado(quadrado) {
            if (quadrado.innerText !== 'X' && quadrado.innerText !== 'O') {
                return true
            }

        },
        // Função para acrescentar pontos na tabela de pontuação
        acrescentarPontosNaTabela(nome) {
            if (nome == 'x') {
                ++this.placarJogadorX
                this.pontosDojogadoX.innerText = this.placarJogadorX;

            } else {
                ++this.placarJogadorO
                this.pontosDojogadoO.innerText = this.placarJogadorO;
            }

        },
        // Função para verificar qual jogador foi vitorioso

        verificarQualJogadorFoiVitorioso(jogadorNome) {
            // Verifica se algum jogador ganhou com uma combinação de quadrados
            // e chama a função 'mostrarOndeFoiAVitoria' para mostrar onde foi a vitória
            if (jogadorNome.includes('q1') && jogadorNome.includes('q2') && jogadorNome.includes('q3')) {
                this.mostrarOndeFoiAVitoria([q1, q2, q3]);
                return true;
            } else if (jogadorNome.includes('q4') && jogadorNome.includes('q5') && jogadorNome.includes('q6')) {
                this.mostrarOndeFoiAVitoria([q4, q5, q6]);
                return true;
            } else if (jogadorNome.includes('q7') && jogadorNome.includes('q8') && jogadorNome.includes('q9')) {
                this.mostrarOndeFoiAVitoria([q7, q8, q9]);
                return true;
            } else if (jogadorNome.includes('q1') && jogadorNome.includes('q4') && jogadorNome.includes('q7')) {
                this.mostrarOndeFoiAVitoria([q1, q4, q7]);
                return true;
            } else if (jogadorNome.includes('q2') && jogadorNome.includes('q5') && jogadorNome.includes('q8')) {
                this.mostrarOndeFoiAVitoria([q2, q5, q8]);
                return true;
            } else if (jogadorNome.includes('q3') && jogadorNome.includes('q6') && jogadorNome.includes('q9')) {
                this.mostrarOndeFoiAVitoria([q3, q6, q9]);
                return true;
            } else if (jogadorNome.includes('q1') && jogadorNome.includes('q5') && jogadorNome.includes('q9')) {
                this.mostrarOndeFoiAVitoria([q1, q5, q9]);
                return true;
            } else if (jogadorNome.includes('q3') && jogadorNome.includes('q5') && jogadorNome.includes('q7')) {
                this.mostrarOndeFoiAVitoria([q3, q5, q7]);
                // Retorna true se houve uma vitória, senão retorna false
                return true;
            } else {
                return false;
            }
        },
        // Função para mostrar onde ocorreu a vitória
        mostrarOndeFoiAVitoria([quadrado1, quadrado2, quadrado3]) {
            quadrado1.classList.add('quadrado-certo')
            quadrado2.classList.add('quadrado-certo')
            quadrado3.classList.add('quadrado-certo')

            setTimeout(() => {
                quadrado1.classList.remove('quadrado-certo')
                quadrado2.classList.remove('quadrado-certo')
                quadrado3.classList.remove('quadrado-certo')


            }, 2000);

        },
        mostrarQueOjogoDeuEmpate() {
            q1.classList.add('mostrar-que-deu-empate');
            q2.classList.add('mostrar-que-deu-empate');
            q3.classList.add('mostrar-que-deu-empate');
            q4.classList.add('mostrar-que-deu-empate');
            q5.classList.add('mostrar-que-deu-empate');
            q6.classList.add('mostrar-que-deu-empate');
            q7.classList.add('mostrar-que-deu-empate');
            q8.classList.add('mostrar-que-deu-empate');
            q9.classList.add('mostrar-que-deu-empate');
            setTimeout(() => {
                q1.classList.remove('mostrar-que-deu-empate');
                q2.classList.remove('mostrar-que-deu-empate');
                q3.classList.remove('mostrar-que-deu-empate');
                q4.classList.remove('mostrar-que-deu-empate');
                q5.classList.remove('mostrar-que-deu-empate');
                q6.classList.remove('mostrar-que-deu-empate');
                q7.classList.remove('mostrar-que-deu-empate');
                q8.classList.remove('mostrar-que-deu-empate');
                q9.classList.remove('mostrar-que-deu-empate');

            }, 2000);


        },
        // Função para mostrar qual jogador está jogando
        mostrarQualJOgadorEstaJogando() {
            if (this.identificarQualJogadorEstaNaVezDeJogar()) {// Adiciona ou remove classes para indicar o jogador atual

                this.jogadorO.classList.add('mostrar-tuno-jogador-o')
                this.jogadorX.classList.remove('mostrar-tuno-jogador-x')
            } else {

                this.jogadorX.classList.add('mostrar-tuno-jogador-x')
                this.jogadorO.classList.remove('mostrar-tuno-jogador-o')
            }
        },
        // Função para apagar a partida atual
        apagarPartida(nome) {
            setTimeout(() => {
                // Limpa os quadrados e reinicia o jogador
                for (let i = 0; i < 9; ++i) {
                    console.log('apagando');
                    this.todosOsIdsDosQuadrados[i].innerHTML = '';
                }
                /*if que define qual jogador ganhou e muda a variavel 'numerosParaDefinirQualJogadorJoga'
                 para determinar qual jogador vai jogar ('= 2' para o jogador 'X', '= 1' para o jogador 'O')
                */
                if (nome == 'x') {
                    numerosParaDefinirQualJogadorJoga = 2;
                } else if (nome == 'o') {
                    numerosParaDefinirQualJogadorJoga = 1;
                } else {

                }
                //Reseta os arrays de id que são capiturados quando um jogador clica em um quadrado no jogo
                this.quaisQuadradosJogadorXMarcou = [];
                this.quaisQuadradosJogadorOMarcou = [];
                // reativando a 'bloquearVerificacaoDeVitoria' variavelque bloqueia a função 'verificarVitoria()' e impede que o jogador ganhe mais de uma vez na partida
                this.bloquearVerificacaoDeVitoria = true
            }, 2000);
        },
        aplicarEfeitoNoQuadradoPressionado(quadrado) {

            quadrado.classList.add('efeitoAoPressionarTecla')

            setTimeout(() => {

                quadrado.classList.remove('efeitoAoPressionarTecla')
                quadrado.classList.add('efeitoAoPressionarTecla-quandoForApagada')
                setTimeout(() => {

                    quadrado.classList.remove('efeitoAoPressionarTecla-quandoForApagada')

                }, 500);

            }, 200);

        },
        // Função para verificar se houve empate
        empate(somaDosQuadradosMarcado) {
            if (somaDosQuadradosMarcado.length == 9) {
                return true// Retorna true se todos os quadrados estiverem marcados (empate)
            }
            return false// Retorna false se ainda houver jogadas possíveis
        },
        // Função para finalizar o jogo
        finalizarJogo(nome) {
            this.apagarPartida(nome);
            this.acrescentarPontosNaTabela(nome);

            this.bloquearVerificacaoDeVitoria = false /* bloqueia a 'bloquearVerificacaoDeVitoria'.
             Agora o jogador não pode mais ganha a não ser que essa variavel se torne true de novo
             */

        },
        // Função que inicia o jogo
        inicia() {
            this.clicarQuadrado();

        },
        // Função para lidar com o clique em um quadrado
        clicarQuadrado() {
            if (this.verificarVitoria()) {  // verifica se ah alguma vitoria, se não entao habilita o click nos quadrados do jogo
                document.addEventListener('mouseup', e => {  // Adiciona um ouvinte de clique ao documento
                    const el = e.target;
                    const elementoId = el.id;

                    this.passarQualQuadradoFoiClicado(el, elementoId);

                });
            }
        },
        // Função para processar o clique em um quadrado
        passarQualQuadradoFoiClicado(quadrado, id) {
            /*
            "quadrado.closest('.jogo')" verificar se o jogador clicou no jogo e não em outro lugar 
            */
            if (this.verificarVitoria() && quadrado.closest('.quadrado') && this.seOjogadorJaJogouNesseQuadrado(quadrado)) {

                ++this.numerosParaDefinirQualJogadorJoga // adiciona mais um na variavel que determina qual jogador vai jogar primeiro

                this.mostrarQualJOgadorEstaJogando();// mostra qual jogador e a vez de jogar

                if (this.identificarQualJogadorEstaNaVezDeJogar()) {// Processa o clique em um quadrado, marcando-o com 'X' ou 'O'

                    this.quaisQuadradosJogadorXMarcou.push(id);// guarda o id do quadrado que foi clicado para a array 'quaisQuadradosJogadorXMarcou' do jogador 'X'
                    quadrado.innerText = 'X'; // escreve 'X' no quadrado que foi cliado pelo jogador X
                    this.aplicarEfeitoNoQuadradoPressionado(quadrado)

                    console.log('o Jogador x esta jogando(Jogador par)')
                    console.log(this.quaisQuadradosJogadorXMarcou + 'jogador X')

                    this.verificarVitoria()



                } else {

                    this.quaisQuadradosJogadorOMarcou.push(id);// guarda o id do quadrado que foi clicado para a array 'quaisQuadradosJogadorOMarcou' do jogador 'O'
                    quadrado.innerText = 'O' // escreve 'O' no quadrado que foi cliado pelo jogador O
                    this.aplicarEfeitoNoQuadradoPressionado(quadrado)

                    console.log('o Jogador O esta jogando(Jogador impar)')
                    console.log(this.quaisQuadradosJogadorOMarcou + 'jogador O')

                    this.verificarVitoria()

                }

            }

        },
        bloquearVerificacaoDeVitoria: true, /*declara a variavel de bloqueio
        'bloquearVerificacaoDeVitoria' bloqueia do jogador ganhar mais de uma vez
         no periodo em que o jogo mostrar quem foi o ganhador e renicia 
        */

        // Função para verificar a vitória ou empate
        verificarVitoria() {

            const somaDosQuadradosMarcado = [...this.quaisQuadradosJogadorXMarcou, ...this.quaisQuadradosJogadorOMarcou] //junta os arrays de quadrados que os jogadores marcaram

            if (this.verificarQualJogadorFoiVitorioso(this.quaisQuadradosJogadorXMarcou)) {

                //* VITORIA JOGADOR 'X'
                if (this.bloquearVerificacaoDeVitoria) { // se o bloqueio estiver ativo libera o jogador de ganhar

                    this.finalizarJogo('x') // finaliza o jogo e mostrar quem ganhou pelo parametro 'X'

                    console.log('jogador x ganhou');

                }
                return false
            } else if (this.verificarQualJogadorFoiVitorioso(this.quaisQuadradosJogadorOMarcou)) { // se o bloqueio estiver ativo libera o jogador de ganhar

                //* VITORIA JOGADOR 'O'
                if (this.bloquearVerificacaoDeVitoria) {

                    this.finalizarJogo('o')// finaliza o jogo e mostrar quem ganhou pelo parametro 'O'

                    console.log('jogador o ganhou');

                }

                return false
            } else if (this.empate(somaDosQuadradosMarcado) && !this.verificarQualJogadorFoiVitorioso(this.quaisQuadradosJogadorOMarcou) && !this.verificarQualJogadorFoiVitorioso(this.quaisQuadradosJogadorOMarcou)) {
                // Esse empate so vai funcionar quando os if acima forem 'false' e o empate for 'true'
                /*  O simbolo > ! < acima inverte os valores que o if determina como 'true'.
                    ex: o valor que ele requer 'true' para rodar o codigo agora funcionara com 'false'
                */
                this.apagarPartida(somaDosQuadradosMarcado); // renicia a partida para que joquem outra partida
                this.mostrarQueOjogoDeuEmpate()




            } else {
                return true // se não ouver ganhador retorna true para que o jogo continue
            }
        },


    }
}
const jogoDaVelha = criarJogoDaVelha() // cria o jogo da velha atribui a uma variavel
jogoDaVelha.inicia();// usando a variavel 'jogoDaVelha' chama a função 'inicia()' de dentro da fução herdada de 'criarJogoDaVelha()'