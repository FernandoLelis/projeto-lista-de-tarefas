import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const [tarefas, setarTarefas] = useState([
    /*
    {
      id:0,
      tarefa:'Minha tarefa do dia',
      finalizada: false
    },
    {
      id:0,
      tarefa:'Minha tarefa do dia 2',
      finalizada: true
    },
    */
  ]);
  const [modal, setModal] = useState(false);

  const salvarTarefa = () => {
    // TODO: Salvar a Tarefa.
  }

  const abrirModal = () => {
    setModal(!modal);
  }

  useEffect(() => {
    // Fazer uma chamada para API e preencher o estado tarefa.
  },[])

  return (
    <div className="App">
      {
        modal?
        <div className="modal">
          
          <div className="modalContent">
              <h3>Adicionar sua tarefa</h3>
              <input type="text" />
              <button onClick={()=>salvarTarefa()}>Salvar!</button>
          </div>

        </div>
        :
        <div></div>
      }
      <div onClick={()=>abrirModal()} className="addTarefas">+</div>
      <div className="boxTarefas">
        <h2>Minhas Tarefas do Dia</h2>
        {
          tarefas.map((val)=>{
            if (val.finalizada) {
              return (
                <p>{val.tarefa}</p>
              );
            } else {
              return (
                <p style={{textDecoration:'line-through'}}>{val.tarefa}</p>
              );
            } 
          })
        }
      </div>
    </div>
  );
}

export default App;
