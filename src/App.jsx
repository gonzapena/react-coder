
import './App.css';
import { ItemList } from './components/ItemList/ItemList';
import { Navbar } from './components/Navbar/Navbar';

function App() {

  let saludo = "Hola juancito como estas"
  let edad = 25

  return (
    <div className="App">
      <Navbar color="blue" />
      <ItemList saludo={saludo} edad={edad} />
    </div>
  );
}

export default App;


