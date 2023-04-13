import './styles/Footer.css';


export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="footer-wrapper container">
            <p>Recipe-Z &copy;{year}</p>
        </footer>
    )
}