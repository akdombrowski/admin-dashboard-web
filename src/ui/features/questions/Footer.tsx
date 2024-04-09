import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Footer = () => {
    return (
        <Container maxWidth={false} sx={{ padding: 0 }}> {/* Remove horizontal padding */}
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '20px 0',
            }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#1976d2', // A nice clickable blue
                        color: 'white', // White text for better contrast and readability
                        width: '20%',
                        height: 50,
                        borderRadius: '0.5rem',
                        '&:hover': {
                            backgroundColor: '#1565c0', // A slightly darker shade of blue for the hover state
                        }
                    }}
                >
                    Create Link
                </Button>
            </Box>
        </Container>
    );
};

export default Footer;