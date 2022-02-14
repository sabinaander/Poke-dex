import { initializeParse } from '@parse/react';

initializeParse(
  'http://localhost:8800/parse',
  'myAppId',
  //javascript key
  ''
);

import Button from './Button';
import SomeComponent from '../SomeComponent';

function App() {
  return (
    <div>
      <SomeComponent />
      <Button></Button>
      
    </div>
    
  )
}

export default App;
