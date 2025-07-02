import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserDetail from '../components/UserDetail';
import Home from './Home';

const UserPage: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:userId" element={<UserDetail />} />
            </Routes>
        </Router>
    );
};

export default UserPage;
