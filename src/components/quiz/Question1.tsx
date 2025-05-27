
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Question1Props {
  onAnswer: (answer: string) => void;
}

const Question1 = ({ onAnswer }: Question1Props) => {
  return (
    <Card className="w-full shadow-xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          1° Pergunta - Simples
        </CardTitle>
        <p className="text-xl md:text-2xl text-gray-700 mt-4 font-medium">
          Você tem algum tipo de problema de visão?
        </p>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-8">
        <Button
          onClick={() => onAnswer('sim')}
          className="w-full sm:w-48 h-16 text-xl font-semibold bg-green-500 hover:bg-green-600 text-white border-0 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
        >
          Sim
        </Button>
        <Button
          onClick={() => onAnswer('não')}
          className="w-full sm:w-48 h-16 text-xl font-semibold bg-red-500 hover:bg-red-600 text-white border-0 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
        >
          Não
        </Button>
      </CardContent>
    </Card>
  );
};

export default Question1;
