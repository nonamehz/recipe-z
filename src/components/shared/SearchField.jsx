import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchIcon } from '../';

import './styles/SearchField.css';


export const SearchField = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!searchTerm) return;
        navigate(`/search/${searchTerm}`);
        setSearchTerm('');
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="form-wrapper container"
            >
                <input
                    type="text"
                    className="form-input"
                    value={searchTerm}
                    placeholder="Search Recipe"
                    required={true}
                    onChange={({ target }) => setSearchTerm(target.value)}
                />
                <button
                    type="submit"
                    className="form-button"
                >
                    <SearchIcon />
                </button>
            </form>
        </>
    )
}