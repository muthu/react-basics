import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BookSummary } from './components/bookSummary/bookSummary';
import { BookSummaryList } from './components/bookSummaryList/bookSummaryList';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BookSummaryList></BookSummaryList>
      {/* <BookSummary title="Moby Dick" summary="A crazed captain hunts a white whale."></BookSummary> */}
    </div>
  );
}

export default App;
