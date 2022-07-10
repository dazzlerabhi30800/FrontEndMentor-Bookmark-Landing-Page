import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Feature from './Components/Feature';
import Extension from './Components/Extension';
import Accordian from './Components/Accordian';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className='flex flex-col w-full'>
       <HeroSection />
       <Feature />
       <Extension />
       <Accordian />
       <SignUp />
      </main>
    </div>
  );
}

export default App;
