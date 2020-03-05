import React from 'react';

const QuoteSelection = (props) => {

    return (
        <div style={Styles.selection}>
            <p
                style={{
                    paddingTop: 11,
                    marginRight: 5
                }}>Get Quotes By:</p>
            <select name="numQuote" onChange={props.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
            </select>
        </div>
    );
};

const Styles = {
    selection: {
        display: 'flex',
        alignItems: 'center'
    }

};
export default QuoteSelection;