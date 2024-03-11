import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Donations from './pages/Donations'
import About from './pages/About'


function App() {


  return (
    <>
      <Navigation />

      <Routes>

        <Route path="about" element = { <About /> }> </Route>

        <Route path="/donation" element = { <Donations /> }> </Route>

      </Routes>
      
      
    </>
    
    
   
  );
}

export default App;
