import React from 'react';
import ListOfQuotes from './components/ListOfQuotes';
import QuoteCharacter from './components/QuoteCharacter';
import QuoteSelection from './components/QuoteSelection';


class App extends React.Component {
  
  
  render () {
   

    return(
      <div>
        <ListOfQuotes/>
        <QuoteCharacter/>
        <QuoteSelection/>
      </div>

    );

  }
}

export default App;