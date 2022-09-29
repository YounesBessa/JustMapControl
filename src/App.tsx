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
                <Route path="test" element={<TestPage />} />
                <Route path="layout" element={<LayoutComponent />}>
                    <Route index element={<MatchPage />} />
                    <Route path=":number" element={<MatchPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Application;