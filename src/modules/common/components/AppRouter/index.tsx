import React from 'react'
import { publicRoutes } from '../../routes/route'
import { Route, Routes } from 'react-router';
const AppRouter: React.FC = (): JSX.Element => {
    return (
        <Routes>
            {publicRoutes.map(route => {
                return <Route key={route.path} path={route.path} element={route.component} />
            })}
        </Routes>
    )
}

export default AppRouter
