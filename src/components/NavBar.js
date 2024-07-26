import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7'; 
import logo from '../assets/logo.png';
import styled, { css } from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => (theme === 'light' ? '#d1bb9b' : '#876c56')} !important;
  padding: 0.5rem 2rem;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 80px;
  height: auto;
`;

const TextContainer = styled(Box)`
  margin-left: 1rem;
`;

const Title = styled(Typography)`
  && {
    margin: 0;
    font-size: 1.8rem;
    color: #410B0B !important;
    text-shadow: 2px 2px 4px rgba(65, 11, 11, 0.25);
  }
`;

const Subtitle = styled(Typography)`
  && {
    margin: 0;
    font-size: 1.1rem;
    color: #410B0B !important;
    text-shadow: 2px 2px 4px rgba(65, 11, 11, 0.2);
  }
`;

const Menu = styled(Box)`
  display: flex;
  gap: 1.3rem;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')} !important;
`;

const NavLinkStyles = css`
  font-size: 1.2rem;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')} !important;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin: 0 0.5rem;

  &:hover {
    background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#52382c')} !important;
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')} !important;
  }

  &.active {
    background-color: ${({ theme }) => (theme === 'light' ? '#f2e8d8' : '#664535')} !important;
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')} !important;
  }
`;

const StyledNavLink = styled(Link)`
  ${NavLinkStyles}
`;

const NavBar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    console.log("NavBar component mounted");

    return () => {
      console.log("NavBar component unmounted");
    };
  }, []);

  return (
    <StyledAppBar position="static" theme={theme}>
      <StyledToolbar>
        <LogoContainer>
          <LogoImg src={logo} alt="RFA Logo" />
          <TextContainer>
            <Title variant="h1">Ranmal Fernando Associates</Title>
            <Subtitle variant="subtitle1">Engineers & Quantity Surveyors</Subtitle>
          </TextContainer>
        </LogoContainer>
        <Menu theme={theme}>
          <StyledNavLink to="/" className={isActive('/') ? 'active' : ''} theme={theme}>
            Home
          </StyledNavLink>
          <StyledNavLink to="/new" className={isActive('/new') ? 'active' : ''} theme={theme}>
            New
          </StyledNavLink>
          <StyledNavLink to="/about" className={isActive('/about') ? 'active' : ''} theme={theme}>
            About
          </StyledNavLink>
          <StyledNavLink to="/contact" className={isActive('/contact') ? 'active' : ''} theme={theme}>
            Contact Us
          </StyledNavLink>
          <IconButton color="inherit" onClick={toggleTheme}>
            {theme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
            <Typography variant="body2" sx={{ ml: 0.5 }}>
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Typography>
          </IconButton>
        </Menu>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;
