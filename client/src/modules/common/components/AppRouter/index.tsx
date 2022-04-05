import React from 'react'
import { publicRoutes, privateRoutes } from '../../routes/route'
import { Route, Routes } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

const AppRouter: React.FC = (): JSX.Element => {
    const isAuth = useSelector(({ userData }: RootState) => userData.isAuth)
    return (
        <Routes>
            {
                isAuth ?
                    privateRoutes.map(route => {
                        return <Route key={route.path} path={route.path} element={route.component} />
                    })
                    :
                    publicRoutes.map(route => {
                        return <Route key={route.path} path={route.path} element={route.component} />
                    })}
        </Routes>
    )
}

export default AppRouter
