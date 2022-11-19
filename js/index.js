// Container Infos Página Inicial
Vue.component('myProfile', {
    template: `
    <div class="container-info">
        <h1 class="title">
            Portfólio Pessoal
        </h1>

        <div class="mydata">
            <div class="data-title">
                <h3>
                    Meus dados:
                </h3>
            </div>
            <ul class="data">
                <li>
                    <p><span>Nome completo:</span> Henrique Ferreira Pereira.</p>
                </li>
                <li>
                    <p><span>Idade:</span> 18 anos.</p>
                </li>
                <li>
                    <p><span>Profissão:</span> Desenvolvedor Web Front End.</p>
                </li>
                <li>
                    <p><span>Nível de Ensino:</span> Ensino Superior em andamento(Faculdade).</p>
                </li>
                <li>
                    <p><span>Empresa:</span> Wopus Studio Web.</p>
                </li>
                <li>
                    <p><span>Cargo:</span> Desenvolvedor Front End | Funcionário./p>
                </li>
                <li>
                    <p><span>Linguagens:</span> HTML5, CSS3, Javascript, C.</p>
                </li>
                <li>
                    <p><span>Externos:</span> Vue JS, Less, Sass,  Node JS, JQuery.</p>
                </li>
            </ul>
        </div>

        <div class="mycontact">
            <div class="contact-title">
                <h3>
                    Meus dados:
                </h3>
            </div>
            <ul class="contact">
                <li>
                    <p><i class="fa-regular fa-envelope"></i>Henrique Ferreira Pereira.</p>
                </li>
                <li>
                    <p><i class="fa-solid fa-phone"></i>(55) 5499702-6820</p>
                </li>
                <li>
                    <p><i class="fa-brands fa-linkedin-in"></i>Henrique Ferreira.</p>
                </li>
            </ul>
        </div>
    </div>
    `
})

Vue.component('myHistory', {
    template: `
    <div class="container-my-history">
        <h1 class="title">
            Minha história com tecnologia
        </h1>

        <div class="history">
            <p>     Minha história com a tecnologia começou há muito tempo atrás, quando ganhei meu primeiro celular, um Nokia 1208 Azul. Quando ganhei esse aparelho, não tinha a noção do que viria pela frente ou do que a tecnologia poderia alcançar. Fazer ligações e jogar naquele celular já era o suficiente para mim, pois na época eu tinha por volta de 10 anos de idade. Posteriormente, ganhei um Samsung Galaxy Pocket Mini, o qual já display e touch, já era um smartphone. Nele as possibilidades eram maiores, já era possível acessar redes sociais com facilidade, ver vídeos no youtube, por exemplo. Depois disso, tive mais alguns celulares da Motorola e hoje uso Samsung.</p>

            <p>     Quando tive essa experiência com smartphones e, posteriormente, com PC\’s, Notebooks e Consoles, me interessei muito pela maneira a qual os jogos eram feitos, e então queria aprender a fazer meu próprio jogo. A primeira Engine que usei foi a Godot Engine, pois era o que o que meu notebook na época conseguia processar. Nela programei alguns joguinhos de plataforma, porém nada de mais. A grande virada de chave é que ali tive meu primeiro contato com uma linguagem de programação.</p>

            <p>     Depois desse primeiro contato com a programação, me interessei em aprender mais e então escolhi aprender Python. Aprendi o básico de Python e segui em frente, até que eu conheci o Desenvolvimento Web.</p>

            <p>     Quando entrei em contato com desenvolvimento web, aplicações web e  websites, foi como se eu tivesse descoberto um novo mundo. Fiquei encantado, pois sempre gostei de sites bonitos, bem planejados e interativos. Fiz cursos de devWeb e hoje trabalho com isso, desenvolvendo o front-end de sites profissionais para empresas.
            </p>
            <p>     Quando entrei em contato com desenvolvimento web, aplicações web e  websites, foi como se eu tivesse descoberto um novo mundo. Fiquei encantado, pois sempre gostei de sites bonitos, bem planejados e interativos. Fiz cursos de devWeb e hoje trabalho com isso, desenvolvendo o front-end de sites profissionais para empresas.
            </p>
            <p>     Quando entrei em contato com desenvolvimento web, aplicações web e  websites, foi como se eu tivesse descoberto um novo mundo. Fiquei encantado, pois sempre gostei de sites bonitos, bem planejados e interativos. Fiz cursos de devWeb e hoje trabalho com isso, desenvolvendo o front-end de sites profissionais para empresas.
            </p>
        </div>
    </div>
    `
})

Vue.component('mySkills', {
    template: ` 
    <div class="container-skills">
        <h1 class="title">
            Minhas Competências
        </h1>

        <div class="myskills">
            <div class="skills-title">
                <h3>Linguagens / Folhas de Estilo / Frameworks / Compiladores</h3>
            </div>
            <ul class="skills">
                <li>
                    <p><i class="fa-brands fa-html5"></i><span>HTML5: </span> Nível de conhecimento - Avançado</p>
                </li>
                <li>
                    <p><i class="fa-brands fa-css3-alt"></i><span>CSS3: </span> Nível de conhecimento - Avançado.</p>
                </li>
                <li>
                    <p><i class="fa-brands fa-square-js"></i><span>Javascript: </span> Nível de conhecimento - Intermediário.</p>
                </li>
                <li>
                    <p><i class="fa-brands fa-vuejs"></i><span>Vue JS:</span> Nível de conhecimento - Intermediário.</p>
                </li>
                <li>
                    <p><i class="fa-brands fa-js"></i><span>JQuery:</span> Nível de conhecimento - Intermediário.</p>
                </li>
                <li>
                    <p><i class="fa-brands fa-node-js"></i><span>Node JS:</span> Nível de conhecimento - Básico./p>
                </li>
                <li>
                    <p><i class="fa-brands fa-less"></i><span>Less:</span> Nível de conhecimento - Intermediário.</p>
                </li>
                <li>
                    <p>C<i class="fa-brands fa-sass"></i><span>Sass:</span> Nível de conhecimento - Intermediário.</p>
                </li>
                <li>
                    <p><span>C:</span> Nível de conhecimento - Avançado.</p>
                </li>
            </ul>
        </div>
    </div>
    `
})

var app = new Vue({
    el: '.general-portfolio',
    data: {
        username: 'Henrique Ferreira Pereira',
        showInfo:'myProfile',
        navItems:[
            {
                nameItem: 'Minha história com tecnologia',
                bold: false
            },
            {
                nameItem: 'Minhas competências',
                bold: false
            },
            {
                nameItem: 'Minha experiência',
                bold: false
            },
        ]
    },
    methods: {
        showMyProfile(){
            if(this.showInfo == 'myProfile'){
                return true
            } else{
                return false
            }
        },

        showMyHistory(){
            if(this.showInfo == 'myHistory'){
                this.navItems[0].bold = true;
                this.navItems[1].bold = false;
                this.navItems[2].bold = false;
                return true
            } else{
                return false
            }
        },

        showMySkills(){
            if(this.showInfo == 'mySkills'){
                this.navItems[0].bold = false;
                this.navItems[1].bold = true;
                this.navItems[2].bold = false;
                return true
            } else{
                return false
            }
        },

        navItemController(navItem, param){
            this.param = param;
            this.navItem = navItem
            let itemAtual = document.querySelector("this.navItem  p");
            if(param == 0) {
                app.showInfo = 'myHistory';
                itemAtual.style.fontWeight = 'bold';
            } else if(param == 1){
                app.showInfo = 'mySkills'
                itemAtual.style.fontWeight = 'bold';
            } else if(param == 2){
            }
        },

        showBold(index){
            this.index = index;
            
            if(this.navItems[this.index] == true){
                return true;
            } else{
                return false;
            }
        }

        
    }
})