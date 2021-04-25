import React , {lazy , Suspense }from 'react'
import { Switch , Route , BrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));

const App = () => {
    return (
        <Suspense fallback={<div></div>}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </Suspense>
        
    )
}

export default App;
