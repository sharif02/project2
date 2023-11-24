import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import LogIN from './pages/Sign/Login'
import Contact from './pages/About/Contact';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          
     <Routes >
            <Route exact path="/" element={<Home/>}>
             
            </Route>
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<LogIN/>} />
            <Route path='/contact' element={<Contact/>} />

            

            </Routes>
         
        </BrowserRouter>
    </div>
  );
}


export default App;
