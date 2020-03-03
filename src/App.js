import React from 'react';
import ListOfQuotes from './components/ListOfQuotes';
import QuoteCharacter from './components/QuoteCharacter';
import QuoteSelection from './components/QuoteSelection';

import API from './utils/API';

class App extends React.Component {

    state = {
        quotes: [],
        firstName: 'Chuck',
        lastName: 'Norris',
        errorMessage: '',
        numQuote: '',
        isError: false,
        isLoading: false
    };

    componentDidMount = () => {
        this.setState({isLoading: true});
        API
            .getRandomQuotes(2, 'Chuck', 'Norris')
            .then((respond) => {
                //console.log('Data: ', respond.data);
                this.setState({quotes: respond.data.value, isError: false, isLoading: false})
            })
            .catch((error) => {
                this.setState({
                    isError: true,
                    isLoading: false,
                    errorMessage: error.message || 'Failed fetching quotes'
                })
                const response = error
                    .response
                    console
                    .log(response.data.errors)
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