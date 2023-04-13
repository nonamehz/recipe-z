import { Link } from 'react-router-dom';


export const NavLinks = ({ onClick }) => {
    return (
        <>
            <Link onClick={onClick} to="/" className="nav-item">Home</Link>
            <Link onClick={onClick} to="/types" className="nav-item">Types</Link>
            <Link onClick={onClick} to="/cuisines" className="nav-item">Cuisines</Link>
            <Link onClick={onClick} to="/random" className="nav-item">Random Recipe</Link>
        </>
    )
}