import './App.css';
import Main from './component/Main';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div style={{paddingTop:"6rem", paddingBottom:"20rem"}} > 
      <div className="App">
        <Main />
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
