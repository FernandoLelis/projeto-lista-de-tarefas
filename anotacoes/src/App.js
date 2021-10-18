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
    var tarefa = document.getElementById('content-tarefa');

    setarTarefas([
      ...tarefas,
      {
        id: new Date().getTime(),
        tarefa: tarefa.value,
        finalizada: false
      }
    ]);

    window.localStorage.setItem('tarefas',JSON.stringify([
      ...tarefas,
      {
        id: new Date().getTime(),
        tarefa: tarefa.value,
        finalizada: false
      }
    ]));

    setModal(false);

  }

  const marcarConcluida = (id,opt) =>{
    let novasTarefas = tarefas.filter(function(val){
      if (val.id == id) {
        val.finalizada = opt;
      }

      return val;
    })

    setarTarefas(novasTarefas);
    window.localStorage.setItem('tarefas',JSON.stringify(novasTarefas));
  }

  const abrirModal = () => {
    setModal(!modal);
  }

  useEffect(() => {
    // Fazer uma chamada para API e preencher o estado tarefa.
    if (window.localStorage.getItem('tarefas') != undefined) {
      setarTarefas(JSON.parse(window.localStorage.getItem('tarefas')));
        console.log(window.localStorage.getItem('tarefas'));
    }
  },[])

  return (
    <div className="App">
      {
        modal?
        <div className="modal">
          
          <div className="modalContent">
              <h3>Adicionar sua tarefa</h3>
              <input id="content-tarefa" type="text" />
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
            if (!val.finalizada) {
              return (
                <p onClick={() => marcarConcluida(val.id,true)}>{val.tarefa}</p>
              );
            } else {
              return (
                <p onClick={() => marcarConcluida(val.id,false)} style={{textDecoration:'line-through'}}>{val.tarefa}</p>
              );
            } 
          })
        }
      </div>
    </div>
  );
}

export default App;
