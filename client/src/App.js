import React from 'react'; // import react
// import { Navigate } from 'react-router-dom'; // import react router
import Nav from './components/Nav'; // import Nav component
import About from './components/About'; // import About component
import Projects from './components/Projects'; // import Projects component
import Contact from './components/Contact'; // import Contact component
// import './App.css'; // import App.css


function App () {
  return (
    <main className = "text-gray-400 bg-gray-900 body-font">
      <Nav />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
















// import logo from './logo.svg';
// import './App.css';

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

// export default App;
