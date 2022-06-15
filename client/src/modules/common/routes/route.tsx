import CartMain from '../../cart/pages/CartMain';
import PanelPizzas from '../../pizzaOrder/pages/PanelPizzas';
import History from '../../historyCart/pages/History';
import Login from '../../auth/pages/Login';
import Registration from '../../auth/pages/Registration';

interface Routes {
    path: string;
    component: any;
}

export const publicRoutes: Routes[] = [
    { path: '/', component: <PanelPizzas /> },
    { path: '/cart', component: <CartMain /> },
    { path: '/login', component: <Login /> },
    { path: '/registration', component: <Registration /> },
    { path: '*', component: <PanelPizzas /> },
];

export const privateRoutes: Routes[] = [
    { path: '/historyorders', component: <History /> },
    { path: '/', component: <PanelPizzas /> },
    { path: '/cart', component: <CartMain /> },
    { path: '*', component: <PanelPizzas /> },
];
