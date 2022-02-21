import { initializeParse } from '@parse/react';

initializeParse(
  'http://localhost:8800/parse',
  'myAppId',
  //javascript key
  ''
);

import SomeComponent from './SomeComponent';
import { Posts } from './Posts';
import { SearchField } from './SearchField';
import SocialPage from './SocialPage';
import { LogIn } from './LogIn';
import Header from './Header'

function App() {
  let loggedIn = false

  return (
    <div>
      <Header />

      {!loggedIn &&
        <LogIn />
      }
      {loggedIn &&
        <SocialPage />
      }
    </div>

  )
}

export default App;
