import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MatchPage from './pages/Match';
import HomePage from './pages/Home';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="match">
                    <Route index element={<MatchPage />} />
                    <Route path=":number" element={<MatchPage />} />
                </Route>
                    <Route index element={<MatchPage />} />
                    <Route path=":number" element={<MatchPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;