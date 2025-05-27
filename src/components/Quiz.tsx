
import { useState } from 'react';
import Question1 from './quiz/Question1';
import Question2 from './quiz/Question2';
import Question3 from './quiz/Question3';
import Question4 from './quiz/Question4';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    question1: '',
    question2: [] as string[],
    question3: ''
  });

  const goToNext = () => {
    setCurrentQuestion(prev => prev + 1);
  };

  const updateAnswer = (questionKey: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionKey]: value
    }));
  };

  const renderQuestion = () => {
    switch (currentQuestion) {
      case 1:
        return (
          <Question1
            onAnswer={(answer) => {
              updateAnswer('question1', answer);
              goToNext();
            }}
          />
        );
      case 2:
        return (
          <Question2
            selectedAnswers={answers.question2}
            onAnswersChange={(selectedAnswers) => {
              updateAnswer('question2', selectedAnswers);
            }}
            onNext={goToNext}
          />
        );
      case 3:
        return (
          <Question3
            problemsSelected={answers.question2}
            onAnswer={(answer) => {
              updateAnswer('question3', answer);
              goToNext();
            }}
          />
        );
      case 4:
        return <Question4 />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {renderQuestion()}
      </div>
    </div>
  );
};

export default Quiz;
