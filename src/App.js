import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/Navbar';
import CalorieSection from './Components/CalorieSection/CalorieSection';


function App() {


  const [viewport,setViewport] = React.useState(window.innerWidth < 576 ? 'Mobile' : window.innerWidth < 768 ? 'Tablet' : 'Desktop')
  const [theme, setCurrentTheme] = React.useState('light');
  
  const invertTheme = (theme) => {
    theme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light');
  }
  
  const handleResize = () => {
    window.innerWidth < 576 ? setViewport('Mobile') : window.innerWidth < 768 ? setViewport('Tablet') : setViewport('Desktop')
  }
  
  React.useEffect(() => {
    window.addEventListener("resize",handleResize);
  },[]);
  
  

  return (
    <>
      <NavBar invertTheme={invertTheme} viewport={viewport} theme={theme}/>
      <CalorieSection viewport={viewport} theme={theme}/>
    </>
  );
}

export default App;
