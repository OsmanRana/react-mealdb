import React from 'react';

const Detail = (props) => {
    const {strMeal, strInstructions} = props.element;
    return (
        <div className="container">
            <h2>{strMeal}</h2>
            <h4>Instruction</h4>
            <p>{strInstructions}</p>
        </div>
    );
};

export default Detail;