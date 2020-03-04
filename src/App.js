import React from 'react';
import ListOfQuotes from './components/ListOfQuotes';
import QuoteCharacter from './components/QuoteCharacter';
import QuoteSelection from './components/QuoteSelection';

import API from './utils/API';
import './App.css';

class App extends React.Component {

    state = {
        quotes: [],
        firstName: 'Chuck',
        lastName: 'Norris',
        errorMessage: '',
        numQuote: 1,
        isError: false,
        isLoading: false
    };

    componentDidMount = () => {

        const {numQuote, firstName, lastName} = this.state;
        this.getRandomQuotes(numQuote, firstName, lastName);

    };

    getRandomQuotes = (num, firstName, lastName) => {
        this.setState({isLoading: true});
        API
            .getRandomQuotes(num, firstName, lastName)
            .then((response) => {
                //console.log('Data: ', response.data);
                this.setState({quotes: response.data.value, isError: false, isLoading: false})
            })
            .catch((error) => {
                this.setState({
                    isError: true,
                    isLoading: false,
                    errorMessage: error.message || 'Failed fetching quotes'
                });
                const response = error
                    .response
                    console
                    .log(response.data.errors)
            });
    };

    showErrorMessage = () => {
        const isError = this.state.isError;

        if (isError) {
            return <p className="error">Error - {this.state.errorMessage}</p>
        }

    };

    showQuote = () => {
        const isLoading = this.state.isLoading;

        if (isLoading) {
            return (
                <div class="ui segment" style={{paddingTop: 50}}>
                    <div class="ui active dimmer" style={{backgroundColor:"	#A0A0A0"}}>
                        <div class="ui text loader">Loading...</div>
                    </div>
                    <p></p>
                </div>
            );
        }
        return <ListOfQuotes quotes={this.state.quotes}/>;

    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]:value
        });

        this.getRandomQuotes(value,'Chuck', 'Norris')

    };

    render() {

        console.log('State:', this.state);

        return (
            <div>
                {this.showErrorMessage()}
                {this.showQuote()}
                <QuoteCharacter handleChange={this.handleChange}/>
                <QuoteSelection handleChange={this.handleChange}/>
            </div>

        );

    }
}

export default App;