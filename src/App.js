import "./App.css";
import Carta from "./components/Carta";

function App() {
  return (
    <div className="App">
      <Carta remetente={"Linda"} destino={"Pernambuco"} />
      <p>
        Estou escrevendo essa carta por causa da atividade que os alunos vão
        fazer, okay.<br/> Não desiste, continue fazendo as atividades, treinando e
        praticando. <br/> O céu é o limite!
      </p>
    </div>
  );
}

export default App;
