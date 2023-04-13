import { Route, Routes } from 'react-router-dom';
import { TypePage, CuisinePage, HomePage, SearchPage, RecipeDetailPage, RandomRecipePage } from '../pages';


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:searchTerm" element={<SearchPage />} />
            <Route path="/types" element={<TypePage />} />
            <Route path="/cuisines" element={<CuisinePage />} />
            <Route path="/recipe/:id" element={<RecipeDetailPage />} />
            <Route path="/random" element={<RandomRecipePage />} />
            <Route path='/*' element={<HomePage />} />
        </Routes>
    )
}