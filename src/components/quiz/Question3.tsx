
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

interface Question3Props {
  problemsSelected: string[];
  onAnswer: (answer: string) => void;
}

const Question3 = ({ problemsSelected, onAnswer }: Question3Props) => {
  const options = [
    'Olhar ao redor e agradecer',
    'Ler um livro ou mensagem sem esforço',
    'Sair para caminhar sem medo de tropeçar',
    'Ligar para alguém especial e contar a novidade',
    'Me olhar no espelho e me sentir bem comigo mesmo(a)'
  ];

  const problemsText = problemsSelected.length > 0 
    ? problemsSelected.join(', ').toLowerCase()
    : 'seus problemas de visão';

  return (
    <Card className="w-full shadow-xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center pb-8">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-purple-100 rounded-full">
            <Sparkles className="w-12 h-12 text-purple-600" />
          </div>
        </div>
        <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          Se você acordasse um dia com a visão perfeita, sem {problemsText}, qual seria a primeira coisa que faria?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pb-8">
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => onAnswer(option)}
            variant="outline"
            className="w-full p-4 h-auto text-left text-gray-700 hover:bg-purple-50 hover:border-purple-300 border-gray-200 rounded-xl transition-all duration-200 hover:scale-[1.02]"
          >
            <span className="text-base leading-relaxed">{option}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default Question3;
