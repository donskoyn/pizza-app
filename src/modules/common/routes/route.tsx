import React, { FunctionComponent } from "react"
import CartMain from "../../cart/pages/CartMain"
import PanelPizzas from "../../pizzaOrder/pages/PanelPizzas"

interface PublicRoutes {
    path: string,
    component: any,
}

export const publicRoutes: PublicRoutes[] = [
    { path: '/', component: <PanelPizzas /> }, { path: '/cart', component: <CartMain /> }, { path: '*', component: <PanelPizzas /> }]
