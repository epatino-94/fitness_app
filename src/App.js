import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/Navbar';
import CalorieSection from './Components/CalorieSection/CalorieSection';
import MuscleSection from './Components/MuscleSection/MuscleSection';
import styled from 'styled-components';

function App() {


  const [viewport,setViewport] = React.useState(window.innerWidth < 576 ? 'Mobile' : window.innerWidth < 821 ? 'Tablet' : 'Desktop')
  const [theme, setCurrentTheme] = React.useState('light');

  console.log('viewport',viewport)
  
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
    <AppWrapper theme={theme}>
      <NavBar invertTheme={invertTheme} viewport={viewport} theme={theme}/>
      {<CalorieSection viewport={viewport} theme={theme}/>}
      <MuscleSection viewport={viewport} theme={theme}/>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
    ${props=>props.theme === 'light' && `
        background-image: linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% );
    `}
    ${props=>props.theme === 'dark' && `
        background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );
    `}
`

export default App;
