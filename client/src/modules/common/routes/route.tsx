import React, { FunctionComponent } from "react"

import Autorizathion from "../../auth/pages/Autorizathion"
import CartMain from "../../cart/pages/CartMain"
import PanelPizzas from "../../pizzaOrder/pages/PanelPizzas"

interface Routes {
    path: string,
    component: any,
}

export const publicRoutes: Routes[] =
    [
        { path: '/', component: <PanelPizzas /> },
        { path: '/cart', component: <CartMain /> },
        { path: '/auth', component: <Autorizathion /> },
        { path: '*', component: <PanelPizzas /> }
    ]

export const privateRoutes: Routes[] =
    [
        { path: '/', component: <PanelPizzas /> },
        { path: '/cart', component: <CartMain /> },
        { path: '*', component: <PanelPizzas /> }
    ]