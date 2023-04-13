import { useEffect, useState } from 'react';
import { Detail, Hero, Loader } from '../components';

import { fetchAPI } from '../utils/fetchAPI';
import PlaceHolder from '../assets/recipe-placeholder.jpg';


export const RandomRecipePage = () => {

    const [recipe, setRecipe] = useState();

    const handleRandomRecipe = () => {
        fetchAPI('/recipes/random?number=1')
            .then(data => setRecipe(data.recipes[0]))
            .catch(console.log);
    }

    return (
        <>
            <div className="container">
                <button
                    className="item button-random"
                    onClick={handleRandomRecipe}
                >
                    Generate Random Recipe
                </button>
            </div>
            {
                !recipe
                    ? <div className="container">
                        <Hero title={"Press The Button"} />
                        <img src={PlaceHolder} alt="Placeholder" className="item" width="100%" height="100%" style={{ marginBottom: "50px" }} />
                    </div>
                    : <>
                        <Hero title={recipe?.title} />
                        <Detail recipe={recipe} />
                    </>
            }
        </>

    )
}