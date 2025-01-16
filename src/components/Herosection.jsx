import { Button } from '@/components/ui/button';
import { Brain, Users, Timer, Trophy } from 'lucide-react';

export function Herosection() {
  return (
    <div className="py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text">
          Test Your Knowledge in Real-Time
        </h1>
        <p className="text-xl text-blue-900/80 mb-8">
          Challenge players worldwide in this fast-paced multiplayer quiz game. Create rooms, join battles, and prove your expertise!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Brain, text: "Challenging Questions" },
            { icon: Users, text: "Multiplayer Battles" },
            { icon: Timer, text: "Real-time Competition" },
            { icon: Trophy, text: "Global Rankings" }
          ].map((feature, index) => (
            <div key={index} className="p-4 rounded-xl bg-white/80 shadow-lg shadow-blue-100/50 border border-blue-100">
              <feature.icon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
              <p className="text-blue-900/80">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
            Create Room
          </Button>
          <Button size="lg" variant="outline" className="border-blue-400 text-blue-600 hover:bg-blue-50">
            Join Room
          </Button>
        </div>
      </div>
    </div>
  );
}