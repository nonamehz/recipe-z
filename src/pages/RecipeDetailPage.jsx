import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Hero, Detail } from '../components';

import { fetchAPI } from '../utils/fetchAPI';
import { Loader } from '../components/shared/Loader';

import './RecipeDetailPage.css';






export const RecipeDetailPage = () => {

    const { id } = useParams();
    const [recipeDetail, setRecipeDetail] = useState();

    useEffect(() => {
        fetchAPI(`/recipes/${id}/information?includeNutrition=false`)
            .then(data => setRecipeDetail(data))
            .catch(console.log);
    }, [id]);

    if (!recipeDetail) return <Loader />

    return (
        <>
            <Hero title={recipeDetail?.title} />
            <Detail recipe={recipeDetail} />
        </>
    )
}