import React from 'react';
import Header from './components/Header';
import UserPage from './pages/UserPage';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles theme="light" />
      <Header cartCount={3} />
      <UserPage />
    </ThemeProvider>
  );
};

export default App;
