
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Star, Award } from 'lucide-react';

interface Question1Props {
  onAnswer: (answer: string) => void;
}

const Question1 = ({ onAnswer }: Question1Props) => {
  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50 rounded-2xl"></div>
      
      <Card className="relative w-full shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
        {/* Top Banner - Authority */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4">
          <div className="flex items-center justify-center gap-2">
            <Award className="w-5 h-5" />
            <span className="font-semibold text-sm">Dr. Felipe Martins - Oftalmologista Especialista</span>
          </div>
        </div>

        <CardHeader className="text-center pb-8 pt-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full shadow-lg">
                <Eye className="w-16 h-16 text-blue-600" />
              </div>
              {/* Pulse animation */}
              <div className="absolute inset-0 bg-blue-200 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex justify-center items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-sm text-gray-600 font-medium">+10.000 pacientes atendidos</span>
          </div>

          <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight mb-4">
            Você tem algum tipo de problema de visão?
          </CardTitle>
          
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Descubra como mais de <strong className="text-blue-600">10.000 pessoas</strong> recuperaram sua visão sem cirurgia
          </p>
        </CardHeader>
        
        <CardContent className="flex flex-col sm:flex-row gap-6 justify-center items-center pb-10 px-8">
          <Button
            onClick={() => onAnswer('sim')}
            className="group w-full sm:w-56 h-18 text-xl font-bold bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center py-2">
              <span>✓ Sim, tenho</span>
              <span className="text-sm opacity-90">Quero solucionar</span>
            </div>
          </Button>
          
          <Button
            onClick={() => onAnswer('não')}
            className="group w-full sm:w-56 h-18 text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center py-2">
              <span>Não tenho</span>
              <span className="text-sm opacity-90">Quero prevenir</span>
            </div>
          </Button>
        </CardContent>

        {/* Bottom trust indicator */}
        <div className="bg-gray-50 text-center py-4 px-4">
          <p className="text-sm text-gray-600">
            🔒 <strong>100% Seguro e Confidencial</strong> • Método aprovado por especialistas
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Question1;
