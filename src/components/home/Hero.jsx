import { ArrowDownIcon } from './';

import './styles/Hero.css';


export const Hero = ({ title }) => {
    return (
        <section className="hero-wrapper container">
            <h2>
                {/* Wellcome. <br />
                If you are here for the first time - scroll and click. */}
                {title}
            </h2>
            <div className="hero-icon">
                <ArrowDownIcon />
            </div>
        </section>
    )
}