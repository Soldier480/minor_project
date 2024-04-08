import Header from './Header.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Blog.jsx"
import About from "./About.jsx"
import SavingsCalculator from './SavingsCalculator.jsx';
import Display from "./Display.jsx"
function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Blog/>}></Route>
          <Route path="/blog" index element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/savings" element={<SavingsCalculator />} />
          <Route path="/display" element={<Display />} />
         
        
        
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
