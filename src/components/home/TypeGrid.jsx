import { Link } from 'react-router-dom';
import { ArrowRightIcon, HappyFaceIcon } from './';

import { types } from '../../data';
import './styles/TypeGrid.css';


const TypeItem = ({ type }) => {

    return (
        <div
            className={`item item-main item-${type.slug}`}>
            <div className={`item-main-l`} style={{ backgroundImage: `url('${type.bgImage}')` }}>
                {type.name}
            </div>
        </div>
    )
}

export const TypeGrid = () => {
    return (
        <section className="section-wrapper" id="categories">
            <div className="container">
                <h3>Types</h3>
                <div className="grid-items">
                    <div className="item item-concept item-1">
                        <p>
                            <strong>Hundreds of thousands</strong> of recipies from around the world are collected in this section. A large number of different <strong>cooking methods</strong> will be available to you. <strong>Welcome.</strong> Surprise yourself and your family with <strong>amazing dishes.</strong>
                        </p>
                        <span>
                            <HappyFaceIcon />
                        </span>
                    </div>
                    {
                        types.slice(0, 4).map(type => (
                            <TypeItem
                                key={type.name}
                                type={type}
                            />
                        ))
                    }
                    <Link
                        to="/types"
                        className="item item-more item-more-type">
                        <p>More...</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}