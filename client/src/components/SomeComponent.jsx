import Parse from 'parse';
import { useParseQuery } from '@parse/react';

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
  
    // list of objects in database
    return (
      <div className='firstPage'>
        <Log-In/>

        {results && (
          <ul>
            {results.map(result => (
              <li key={result.id}>
                Welcome: {result.get('UserName')}!<br />
              </li>
            ))}
          </ul>
        )}
        <p>{count}</p>
        {error && (
          <p>{error.message}</p>
        )}
      </div>
    );
  };
  
  export default SomeComponent;