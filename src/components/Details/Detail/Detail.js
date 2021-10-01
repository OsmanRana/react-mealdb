import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Detail = (props) => {
    const {strMeal, strInstructions, strMealThumb} = props.element;
    const history = useHistory ()

    const handleClick = () => {
        history.push("/restaurent")
    }
    return (
        <div className="container">
            <h2>{strMeal}</h2>
            <img src = {strMealThumb} alt =""/>
            <h4>Instruction</h4>
            <p>{strInstructions}</p>
            <Button onClick = {handleClick}>Back</Button>
        </div>
    );
};

export default Detail;