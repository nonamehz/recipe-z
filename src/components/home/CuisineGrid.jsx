import { ArrowRightIcon, FlagIcon } from './';
import { cuisines } from '../../data';

import './styles/CuisineGrid.css';
import { Link } from 'react-router-dom';


const CuisineItem = ({ cuisine }) => {


    return (
        <div className={`item item-main item-${cuisine.name}`}>
            <div className={`item-main-l item-bg`}
                style={{
                    backgroundImage: `url(${cuisine.bgImg})`
                }}
            >
                <p>{cuisine.name}</p>
            </div>
            <div className="item-main-r">
                <span>
                    <ArrowRightIcon />
                </span>
            </div>
        </div>
    )
}

export const CuisineGrid = () => {

    return (
        <section className="section-wrapper" id="cuisines">
            <div className="container">
                <h3>Cuisines</h3>
                <div className="grid-items">
                    <div className="item item-concept">
                        <p>
                            <strong>Explore the world</strong> through its foods with <strong>the regional cuisines featured</strong> here.
                        </p>
                        <span>
                            <FlagIcon />
                        </span>
                    </div>
                    {
                        cuisines.slice(0, 5).map((cuisine, index) => (
                            <CuisineItem
                                key={cuisine.name}
                                cuisine={cuisine}
                            />
                        ))
                    }
                    <Link
                        to='/cuisines'
                        className="item item-more item-more-cuisine">
                        <p>More...</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}