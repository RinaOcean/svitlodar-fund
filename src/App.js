import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';
// import How from './components/How';
import Main from './components/Main';
import UnderConstruction from './components/UnderConstruction';
// import WhatWeDo from './components/WhatWeDo';
import WhoDoWeHelp from './components/WhoDoWeHelp/WhoDoWeHelp';
// import Why from './components/Why';
import WhyItsImportant from './components/WhyItsImportant';
import { Route, Routes} from 'react-router-dom';
import InitialView from './components/InitialView/InitialView';

function App() {
  return (
    <div className="App">
      
     <Header/>
      <Routes >
      <Route exact path="/"  element={<InitialView/>}/>
      <Route path="/aboutus" element={<UnderConstruction/>}/>
      <Route path="/whatwedo" element={<UnderConstruction/>}/>
      <Route path="/contacts" element={<UnderConstruction/>}/>
      </Routes>
      
     <Footer/> 
    </div>
  );
}

export default App;
