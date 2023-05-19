import React from 'react'; // import react
import Nav from './components/Nav'; // import Nav component
import About from './components/About'; // import About component
import Projects from './components/Projects'; // import Projects component
import Contact from './components/Contact'; // import Contact component
import Header from './components/Header'; // import Header component
import Footer from './components/Footer'; // import Footer component


function App () {
  return (
    <main className = "text-gray-400 bg-gray-900 body-font">    
      <Header />            
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;   // export App component

















