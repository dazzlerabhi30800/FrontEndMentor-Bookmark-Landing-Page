import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Feature from './Components/Feature';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className='flex flex-col w-full'>
       <HeroSection />
       <Feature />
      </main>
    </div>
  );
}

export default App;
