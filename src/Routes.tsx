import NavBar from 'components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Catalog from 'routes/Catalog';
import Home from 'routes/Home';

const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <main className='container-lg pd-tpbt-20'>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/products" exact>
                    <Catalog />
                </Route>
            </main>
        </Switch>
    </BrowserRouter>
);

export default Routes;