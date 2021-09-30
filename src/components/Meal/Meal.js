import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Meal = (props) => {

    const { strMeal, strMealThumb, strInstructions, idMeal } = props.meal;
    return (

        <div className="container my-4">
            <Card>
                <Card.Img variant="top" src={strMealThumb} alt="" />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 200)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Link to = {`/meal/${idMeal}`}>Details</Link>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default Meal;
