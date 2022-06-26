import './App.css';
import { Provider } from 'react-redux';           //es para leer la tineda 
import generateStore from './store';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';



function App() {
 
  const store = generateStore()
  return (
    <Provider store={store}>  
    <Navbar/>
      <Routes> 
        <Route path="/" element={<Home/>}/>   
        <Route path="/home" element={<Home/>}/> 
      </Routes> 
      <Footer/>
    </Provider>
    
  );
}
export default App;
