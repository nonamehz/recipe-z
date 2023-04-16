import { useParams } from 'react-router-dom';
import { Loader, Recipes, SearchField } from '../components';
import { useEffect, useState } from 'react';
import { fetchAPI } from '../utils/fetchAPI';


export const SearchPage = () => {

    const { searchTerm } = useParams();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchAPI(`/recipes/complexSearch?query=${searchTerm}&number=50`)
            .then(data => {
                setRecipes(data.results);
            })
            .catch(console.log)
    }, [searchTerm]);

    return (
        <>
            <SearchField />
            <section className="section-wrapper">
                <div className="container">
                    <h3>Search Results for: <span>{searchTerm}</span></h3>
                    <Recipes recipes={recipes} />
                </div>
            </section>
        </>
    )
}