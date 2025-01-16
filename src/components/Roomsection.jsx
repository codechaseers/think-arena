import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Users, Plus, ArrowRight } from "lucide-react";

export function RoomSection({ onGameStart }) {
  const [roomCode, setRoomCode] = useState("");

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <Card className="p-6 bg-white/80 shadow-xl shadow-blue-100/50 border border-blue-100">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Create Room</h3>
          <p className="text-blue-900/70 mb-6">
            Start a new game room and invite your friends to join.
          </p>
          <Input
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            placeholder="Enter room code"
            className=" my-3 bg-white border-blue-200 text-blue-900 focus:border-blue-400"
          />
          <Input
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            placeholder="Select Number of Question"
            className=" my-3 bg-white border-blue-200 text-blue-900 focus:border-blue-400"
          />
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
            onClick={ ""}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New Room
          </Button>
        </Card>

        {/* join room card */}
        <Card className="p-6 bg-white/80 shadow-xl shadow-blue-100/50 border border-blue-100">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Join Room</h3>
          <p className="text-blue-900/70 mb-6">
            Enter a room code to join an existing game.
          </p>
          <div className="flex space-x-2">
            <Input
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              placeholder="Enter room code"
              className="bg-white border-blue-200 text-blue-900 focus:border-blue-400"
            />
            <Button
              size="lg"
              onClick={ ""}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
