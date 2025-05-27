
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
        <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          3° Pergunta - Future Pacing
        </CardTitle>
        <p className="text-lg md:text-xl text-gray-700 mt-4 font-medium leading-relaxed">
          Se você acordasse um dia com a visão perfeita, sem {problemsText}, qual seria a primeira coisa que faria?
        </p>
      </CardHeader>
      <CardContent className="space-y-3 pb-8">
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => onAnswer(option)}
            variant="outline"
            className="w-full p-4 h-auto text-left text-gray-700 hover:bg-blue-50 hover:border-blue-300 border-gray-200 rounded-xl transition-all duration-200 hover:scale-[1.02]"
          >
            <span className="text-base leading-relaxed">{option}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default Question3;
