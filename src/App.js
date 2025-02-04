
import './App.css';
import { useState} from 'react'
import Result from './Result'



function App() {
  const [term,setTerm]=useState('');
  const [Goal,setGoal]=useState(Math.floor(Math.random()*10)+1)

  function processfunction(event){
    setTerm(event.target.value);
  }

  function resetfunction(){
    setGoal(Math.floor(Math.random()*10)+1);
    setTerm('');
  }
  return (
    <div className="App">
      <div id = "container">
        <div id = "heading"> Guess the Number betweeen 1-10 </div>
        <div id = "form ">
          <label>Enter the number:</label>
          <input
          type="text"
          onChange={processfunction}
          value={term}
          
          />
        </div>
        <div id = "result" >
            <Result Goal={Goal} term={term} onCorrect={resetfunction} />
        </div>

      </div>
    </div>
  );
}

export default App;
