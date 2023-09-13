import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom"
import routes from './routes.json'
import RoutersMap from "./RoutersMap";

const Router = () => {


    return (
        <div>
            <Routes>
                {
                    Object.values(routes).map((route, index) => (
                        <Route
                            key={index}
                            path={route}
                            element={RoutersMap[route]}
                        />
                    ))
                }
                <Route
                    path={"*"}
                    element={
                        <Navigate
                            to={routes.register}
                            replace
                        />
                    }
                />

            </Routes>
        </div>
    );
};

export default Router;