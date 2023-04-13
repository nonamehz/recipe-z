import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceHolder from '../../assets/recipe-placeholder.jpg';


const PATH_IMAGE = 'https://spoonacular.com/cdn/ingredients_500x500';

const StepItem = ({ step }) => {
    return (
        <div className="item item-step">
            <p className="detail-step-title">Stage {step.number}</p>
            <p>
                {step.step}
            </p>
        </div>
    )
}

export const Detail = ({ recipe }) => {

    const createHtml = () => {
        return { __html: recipe?.summary };
    }

    return (
        <section>
            <div className="container">
                <div
                    dangerouslySetInnerHTML={createHtml()}
                    className="item item-detail">
                </div>

                <div className="item item-image">
                    <LazyLoadImage
                        src={recipe?.image}
                        alt={`image for ${recipe?.title}`}
                        placeholderSrc={PlaceHolder}
                        width="100%"
                        height="100%"
                        className="cover"
                    />
                </div>

                <section className="detail-section">
                    <h4>Ingredients</h4>
                    <div className="detail-ingredients">

                        <div className="item item-detail">
                            {
                                recipe?.extendedIngredients.map((ingredient, index) => (
                                    <ul key={ingredient.id + index}>
                                        <li>
                                            {ingredient.originalName} <span>{`- ${ingredient.amount} ${ingredient.unit}`}</span>
                                        </li>
                                    </ul>
                                ))
                            }
                        </div>
                        <div className="item item-image">
                            <LazyLoadImage
                                src={`${PATH_IMAGE}/${recipe?.extendedIngredients[1].image}`}
                                alt={`image for ${recipe?.extendedIngredients[0].name}`}
                                className="cover"
                                width="100%"
                                height="100%"
                                placeholderSrc={PlaceHolder}
                            />
                        </div>
                    </div>
                </section>

                <section className="detail-section">
                    <h4>Preparation</h4>
                    <div className="detail-preparation">
                        {
                            recipe?.analyzedInstructions[0].steps.map((step, index) => (
                                <StepItem key={index} step={step} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </section >
    )
}