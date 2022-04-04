import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import How from './components/How';
import Main from './components/Main';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Why from './components/Why';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <AboutUs/>
     <WhatWeDo/>
     <How/>
     <Why/>
     <Contacts/>
     <Footer/>
    </div>
  );
}

export default App;
