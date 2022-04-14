import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import UnderConstruction from './components/UnderConstruction';
import { Route, Routes} from 'react-router-dom';
import InitialView from './components/InitialView/InitialView';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import ScrollUpBtn from './components/ScrollUpBtn';

function App() {
  return (
    <div className="App">
      
     <Header/>
      <Routes >
      <Route exact path="/"  element={<InitialView/>}/>
      <Route path="/aboutus" element={<UnderConstruction/>}/>
      <Route path="/whatwedo" element={<WhatWeDo/>}/>
      <Route path="/contacts" element={<UnderConstruction/>}/>
      </Routes>
      
      <ScrollUpBtn/>
     <Footer/> 
    </div>
  );
}

export default App;
