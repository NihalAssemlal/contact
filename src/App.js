
import { Routes, Route } from 'react-router-dom';
import Home from './component/route/Home';
import Ajout from './component/route/Ajout';
import Nav from './component/route/Nav';
import ContactContextProvider from './contexts/Context';


function App() {
 



  return (
    <div>
      <Nav />
      <ContactContextProvider>
      <Routes basename='/contactApplication'>
        <Route path='/' element={<Home/>}  />
        <Route path='/ajout' element={<Ajout/>}  />
      </Routes>
      </ContactContextProvider>




      {/* <Routes>
        <Route path='/' element={<Comp2/>} />
        <Route path='/' element={<Comp1/>} />
      </Routes> */}
    </div>
  );
}

export default App;
