
import './App.css'
import Counter from './Counter';
import Team from './Team';
import User from './user';
import Friends from './Friends';


function App() {
    function eventHandleClic(){
        alert('button is clicked');
    }
    const click2=()=>{
        alert('click 2 is clicked');
    }
    const addToFive=(num)=>{
        alert(num+5);
    }
    
  return (
    <>
      <Counter></Counter>
      <Team></Team>
      <User></User>
      <Friends></Friends>
      

      <h3>Core Concepts of React part 2</h3>
      <button onClick={eventHandleClic}>Click Me</button>
      <button onClick={click2}>Click Me2</button>
      <button onClick={()=>alert('click me3 is clicked')}>Click Me3</button>
      <button onClick={()=>addToFive(20)}>Click add</button>
    </>
  )
}

export default App
