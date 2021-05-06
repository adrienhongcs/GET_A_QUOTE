import AppNavbar from './components/AppNavbar' 
import Tabs from './components/Tabs'
import QuoteModal from './components/QuoteModal'

import { Provider } from 'react-redux'
import store from './store' 

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <AppNavbar />
        <QuoteModal />
        <Tabs />
      </div>
    </Provider>
  );
}

export default App;
