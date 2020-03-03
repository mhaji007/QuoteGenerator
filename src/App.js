import React from 'react';
import ListOfQuotes from './components/ListOfQuotes';
import QuoteCharacter from './components/QuoteCharacter';
import QuoteSelection from './components/QuoteSelection';

import API from './utils/API';

class App extends React.Component {

  componentDidMount = () => {
     API.getRandomQuotes(2,'Chuck','Norris')
        .then(function(respond) {
            console.log('Data: ', respond.data)
        })
        .catch(  (error) => {
          const response = error.response
          console.log(response.data.errors)
        });

};

    render() {

        return (
            <div>
                <ListOfQuotes/>
                <QuoteCharacter/>
                <QuoteSelection/>
            </div>

        );

    }
}

export default App;