
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Star } from 'lucide-react';

const Question4 = () => {
  const handleRedirect = () => {
    window.location.href = 'https://saudeface.online/v01-h2';
  };

  return (
    <Card className="w-full shadow-xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center pb-6">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-green-100 rounded-full">
            <Award className="w-12 h-12 text-green-600" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
          ))}
        </div>
        <CardTitle className="text-2xl md:text-3xl font-bold text-green-600 leading-tight mb-4">
          Parabéns, você foi qualificado a usar o Truque do Ozônio!
        </CardTitle>
        <div className="mt-6 space-y-4">
          <div className="text-left space-y-4 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              O renomado <strong>Dr. Felipe Martins</strong> preparou uma curta apresentação onde ele praticamente cuspiu na cara de todos os Oftalmologistas que recomendam óculos, colírios ou cirurgias. E mostrou o passo a passo de como fazer o truque do ozônio ainda hoje aí na sua casa para recuperar a sua visão.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Essa apresentação é fechada e ela pode ser liberada para apenas <strong className="text-red-600">25 pessoas ao mesmo tempo</strong>, então precisamos saber se você vai dar valor e assistir até o final.
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-8">
        <Button
          onClick={handleRedirect}
          className="w-full sm:w-48 h-16 text-xl font-semibold bg-green-500 hover:bg-green-600 text-white border-0 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
        >
          Sim
        </Button>
        <Button
          onClick={handleRedirect}
          className="w-full sm:w-48 h-16 text-xl font-semibold bg-red-500 hover:bg-red-600 text-white border-0 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
        >
          Não
        </Button>
      </CardContent>
    </Card>
  );
};

export default Question4;
