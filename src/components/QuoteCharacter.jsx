import React from 'react';

const QuoteCharacter = (props)=> {

    return (
        <form action>
            <div className="form-control">
                <input onChange={props.handleChange} name="firstName" placeholder="Enter first name ..." type="text"/>
            </div>
            <div className="form-control">
                <input onChange={props.handleChange} name="firstName" placeholder="Enter first name ..." type="text"/>
            </div>
            <button>Change Character</button>
        </form>
    );

};
export default QuoteCharacter;