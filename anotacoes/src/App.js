import './App.css';
import {useState} from 'react';

function App() {

  const [tarefas, setarTarefas] = useState([]);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="addTarefas">+</div>
      <div className="boxAnotacoes">


      </div>
    </div>
  );
}

export default App;
