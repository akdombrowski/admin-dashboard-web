"use client"

import React, { useState } from 'react';
import QuestionContainer from '@/ui/features/questions/QuestionsContainer';
import Header from '@/ui/features/questions/PageHeader';
import QuickAddForm from '@/ui/features/questions/QuestionsQuickAdd';
import QuestionsPreview from '@/ui/features/questions/QuestionsPreview';
import Footer from '@/ui/features/questions/Footer';

interface Question {
    id: number;
    text: string;
}

export default function ParentContainer() {
    const [questions, setQuestions] = useState<Question[]>([
        { id: 1, text: 'Untitled Question' },
    ]);

    const addNewQuestion = () => {
        const newQuestion: Question = { id: questions.length + 1, text: `Question ${questions.length + 1}` };
        setQuestions([...questions, newQuestion]);
    };

    const updateQuestionText = (id: number, newText: string) => {
        setQuestions(questions.map(question =>
            question.id === id ? { ...question, text: newText } : question
        ));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden' }}>
            <Header />
            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1, overflowY: 'auto', borderWidth: 2, borderRadius: 12, marginTop: 8, marginLeft: 8, marginRight: 8 }}>
                        <QuestionContainer questions={questions} addNewQuestion={addNewQuestion} updateQuestionText={updateQuestionText} />
                    </div>
                </div>
                <div style={{ flexBasis: '50%', backgroundColor: 'white', borderWidth: 2, borderRadius: 12, marginTop: 8, marginLeft: 8, marginRight: 8 }}>
                    <QuestionsPreview questions={questions} />
                </div>
            </div>
            <Footer />
        </div>
    );
};