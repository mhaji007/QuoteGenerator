import axios from 'axios'; 

//http://api.icndb.com/jokes/random/20?firstName=John&lastName=Doe

export default {
    getRandomQuotes: (num, firstName, lastName) => {
        return axios.get(`http://api.icndb.com/jokes/random/${num}?firstName=${firstName}&lastName=${lastName}`);

    }
}