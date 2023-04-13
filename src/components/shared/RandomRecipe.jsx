import { Link } from 'react-router-dom';
import { HappyFaceIcon } from '../';

import './styles/RandomRecipe.css';


export const RandomRecipe = () => {
    return (
        <section className="random-wrapper" id="random">
            <div className="random-recipe">
                <h3>Random Recipe</h3>
                <p>
                    Get some inspiration for your next meal by browsing random popular recipes
                </p>
                <Link
                    to="/random"
                    className="random-button">
                    Click Here
                    <span>
                        <HappyFaceIcon />
                    </span>
                </Link>
            </div>
        </section>
    )
}