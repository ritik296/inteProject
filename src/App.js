import logo from './logo.svg';
import './App.css';
import { Home } from './home';
import { Navbar } from './components/navbar';
import { ContactPopUp } from './components/contactPopUp';
import { useState } from 'react';

function App() {
  const [ contactToggle, setContactToggle] = useState(false);
  return (
    <div className="App w-screen h-screen">
      <div className="w-[1440px] h-screen top-[] relative">
        <Navbar setContactToggle={setContactToggle}/>
        <Home />
        <ContactPopUp contactToggle={contactToggle} setContactToggle={setContactToggle}/>
      </div>
    </div>
  );
}

export default App;
