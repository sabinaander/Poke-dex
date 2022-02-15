import { initializeParse } from '@parse/react';

initializeParse(
  'http://localhost:8800/parse',
  'myAppId',
  //javascript key
  ''
);

import SomeComponent from './SomeComponent';
import { Cards } from './Cards';
import { SearchField } from './SearchField';
import PokeDex from './PokeDex';

function App() {
  return (
    <div>
      <SomeComponent />
      <PokeDex />    
    </div>
    
  )
}

export default App;
