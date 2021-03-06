import React from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import UnderConstruction from './components/UnderConstruction';
import { Route, Routes} from 'react-router-dom';
import InitialView from './components/InitialView/InitialView';
import WhatWeDoVideo from './components/WhatWeDoVideo/WhatWeDoVideo';
import WhatWeDoPicture from './components/WhatWeDoPicture/WhatWeDoPicture';
import ScrollUpBtn from './components/ScrollUpBtn';
import Certificates from './components/Certificates/Certificates';
import HowToDonate from './components/HowToDonate';
import Contacts from './components/Contacts';
import Help from './components/Help';
import CreepingLine from './components/CreepingLine/CreepingLine';

function App() {
  return (
    <div className="App">
     <CreepingLine/>
     <Header/>
      <Routes >
      <Route exact path="/"  element={<InitialView/>}/>
      <Route path="/aboutus" element={<UnderConstruction/>}/>
      <Route path="/whatwedopicture" element={<WhatWeDoPicture/>}/>
      <Route path="/whatwedovideo" element={<WhatWeDoVideo/>}/>
      <Route path="/documents" element={<Certificates/>}/>
      <Route path="/donate" element={<HowToDonate/>}/>
      <Route path="/help" element={<Help/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
      
      <ScrollUpBtn/>
     <Footer/> 
    </div>
  );
}

export default App;
