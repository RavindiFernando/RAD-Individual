import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContextProvider, useTheme } from './context/ThemeContext';
import GlobalStyle from './GlobalStyle';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import New from './pages/New';
import ContactUs from './pages/ContactUs';
import History from './pages/about/History';
import Mission from './pages/about/Mission';
import Values from './pages/about/Values';
import Projects from './pages/about/Projects';
import Team from './pages/about/Team';
import Clock from './components/Clock';

const App = () => {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
};

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <GlobalStyle theme={theme} />
      <Clock/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="history" element={<History />} />
          <Route path="mission" element={<Mission />} />
          <Route path="values" element={<Values />} />
          <Route path="projects" element={<Projects />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/New" element={<New />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact/:contactId" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
