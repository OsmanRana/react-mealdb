import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Detail from './Detail/Detail';

const Details = () => {
    const [meal, setMeal] = useState([])
    console.log(meal)
    const { mealId } = useParams()
    
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals))
    }, [mealId])

    return (
        <div>
            <p>Details: {mealId}</p>
            {
                meal.map(element => <Detail
                key = {element.idMeal}
                    element = {element}
                />)
            }
        </div>
    );
};

export default Details;