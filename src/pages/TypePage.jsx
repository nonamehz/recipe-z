import { useEffect, useState } from 'react';
import { fetchAPI } from '../utils/fetchAPI';
import { Recipes } from '../components';
import { types } from '../data';
import { Loader } from '../components/shared/Loader';


export const TypePage = () => {

    const [recipes, setRecipes] = useState([]);
    const [typeSelected, setTypeSelected] = useState("main course");


    useEffect(() => {

        fetchAPI(`/recipes/complexSearch?type=${typeSelected}&number=50`)
            .then(data => setRecipes(data.results))
            .catch(console.log);

    }, [typeSelected]);

    if (!recipes.length) return <Loader />

    return (
        <>
            <section className="section-wrapper">
                <div className="container">
                    <div className="pills-wrapper">
                        {types.map((type, index) => (
                            <div
                                key={index}
                                className={`item pill ${type.name === typeSelected ? 'pill-selected' : ''}`}
                                onClick={() => setTypeSelected(type.name)}
                            >
                                {type.name}
                            </div>
                        ))}
                    </div>
                    <h3>Search Results for: <span>{typeSelected}</span></h3>
                    <Recipes recipes={recipes} />
                </div>
            </section>
        </>
    )
}