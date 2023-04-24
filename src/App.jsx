

// import './App.css'
import Navbar from './componentes/navbar/navbar'
import ItemListContainer from './componentes/itemListContainer/itemListContainer'
import itemDetailContainer from './componentes/ItemDetailContainer/itemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {   
let style = {fontSize: 22, backgroundColor: `white`, color: `black`}
    return ( 
        <div style= {style}>
          <Navbar/>
          <itemDetailContainer />
          <ItemListContainer/>
          
        </div>
    )
}


export default App
