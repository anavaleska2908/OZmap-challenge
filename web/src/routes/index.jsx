import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Login />
            </Route>
            <Route path='/signup'>
                <Signup />
            </Route>
            <Route path='/home'>
                <Home />
            </Route>
        </Switch>
    )
};
