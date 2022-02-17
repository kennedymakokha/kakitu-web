import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Contact from './contact';
import Home from './home';
import Whiteboard from './whiteboard';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/contact_us" exact element={<Contact />} > </Route>
        <Route path="/whiteboard" exact element={<Whiteboard />} > </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
