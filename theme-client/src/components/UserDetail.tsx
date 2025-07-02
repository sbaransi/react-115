import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

const DetailWrapper = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#444')};
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
`;

const UserDetail: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response: any) => {
            setUser(response.data);
        });
    }, [userId]);

    return (
        <DetailWrapper theme="light">
            {user ? (
                <>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </DetailWrapper>
    );
};

export default UserDetail;
