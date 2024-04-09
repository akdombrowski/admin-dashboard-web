import React from 'react';
import { TextField } from '@mui/material';

export default function SingleLineInput() {
    return (
        <TextField
            fullWidth
            placeholder='Client Input'
            variant="outlined"
            sx={{
                marginBottom: '10px',
                '& .MuiInputBase-root': {
                    color: 'hsl(222.2, 47.4%, 11.2%)',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'hsl(214.3, 31.8%, 91.4%)',
                },
                '& .MuiOutlinedInput-root': {
                    '&:hover': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'hsl(214.3, 31.8%, 91.4%)'
                        },
                    },
                    '&.Mui-focused': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'hsl(214.3, 31.8%, 91.4%)',
                        },
                    },
                },
            }}
            InputLabelProps={{
                style: { color: 'hsl(222.2, 47.4%, 11.2%)' },
            }}
        />
    );
}