import './App.css';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer welcome="Bienvenidos a Dérive deco"/>
    </>
  )
}

export default App
