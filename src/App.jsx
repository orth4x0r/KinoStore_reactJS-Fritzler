import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer';

import './App.css';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer texto="Hola, soy un prop"/>
    </>

    );
}

export default App;
