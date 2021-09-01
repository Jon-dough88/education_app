import { Provider } from 'react-redux';
import './App.css';
import Homepage from '../src/Homepage';

function App() {
  return (
    <div className="App">
      <Provider>
        <Homepage />
      </Provider>  
    </div>
  );
}

export default App;
