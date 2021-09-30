import React, { useEffect, useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Restaurent.css'

const Restaurent = () => {
    const [serachedText, setSearchedText] = useState ('')
    const [meals, setMeals] = useState([]);
    console.log(meals)
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serachedText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [serachedText]);
    const handleOnChange = event => {
        setSearchedText(event.target.value)
    }
    return (
        <div>

            <div className="container">
                <h2>Meal</h2>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2 me-3"
                        aria-label="Search"
                        onChange = {handleOnChange}
                    />
                    
                </Form>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    {
                        meals.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}
                        />)

                    }
                </div>

            </div>

        </div>
    );
};

export default Restaurent;