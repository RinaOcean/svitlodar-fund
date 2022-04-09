import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';
import How from './components/How';
import Main from './components/Main';
import WhatWeDo from './components/WhatWeDo';
import WhoDoWeHelp from './components/WhoDoWeHelp/WhoDoWeHelp';
import Why from './components/Why';
import WhyItsImportant from './WhyItsImportant';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <AboutUs/>
     <WhoDoWeHelp/>
     <WhyItsImportant/>
     {/* <WhatWeDo/> */}
     {/* <How/> */}
     {/* <Why/> */}
     <Contacts/>
     <Footer/> 
    </div>
  );
}

export default App;
