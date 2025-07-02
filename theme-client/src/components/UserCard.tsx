import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from "../contexts/ThemeContext"

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserCardProps {
    user: User;
}

const Card = styled.div`
  background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#444')};
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const { theme } = useTheme();

    return (
        <Card theme={theme}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <Link to={`/user/${user.id}`}>View Details</Link>
        </Card>
    );
};

export default UserCard;
