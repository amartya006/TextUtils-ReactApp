import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState({
      color: 'black',
      backgroundColor: 'white'
  })

  // const [colorText, setcolorText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }



  const darkMode = () => {
    setmode({
        color: 'white',
        backgroundColor: 'black'
      })
      // setcolorText("Disable Dark Mode");
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Theme Enabled", "success");
    }
    
    const lightMode = () => {
    setmode({
        color: 'black',
        backgroundColor: 'white'
      })
      // setcolorText("Disable Dark Mode");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Theme Enabled", "success");
    }
    
    const blueMode = () => {
    setmode({
        color: 'white',
        backgroundColor: '#125488'
      })
      // setcolorText("Disable Dark Mode");
      document.body.style.backgroundColor = '#125488';
      showAlert("Blue Theme Enabled", "success");
    }

    let modes = {
      dark: darkMode,
      light: lightMode,
      blue: blueMode
    }
  return (
    
      <Router>

      
      <Navbar title= "TextUtils" aboutText="About TextUtils" mode = {mode} modes={modes}   />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/" element={<TextForm mode = {mode} modes={modes}  showAlert = {showAlert} />}>
            
          </Route>
          <Route path="/about" element={<About />}>
            
          </Route>
          
          
        </Routes>
        
      </div>
      </Router>
      
    
  );
}

export default App;
