import { initializeParse } from '@parse/react';

initializeParse(
  'http://localhost:8800/parse',
  'myAppId',
  //javascript key
  ''
);

import Button from './Button';

function App() {
  return (
    <div>
      <Button></Button>
    </div>
  )
}

export default App;
