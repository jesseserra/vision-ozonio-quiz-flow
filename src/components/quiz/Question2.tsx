
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertTriangle, Eye, Zap, Brain, Target, Focus, Shield, Activity, Clock, Users } from 'lucide-react';

interface Question2Props {
  selectedAnswers: string[];
  onAnswersChange: (answers: string[]) => void;
  onNext: () => void;
}

const Question2 = ({ selectedAnswers, onAnswersChange, onNext }: Question2Props) => {
  const options = [
    { text: 'Catarata', icon: Shield, severity: 'alta' },
    { text: 'Visão embaçada', icon: Eye, severity: 'média' },
    { text: 'Vista cansada', icon: Zap, severity: 'baixa' },
    { text: 'Dores de cabeça', icon: Brain, severity: 'média' },
    { text: 'Astigmatismo', icon: Target, severity: 'média' },
    { text: 'Hipermetropia', icon: Focus, severity: 'baixa' },
    { text: 'Descolamento da retina', icon: AlertTriangle, severity: 'alta' },
    { text: 'Retinopatia Diabética', icon: Activity, severity: 'alta' }
  ];

  const handleOptionChange = (option: string, checked: boolean) => {
    if (checked) {
      onAnswersChange([...selectedAnswers, option]);
    } else {
      onAnswersChange(selectedAnswers.filter(answer => answer !== option));
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'alta': return 'border-red-200 bg-red-50';
      case 'média': return 'border-orange-200 bg-orange-50';
      case 'baixa': return 'border-yellow-200 bg-yellow-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 opacity-50 rounded-2xl"></div>
      
      <Card className="relative w-full shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-2 sm:py-3 px-2 sm:px-4">
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse flex-shrink-0" />
            <span className="font-bold text-xs sm:text-sm">⚡ DIAGNÓSTICO RÁPIDO EM ANDAMENTO...</span>
          </div>
        </div>

        <CardHeader className="text-center pb-4 sm:pb-6 pt-6 sm:pt-8 px-4 sm:px-6">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative">
              <div className="p-4 sm:p-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-full shadow-lg">
                <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 text-orange-600" />
              </div>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs font-bold px-1 sm:px-2 py-1 rounded-full">
                URGENTE
              </div>
            </div>
          </div>

          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent leading-tight mb-3 sm:mb-4 px-2">
            O que mais incomoda você hoje?
          </CardTitle>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 mx-2">
            <div className="flex items-center justify-center gap-1 sm:gap-2 text-blue-700">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base">847 pessoas responderam hoje</span>
            </div>
          </div>
          
          <p className="text-base sm:text-lg text-gray-600 px-2">
            <strong className="text-orange-600">Múltipla escolha</strong> • Selecione todos que se aplicam
          </p>
        </CardHeader>
        
        <CardContent className="space-y-3 sm:space-y-4 pb-6 sm:pb-8 px-3 sm:px-8">
          {options.map((option) => {
            const IconComponent = option.icon;
            const isSelected = selectedAnswers.includes(option.text);
            return (
              <div 
                key={option.text} 
                className={`relative flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                  isSelected 
                    ? 'border-orange-400 bg-orange-50 shadow-md scale-[1.02]' 
                    : `${getSeverityColor(option.severity)} hover:border-orange-300`
                }`}
                onClick={() => handleOptionChange(option.text, !isSelected)}
              >
                <Checkbox
                  id={option.text}
                  checked={isSelected}
                  onCheckedChange={(checked) => handleOptionChange(option.text, checked as boolean)}
                  className="h-5 w-5 sm:h-6 sm:w-6 border-2 flex-shrink-0"
                />
                <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
                  <div className={`p-2 sm:p-3 rounded-full flex-shrink-0 ${
                    isSelected ? 'bg-orange-200' : 'bg-white shadow-sm'
                  }`}>
                    <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      isSelected ? 'text-orange-700' : 'text-orange-600'
                    }`} />
                  </div>
                  <label
                    htmlFor={option.text}
                    className="text-base sm:text-lg font-medium text-gray-800 cursor-pointer flex-1 min-w-0"
                  >
                    {option.text}
                  </label>
                  {option.severity === 'alta' && (
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-1 sm:px-2 py-1 rounded-full flex-shrink-0">
                      PRIORIDADE
                    </span>
                  )}
                </div>
              </div>
            );
          })}
          
          {selectedAnswers.length > 0 && (
            <div className="flex justify-center pt-6 sm:pt-8">
              <Button
                onClick={onNext}
                className="group w-full sm:w-64 h-14 sm:h-16 text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <span>Continuar Diagnóstico</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </Button>
            </div>
          )}
        </CardContent>

        {/* Progress indicator */}
        <div className="bg-gray-50 px-4 sm:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600">
            <span>Progresso do diagnóstico</span>
            <span className="font-bold">40% completo</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full w-2/5 transition-all duration-500"></div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Question2;
