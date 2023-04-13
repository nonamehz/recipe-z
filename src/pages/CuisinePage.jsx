import { useEffect, useState } from 'react';
import { cuisines } from '../data';
import { Recipes } from '../components';
import { fetchAPI } from '../utils/fetchAPI';
import { Loader } from '../components';


export const CuisinePage = () => {

    const [recipes, setRecipes] = useState([]);
    const [cuisineSelected, setCuisineSelected] = useState("korean");

    useEffect(() => {

        fetchAPI(`/recipes/complexSearch?cuisine=${cuisineSelected}&number=50`)
            .then(data => setRecipes(data.results))
            .catch(console.log);

    }, [cuisineSelected]);

    if (!recipes.length) return <Loader />

    return (
        <>
            <section className="section-wrapper">
                <div className="container">
                    <div className="pills-wrapper">
                        {cuisines.map((cuisine, index) => (
                            <div
                                key={index}
                                className={`item pill ${cuisine.name === cuisineSelected ? 'pill-selected' : ''}`}
                                onClick={() => setCuisineSelected(cuisine.name)}
                            >
                                {cuisine.name}
                            </div>
                        ))}
                    </div>
                    <h3><span>{cuisineSelected}</span> FOOD</h3>
                    <Recipes recipes={recipes} />
                </div>
            </section>
        </>
    )
}