import { useState } from 'react'
import './App.css'
import Clock from './components/clock/clock'
import Header from './components/header/header'
import Container from './components/container/container'

type ClockData = {
  id: string;
  name: string;
  offset: number;
}

function App() {
  const [clocks, setClocks] = useState<ClockData[]>([]);

  const addClock = (id: string, name: string, offset: number) => {
    setClocks([...clocks, {id: id, name: name, offset: offset}]);
   }

  const delClock = (id: string) => {
    
    setClocks(clocks.filter(clock => clock.id !== id));
  } 
  
  return (
    <>
    <Header handler={addClock}/> 
    <Container>
      {
        clocks.map(clock => {
          return(
            <Clock  key={clock.id} id={clock.id} name={clock.name} offset={clock.offset} handler={delClock}/>
          )
        })
      }
    </Container>
    </>
  );
 }

export default App;
