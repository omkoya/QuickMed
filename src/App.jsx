import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Donations from './pages/Donations'
import About from './pages/About'
import { Home } from "./pages/home";
import Footer from '../src/components/Footer';
import Partnership from "./pages/Partnership";

function App() {


  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element = { <Home /> }> </Route>
        <Route path="/about" element = { <About /> }> </Route>
        <Route path="/partnership" element = { <Partnership /> }> </Route>

        <Route path="/donation" element = { <Donations /> }> </Route>

      </Routes>
      
      <Footer />
      
    </>
    
    
   
  );
}

export default App;
