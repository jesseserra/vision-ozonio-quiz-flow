
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Heart, BookOpen, MapPin, Phone, Eye, Star, Trophy } from 'lucide-react';

interface Question3Props {
  problemsSelected: string[];
  onAnswer: (answer: string) => void;
}

const Question3 = ({ problemsSelected, onAnswer }: Question3Props) => {
  const options = [
    { 
      text: 'Olhar ao redor e agradecer pela vida que tenho', 
      icon: Heart, 
      emotion: 'gratidão',
      color: 'from-pink-500 to-red-500'
    },
    { 
      text: 'Ler um livro ou mensagem sem esforço', 
      icon: BookOpen, 
      emotion: 'liberdade',
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      text: 'Sair para caminhar sem medo de tropeçar', 
      icon: MapPin, 
      emotion: 'segurança',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      text: 'Ligar para alguém especial e contar a novidade', 
      icon: Phone, 
      emotion: 'conexão',
      color: 'from-purple-500 to-violet-500'
    },
    { 
      text: 'Me olhar no espelho e me sentir bem comigo mesmo(a)', 
      icon: Eye, 
      emotion: 'autoestima',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const problemsText = problemsSelected.length > 0 
    ? problemsSelected.join(', ').toLowerCase()
    : 'seus problemas de visão';

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 opacity-50 rounded-2xl"></div>
      
      <Card className="relative w-full shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
        {/* Dream Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-4 px-4">
          <div className="flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6" />
            <span className="font-bold text-lg">✨ SEU MOMENTO DE TRANSFORMAÇÃO ✨</span>
          </div>
        </div>

        <CardHeader className="text-center pb-8 pt-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full shadow-lg">
                <Sparkles className="w-16 h-16 text-purple-600" />
              </div>
              {/* Magic sparkles */}
              <div className="absolute -top-2 -right-2">
                <Star className="w-6 h-6 text-yellow-400 fill-current animate-pulse" />
              </div>
              <div className="absolute -bottom-1 -left-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current animate-pulse" style={{animationDelay: '0.5s'}} />
              </div>
            </div>
          </div>

          <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6">
            Imagine acordar amanhã com visão perfeita...
          </CardTitle>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 mb-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Se você acordasse um dia sem <strong className="text-purple-600">{problemsText}</strong>, 
              qual seria a <strong className="text-pink-600">primeira coisa</strong> que faria?
            </p>
          </div>

          <p className="text-lg text-gray-600">
            <strong className="text-purple-600">Escolha o que mais toca seu coração ❤️</strong>
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4 pb-8 px-8">
          {options.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Button
                key={option.text}
                onClick={() => onAnswer(option.text)}
                variant="outline"
                className="group w-full p-6 h-auto text-left border-2 border-gray-200 hover:border-purple-300 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white hover:bg-gradient-to-r hover:from-white hover:to-purple-50"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="flex items-center space-x-4 w-full">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${option.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-lg font-medium text-gray-800 leading-relaxed block">
                      {option.text}
                    </span>
                    <span className="text-sm text-purple-600 font-semibold capitalize mt-1 block">
                      💭 {option.emotion}
                    </span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-5 h-5 text-pink-500 fill-current" />
                  </div>
                </div>
              </Button>
            );
          })}
        </CardContent>

        {/* Progress and motivation */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-8 py-6">
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-purple-700">
              🎯 Você está a apenas 1 passo da solução!
            </p>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Progresso do diagnóstico</span>
            <span className="font-bold text-purple-600">75% completo</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full w-3/4 transition-all duration-500 shadow-sm"></div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Question3;
