import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { ArrowRightIcon } from '../';
import PlaceHolder from '../../assets/recipe-placeholder.jpg';
import './styles/Recipes.css';


const RecipeItem = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <div className="recipe-image">
                <LazyLoadImage
                    src={recipe.image}
                    alt={`image for ${recipe.title}`}
                    className="cover"
                    width="100%"
                    height="100%"
                    placeholderSrc={PlaceHolder}
                />
            </div>
            <footer className="recipe-desc">
                <h4>{recipe.title}</h4>
                <Link to={`/recipe/${recipe.id}`}>
                    <ArrowRightIcon />
                </Link>
            </footer>
        </div>
    )
}

export const Recipes = ({ recipes }) => {
    return (
        <div className="recipes-wrapper">
            {recipes.map((recipe) => (
                <RecipeItem
                    key={recipe.id}
                    recipe={recipe}
                />
            ))}
        </div>
    )
}