import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface Question {
    id: number;
    text: string;
}

interface QuestionsPreviewProps {
    questions: Question[];
}

export default function QuestionsPreview({ questions }: QuestionsPreviewProps) {
    return (
        <Box sx={{ width: 'calc(100% - 32px)', mt: 2, mx: 'auto', height: '80vh' }}> {/* Define a height for the Box */}
            <Typography variant="h6" sx={{ mb: 1, color: 'black' }}>Questions Preview</Typography>
            <Typography variant="h5" sx={{ mb: 4, color: 'black' }}>Get a quick glance at your current questions.</Typography>

            <Paper sx={{ height: '85%', overflow: 'auto' }}> {/* Set height to 100% and overflow to auto */}
                <List sx={{ bgcolor: 'white' }}>
                    {questions.map((question, index) => (
                        <ListItem
                            key={question.id}
                            sx={{
                                borderBottom: index !== questions.length - 1 ? '1px solid rgba(0, 0, 0, 0.12)' : 'none',
                                '&:last-child': {
                                    borderBottom: 'none',
                                },
                                '&:hover': {
                                    bgcolor: 'transparent',
                                },
                            }}
                        >
                            <ListItemText primary={`${index + 1}. ${question.text}`} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
}