import logo from './logo.svg';
import './App.css';
import { Desktop, MsDos } from '@react95/icons';
import WebsiteTaskbar from './components/Taskbar';
import WebsiteDesktop from './components/Desktop';
// import DataContext from './contexts/dataContext';
// import DataService from './services/dataService';
import { GlobalStyle } from '@react95/core';
import { EventEmitter } from 'events';
// import { AppProvider } from './context/appContext';

// const dataService = new DataService();
const emitter = new EventEmitter();

function App() {
  return (
    <div className="App">
      <div className='App-body'>
        <GlobalStyle />
        <WebsiteDesktop />
        <WebsiteTaskbar />
      </div>
    </div>
  );
}

export default App;
