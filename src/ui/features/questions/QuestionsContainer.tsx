import React from 'react';
import { Container, Card, CardContent, Typography, Stack, Button, TextField, MenuItem, Select } from '@mui/material';
import SingleLineInput from './components/SingleLineInput';
import AddIcon from '@mui/icons-material/Add';

interface Question {
    id: number;
    text: string;
}

interface QuestionContainerProps {
    questions: Question[];
    addNewQuestion: () => void;
    updateQuestionText: (id: number, newText: string) => void;
}

export default function QuestionContainer({ questions, addNewQuestion, updateQuestionText }: QuestionContainerProps) {
    return (
        <Container maxWidth={false} sx={{
            height: '95%',
            overflowY: 'auto',
            borderColor: 'hsl(214.3, 31.8%, 91.4%)',
            mt: 2,

        }}>
            <Typography variant="h6" sx={{ mb: 1, color: 'black' }}>Questions Creation</Typography>
            <Typography variant="h5" sx={{ mb: 4, color: 'black' }}>Create questions for your clients to see.</Typography>

            <Stack spacing={2} alignItems="center">
                {questions.map((question) => (
                    <Card key={question.id} sx={{
                        backgroundColor: 'hsl(0, 0%, 100%)',
                        color: 'hsl(222.2, 47.4%, 11.2%)',
                        width: '100%',
                        borderRadius: '0.5rem',
                        borderColor: 'hsl(214.3, 31.8%, 91.4%)',
                        borderWidth: 1,
                        borderStyle: 'solid'
                    }}>
                        <CardContent>
                            <Typography variant="h6" component="div" sx={{ marginBottom: '20px' }}>
                                Question {question.id}
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder='Untitled Question'
                                variant="outlined"
                                label="Question Text"
                                value={question.text} // Set the value to the current question text
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateQuestionText(question.id, e.target.value)}
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
                        </CardContent>
                    </Card>
                ))}
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={addNewQuestion}
                    sx={{
                        backgroundColor: 'hsl(222.2, 47.4%, 11.2%)',
                        color: 'hsl(210, 40%, 98%)',
                        width: '100%',
                        height: 50,
                        borderRadius: '0.5rem',
                        borderColor: 'hsl(214.3, 31.8%, 91.4%)',
                        borderWidth: 1,
                        '&:hover': {
                            backgroundColor: 'hsl(210, 40%, 96.1%)',
                            borderColor: 'hsl(214.3, 31.8%, 91.4%)',
                            color: 'black',
                        }
                    }}
                >
                    Add New Question
                </Button>
            </Stack>
        </Container>
    );
}