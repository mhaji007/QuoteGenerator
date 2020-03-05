import React from 'react';

const ListOfQuotes = (props) => {

    return (
        <div>
            <h2>
                List of quotes
            </h2>

            {
                props
                    .quotes
                    .map((quote, index) => (
                        <div onMouseOver={() => props.setIndexOnHover(index)} key={index}>
                            <p>Quote: {quote.joke}</p>
                            {
                                props.currentIndex === index
                                    ? <a target="_blank" href={'https://twitter.com/intent/tweet?text=${quote.joke}'}>
                                            Tweet quote
                                        </a>
                                    : null
                            }

                        </div>
                    ))
            }
        </div>
    );

};
export default ListOfQuotes;