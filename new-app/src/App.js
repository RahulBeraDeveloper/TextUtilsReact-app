import React , { useState }from 'react'; // Import React
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import NewAbout from './components/NewAbout';
import Alert from './components/Alert';

function App() {
  const[mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#183D3D";
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="#fff";
      showAlert("light mode has been enabled","success")
    }
  }
  const [alert , setAlert] =useState();
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500
   
    );
  }
  return (
  <>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className='container' >
  <TextForm heading="Enter your text to analyze" showAlert={showAlert}mode={mode}/>
   {/* <NewAbout></NewAbout> */}
  </div>
  
  </>
  );
}

export default App; // Don't forget to export the component
