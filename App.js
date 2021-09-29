import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//let name = "AJ BRAVO"
function App() {
  return (
    <>
      <Navbar title="TextPears" aboutText="About us" />
      {/* <Navbar /> */}
      <div className="container my-3">

        <TextForm heading=" Enter the text to analyze" />

      </div>
    </>
  );
}

export default App;
