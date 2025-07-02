import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 20px;
  background-color: ${({ theme }) => (theme === 'light' ? '#f5f5f5' : '#444')};
  color: ${({ theme }) => (theme === 'light' ? '#333' : '#fff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Page = styled.div`
    margin-left: 20px;
`

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Page>
            <HeaderWrapper theme={theme}>
                <h1>User Dashboard</h1>
                <Button onClick={toggleTheme}>Toggle Theme</Button>
            </HeaderWrapper>
        </Page>
    );
};

export default Header;
