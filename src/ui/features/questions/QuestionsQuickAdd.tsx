import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add'; // Import the Add (+) icon

export default function QuickAddForm() {
    const [inputValue, setInputValue] = useState(''); // State to keep track of the input value

    const handleChange = (event) => {
        setInputValue(event.target.value); // Update state with new input value
    };

    const handleAddClick = () => {
        // Logic to handle adding the question
        console.log(inputValue); // For demonstration, log the current input value
        setInputValue(''); // Optionally clear the input field after adding
    };

    return (
        <Box display="flex" flexDirection="column" height="100%" width="100%" gap={2}>
            <textarea
                value={inputValue}
                onChange={handleChange}
                placeholder="Copy and paste your questions for quick access"
                style={{
                    height: '100%',
                    width: '98%',
                    overflowY: 'auto',
                    border: '1px solid rgba(0, 0, 0, 0.23)',
                    margin: '0% 1% 0% 1%',
                    padding: '10px',
                    borderRadius: '4px',
                    resize: 'none', // Prevent resizing
                    outline: 'none', // Remove focus outline
                    color: 'black', // Ensure text is black
                    textAlign: 'left', // Align text to the left
                    fontFamily: 'inherit', // Use the font from the parent
                    fontSize: 'inherit', // Use the font size from the parent
                }}
            />
            <Box display="flex" justifyContent="flex-end" sx={{ height: '20%', mt: 'auto' }}>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleAddClick}
                    sx={{ marginRight: '10px', marginBottom: '10px' }} // Add margin to the right and bottom of the button
                >
                    Add
                </Button>
            </Box>
        </Box>
    );
};