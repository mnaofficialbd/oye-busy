import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <button class="btn w-64 rounded-full">Button</button>
    </div>
  );
}

export default App;
