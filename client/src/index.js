import React from 'react';
import Parse from 'parse';
import { useParseQuery } from '@parse/react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import testUtils from 'react-dom/test-utils';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );


const SomeComponent = () => {
    const parseQuery = new Parse.Query('pokemon')
    // parseQuery.equalTo('name')
  
    const {
      isLive, // Indicates that Parse Live Query is connected
      isLoading, // Indicates that the initial load is being processed
      isSyncing, // Indicates that the library is getting the latest data from Parse Server
      results, // Stores the current results in an array of Parse Objects
      count, // Stores the current results count
      error, // Stores any error
      reload // Function that can be used to reload the data
    } = useParseQuery(
      parseQuery, // The Parse Query to be used
      {
        enableLocalDatastore: true, // Enables cache in local datastore (default: true)
        enableLiveQuery: true // Enables live query for real-time update (default: true)
      }
    );
  
    return (
      <div>
        {isLoading && (
          <p>Loading...</p>
        )}
        {isLive && (
          <p>Live!</p>
        )}
        {isSyncing && (
          <p>Syncing...</p>
        )}
        {results && (
          <ul>
            {results.map(result => (
              <li key={result.id}>
                Name of pokemon: {result.get('name')}<br />
                Dex ID:  {result.get('dexNumber')}
              </li>
            ))}
          </ul>
        )}
        <p>{count}</p>
        {error && (
          <p>{error.message}</p>
        )}
        <button
          onClick={reload}
        >
          Reload
        </button>
      </div>
    );
  };
  
  export default SomeComponent;

ReactDOM.render(
    <SomeComponent />,
    document.getElementById('root')
);
