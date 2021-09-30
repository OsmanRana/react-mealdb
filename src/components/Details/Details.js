import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const [meal, setMeal] = useState({})
    console.log(meal)
    const {mealId} = useParams()
    
    useEffect (() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
        fetch (url)
        .then (res => res.json())
        .then (data => setMeal(data))
    },[])

    return (
        <div>
            <p>Details: {mealId}</p>
            <p>{meal.idMeal}</p>
        </div>
    );
};

export default Details;