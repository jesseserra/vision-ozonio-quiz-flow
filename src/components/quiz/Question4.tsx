
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Question4 = () => {
  const handleRedirect = () => {
    window.location.href = 'https://saudeface.online/v01-h2';
  };

  return (
    <Card className="w-full shadow-xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          4° Compromisso em assistir a VSL
        </CardTitle>
        <div className="mt-6 space-y-4">
          <p className="text-xl md:text-2xl font-bold text-green-600">
            Parabéns, você foi qualificado a usar o Truque do Ozônio.
          </p>
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
