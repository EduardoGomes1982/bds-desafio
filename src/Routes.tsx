import NavBar from 'components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'routes/Home';

const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <main className='container-lg pd-tpbt-20'>
                <Route path="/" exact>
                    <Home />
                </Route>
            </main>
        </Switch>
    </BrowserRouter>
);

export default Routes;