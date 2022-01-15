import {useState} from 'react';
import {Header} from './components/header';
import {Footer} from './components/footer';

const App = () => {
  const [name, setName] = useState('Caio')

  const [age, setAge] = useState(28)

  const [bg, setBg] = useState ('#FF0000')

  const [list, setList] = useState([
    "Caio Gomes",
    "Noah Henrique",
    "Beatriz Conceição"
  ])

  const handle20 = () =>{
    setAge(20)
    setBg('#00FF00')
  }

  const handle28 = () =>{
    setAge(28)
    setBg('#FF0000')
  }

  return (
    <div style={{backgroundColor: bg}}>
      
      <Header name= {name} age={age} />

      {age === 28 && 

<button onClick={handle20}>Tenho 20 anos</button>

      }

      {age === 20 && 
      <button onClick={handle28}>Tenho 28 anos</button>
    }

    <hr/>

    <ul>
      {list.map((item, index)=>(
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>

      

      <Footer />
      

    </div>
  )
}



export default App