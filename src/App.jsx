

// import './App.css'
import Navbar from './componentes/navbar/navbar'
import ItemListContainer from './componentes/itemListContainer/itemListContainer'
import ItemDetailContainer from './componentes/itemDetailContainer/itemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {   
let style = {fontSize: 22, backgroundColor: `white`, color: `black`}
    return ( 
        <div style= {style}>
          <Navbar/>
          <ItemDetailContainer />
          <ItemListContainer/>
          
        </div>
    )
}


export default App
