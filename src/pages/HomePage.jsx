import {
    Hero,
    SearchField,
    TypeGrid,
    CuisineGrid,
    RandomRecipe,
} from '../components';


export const HomePage = () => {
    return (
        <>
            <SearchField />
            <Hero title="Welcome, If you are here for the first time - scroll and click." />
            <TypeGrid />
            <RandomRecipe />
            <CuisineGrid />
        </>
    )
}