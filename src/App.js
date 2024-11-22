import './App.scss';
import TestProject from './component/TestProject/TestProject';

function App() {
  return (
    <div className="App">
      <h2>Police Headquarters Jaipur</h2>
      <h3>Data Entry Form</h3>
     
      {<TestProject/>}
    </div>
  );
}

export default App;
