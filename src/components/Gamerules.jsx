
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export function GameRules() {
  const rules = [
    "Each game consists of 15 questions from various categories",
    "Players have 30 seconds to answer each question",
    "Correct answers award points based on response time",
    "First to answer correctly gets bonus points",
    "Wrong answers receive no points",
    "The player with the most points at the end wins"
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text">
        How to Play
      </h2>
      
      <Card className="max-w-2xl mx-auto bg-white/80 shadow-xl shadow-blue-100/50 border border-blue-100">
        <ScrollArea className="h-[300px] p-6">
          <div className="space-y-4">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-8 h-8 mt-0.5 text-green-500" />
                <p className="text-blue-900/80">{rule}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </section>
  );
}