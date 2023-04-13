import { Footer, Header, HeadingText } from './components';
import { AppRouter } from './routes';


export const RecipesApp = () => {
    return (
        <>
            <Header />
            <HeadingText />
            <AppRouter />
            <Footer />
        </>
    )
}