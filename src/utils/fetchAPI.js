

const BASE_URL = 'https://api.spoonacular.com';
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

export const fetchAPI = async (url) => {
    const result = await fetch(BASE_URL + url + `&apiKey=${API_KEY}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await result.json();

    return data;
}