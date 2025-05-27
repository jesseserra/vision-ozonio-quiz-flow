
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertTriangle, Eye, Zap, Brain, Target, Focus, Shield, Activity } from 'lucide-react';

interface Question2Props {
  selectedAnswers: string[];
  onAnswersChange: (answers: string[]) => void;
  onNext: () => void;
}

const Question2 = ({ selectedAnswers, onAnswersChange, onNext }: Question2Props) => {
  const options = [
    { text: 'Catarata', icon: Shield },
    { text: 'Visão embaçada', icon: Eye },
    { text: 'Vista cansada', icon: Zap },
    { text: 'Dores de cabeça', icon: Brain },
    { text: 'Astigmatismo', icon: Target },
    { text: 'Hipermetropia', icon: Focus },
    { text: 'Descolamento da retina', icon: AlertTriangle },
    { text: 'Retinopatia Diabética', icon: Activity }
  ];

  const handleOptionChange = (option: string, checked: boolean) => {
    if (checked) {
      onAnswersChange([...selectedAnswers, option]);
    } else {
      onAnswersChange(selectedAnswers.filter(answer => answer !== option));
    }
  };

  return (
    <Card className="w-full shadow-xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center pb-8">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-orange-100 rounded-full">
            <AlertTriangle className="w-12 h-12 text-orange-600" />
          </div>
        </div>
        <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          O que mais incomoda você hoje?
        </CardTitle>
        <p className="text-lg text-gray-600 mt-2">Múltipla escolha</p>
      </CardHeader>
      <CardContent className="space-y-4 pb-8">
        {options.map((option) => {
          const IconComponent = option.icon;
          return (
            <div key={option.text} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <Checkbox
                id={option.text}
                checked={selectedAnswers.includes(option.text)}
                onCheckedChange={(checked) => handleOptionChange(option.text, checked as boolean)}
                className="h-5 w-5"
              />
              <div className="flex items-center space-x-3 flex-1">
                <div className="p-2 bg-orange-50 rounded-full">
                  <IconComponent className="w-5 h-5 text-orange-600" />
                </div>
                <label
                  htmlFor={option.text}
                  className="text-lg text-gray-700 cursor-pointer flex-1"
                >
                  {option.text}
                </label>
              </div>
            </div>
          );
        })}
        
        {selectedAnswers.length > 0 && (
          <div className="flex justify-center pt-6">
            <Button
              onClick={onNext}
              className="w-full sm:w-48 h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              Próxima
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Question2;
