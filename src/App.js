import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import Button from './components/Button';
import CountDisplay from './components/CountDisplay';

function App() {
  return (
      <Provider store= {store}>
        <div className="App">
          <div className="Container" style={{float: 'left'}}>
            <Button />
          </div> 
          <div className="Container" style={{float: 'right'}}>
            <CountDisplay />
          </div>     
        </div>
    </Provider>
  );
}

export default App;
