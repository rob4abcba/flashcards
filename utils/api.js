const initialData = {
    Mandarin: {
        title: 'Personal Pronouns',
        questions: [
            {
            question: 'How do you say "I/me" in pinyin?',
            guess: 'Wo3',
            correctAnswer: 'true' 
            },
            {
            question: 'How do you say "you" in pinyin?',
            guess: 'Ni3',
            correctAnswer: 'true' 
            },
        ]
    },
    Spanish: {
        title: 'Personal Pronouns',
        questions: [
            {
            question: 'How do you say "I/me" in Spanish?',
            guess: 'Yo',
            correctAnswer: 'true' 
            },
            {
            question: 'How do you say "you" in Spanish',
            guess: 'tú',
            correctAnswer: 'true' 
            },
        ]
    },
}

export const getData = () => {
    return initialData;
}