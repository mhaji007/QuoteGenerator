import React from 'react';

const ListOfQuotes = (props)=> {

    return (
        <div>
            <h2>
                List of quotes
            </h2>
            
        {props.quotes.map((quote, index) => ( 
            <div key={index}>
                <p>Quote: {quote.joke}</p>
            </div>
            ))} 
        </div>
    );

};
export default ListOfQuotes;