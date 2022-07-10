import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Feature from './Components/Feature';
import Extension from './Components/Extension';
import Accordian from './Components/Accordian';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
