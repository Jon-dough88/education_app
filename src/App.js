import { Provider } from 'react-redux';
import './App.css';
import Homepage from '../src/Homepage';
import appStore from '../src/businessLogic/appStore/appStore';


function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Homepage />
      </Provider>  
    </div>
  );
}

export default App;
