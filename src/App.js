import './App.css';
import LoginByGoogle from './Components/GoogleLogin/GoogleLogin';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <LoginByGoogle/>
    </div>
  );
}

export default App;
