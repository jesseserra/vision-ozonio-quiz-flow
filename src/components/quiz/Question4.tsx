
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Star, Clock, Users, Shield, CheckCircle, AlertTriangle, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const Question4 = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [currentViewers, setCurrentViewers] = useState(23);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    const viewerTimer = setInterval(() => {
      setCurrentViewers(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        const newCount = prev + change;
        return Math.max(20, Math.min(25, newCount)); // Keep between 20-25
      });
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(viewerTimer);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRedirect = () => {
    window.location.href = 'https://saudeface.online/v01-h2';
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-yellow-50 opacity-50 rounded-2xl"></div>
      
      <Card className="relative w-full shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
        {/* Success Banner with Scarcity */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-4 px-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6" />
              <span className="font-bold text-xl">🎉 PARABÉNS! VOCÊ FOI QUALIFICADO! 🎉</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>👥 {currentViewers}/25 vagas ocupadas</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 animate-pulse" />
                <span className="font-bold text-yellow-300">⏰ {formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>
        </div>

        <CardHeader className="text-center pb-6 pt-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="p-6 bg-gradient-to-br from-green-100 to-yellow-100 rounded-full shadow-lg">
                <Award className="w-20 h-20 text-green-600" />
              </div>
              {/* Success animations */}
              <div className="absolute -top-3 -right-3 bg-yellow-400 rounded-full p-2 animate-bounce">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              <div className="absolute -bottom-2 -left-2 bg-green-500 rounded-full p-2 animate-pulse">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          {/* 5-star rating */}
          <div className="flex justify-center items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
            ))}
            <span className="ml-3 text-lg font-bold text-gray-700">4.9/5 (2.847 avaliações)</span>
          </div>

          <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent leading-tight mb-6">
            Acesso Liberado ao Método do Dr. Felipe Martins
          </CardTitle>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-green-700">100% Natural</p>
              <p className="text-xs text-green-600">Sem cirurgia</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-blue-700">+10.000 Curados</p>
              <p className="text-xs text-blue-600">Resultados comprovados</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-purple-700">Resultados em 7 dias</p>
              <p className="text-xs text-purple-600">Método rápido</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-400 p-6 rounded-lg mb-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  ⚠️ ATENÇÃO: Apresentação Exclusiva e Limitada
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  O renomado <strong className="text-green-600">Dr. Felipe Martins</strong> preparou uma 
                  apresentação onde ele revela o <strong className="text-orange-600">"Truque do Ozônio"</strong> 
                  que está revolucionando o tratamento de visão no Brasil.
                </p>
                <div className="bg-white border border-orange-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-red-600">APENAS {25 - currentViewers} VAGAS RESTANTES!</strong> 
                    Esta apresentação é liberada para no máximo 25 pessoas simultaneamente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency counter */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6">
            <div className="text-center">
              <p className="text-red-700 font-bold text-lg mb-2">
                🚨 TEMPO LIMITADO PARA ACESSAR
              </p>
              <div className="text-3xl font-bold text-red-600 mb-2">
                {formatTime(timeLeft)}
              </div>
              <p className="text-sm text-red-600">
                Após este tempo, as vagas serão liberadas para lista de espera
              </p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex flex-col gap-4 justify-center items-center pb-8 px-8">
          <Button
            onClick={handleRedirect}
            className="group w-full sm:w-80 h-20 text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
          >
            <div className="flex flex-col items-center py-2">
              <span className="flex items-center gap-2">
                ✅ SIM! Quero Recuperar Minha Visão
              </span>
              <span className="text-sm opacity-90">Acessar Apresentação Exclusiva Agora</span>
            </div>
          </Button>
          
          <Button
            onClick={handleRedirect}
            className="group w-full sm:w-80 h-16 text-lg font-semibold bg-gray-400 hover:bg-gray-500 text-white border-0 rounded-xl shadow-lg transition-all duration-300"
          >
            <span className="opacity-75">Não, prefiro continuar com problemas de visão</span>
          </Button>

          {/* Social proof */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">
              🔥 <strong>1.234 pessoas</strong> acessaram esta apresentação nas últimas 24h
            </p>
            <div className="flex justify-center gap-4 text-xs text-gray-500">
              <span>💬 "Funcionou para mim!" - Maria S.</span>
              <span>⭐ "Incrível resultado!" - João P.</span>
              <span>❤️ "Vida transformada!" - Ana L.</span>
            </div>
          </div>
        </CardContent>

        {/* Final trust banner */}
        <div className="bg-gray-50 text-center py-4 px-4">
          <p className="text-sm text-gray-600">
            🔒 <strong>Informações 100% Protegidas</strong> • 
            📋 <strong>Método Aprovado por Especialistas</strong> • 
            🎯 <strong>Resultados Garantidos</strong>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Question4;
