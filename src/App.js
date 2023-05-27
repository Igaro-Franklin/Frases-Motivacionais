import React, {Component} from "react";
import'./estilo.css'
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.gerarFrase = this.gerarFrase.bind(this);

    this.frases = ['Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'A vida é 10% o que acontece conosco e 90% como reagimos a isso.',
    'Seja a mudança que você deseja ver no mundo.',
    'Nunca é tarde demais para ser o que você poderia ter sido.',
    'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
    'O único lugar onde o sucesso vem antes do trabalho é no dicionário.',
    'Não importa o quão devagar você vá, desde que não pare.',
    'O segredo para começar é parar de falar e começar a fazer.',
    'Não espere por oportunidades. Crie-as.',
    'O único limite para o seu crescimento é você mesmo.',
    'Acredite em si mesmo e todo o resto se encaixa.',
    'A persistência é o caminho do êxito.',
    'O que você faz hoje pode melhorar todos os seus amanhãs.',
    'Não tenha medo de desistir do bom para perseguir o ótimo.',
    'O sucesso normalmente vem para quem está ocupado demais para procurar por ele.',
    'Se você não está disposto a arriscar, você não pode crescer.',
    'A jornada de mil milhas começa com um único passo.',
    'Nunca desista, pois é justamente no momento mais escuro que a luz brilha mais forte.',
    'Faça uma coisa que você ama e nunca terá que trabalhar um dia sequer.',
    'Sonhe grande e se atreva a falhar.',
    'A motivação é o que te faz começar. O hábito é o que te faz continuar.',
    'Não deixe que o que você não pode fazer interfira no que você pode fazer.',
    'O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso. Se você ama o que faz, você será bem-sucedido.',
    'A dor é temporária. Desistir é para sempre.',
    'Seja corajoso o suficiente para viver a vida do jeito que você sempre quis.',
    'Tudo que você sempre quis está do outro lado do medo.',
    'A vida é 10% o que acontece comigo e 90% como eu reajo a isso.',
    'A sorte favorece os corajosos.',
    'Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados.',
    'Tudo o que você sempre quis está do outro lado do medo.',
    'Quanto mais você suar nos treinamentos, menos sangrará na batalha.',
    'O futuro pertence àqueles que acreditam na beleza de seus sonhos.',
    ];


  }

  gerarFrase(){
    let state = this.state;
    let fraseAleatoria = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = ' " ' + this.frases[fraseAleatoria] + ' " ';
    this.setState(state);
  }

  copiarTexto(){
    const el = document.createElement("textarea");
    el.value = this.state.textoFrase;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert('Copiado com sucesso');
  }


  render(){
    return(
      <div className="container">
        <h1 className="Titulo">Frases para status e legendas:</h1>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
        <div className="divBtn">
          <Botao nome="Gerar Frase" acaoBtn={this.gerarFrase}/>
          <button className="BtnCopiar" onClick={() => this.copiarTexto()}> Copiar frase </button>
        </div>
      </div>
    )
  }
}


class Botao extends Component{
  render(){
    return(
      <div>
        <button className="BtnAbrir" onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App;
