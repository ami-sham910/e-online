import './App.css';
import Navbar from './Components/Navbar';
import Crousel from './Components/Crousel';
import Courses from "./Components/Courses";
import Instructur from './Components/Instructur';
import Read from './Components/Read';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Crousel></Crousel>
      <Courses></Courses>
      <Instructur></Instructur>
      <Read></Read>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
