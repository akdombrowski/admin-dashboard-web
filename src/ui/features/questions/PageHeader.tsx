import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Container maxWidth={false}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                        Create Your Questionnaire
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;