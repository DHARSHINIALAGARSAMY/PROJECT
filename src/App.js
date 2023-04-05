import './App.css';
import React from 'react';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Facilities from './Pages/Facilities';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
// import Table from './Pages/Table';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/About" element={<About/>}/>
      
      <Route exact path="/Facilities" element={<Facilities/>}/>
      <Route exact path="/Menu" element={<Menu/>}/>
    
      </Routes>
      </BrowserRouter>
    </div>
    )
  }

  // import logo from './logo.svg';
  // function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;




// <Route exact path="/Table" element={<Table/>}/> 

// <Route exact path="/Contact" element={<Contact/>}/>