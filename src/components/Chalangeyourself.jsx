import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Brain, Trophy, Target } from "lucide-react";

const topics = [
  "General Knowledge",
  "Science",
  "History",
  "Geography",
  "Technology",
  "Sports",
  "Arts",
  "Literature",
];

const difficulties = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const questionCounts = [15, 20, 25, 30];

export function ChallengeSection({
  setQuestionCount,
  setDifficulty,
  setSelectedTopic,
  questionCount,
  difficulty,
  selectedTopic,
gameStart
}) {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Challeng Yourself
          </h2>
          <p className="text-xl mt-[2em] text-blue-900/80">
            Customize your solo quiz experience and test your knowledge
          </p>
        </div>

        <Card className="p-8 bg-white/80 shadow-xl shadow-blue-100/50 border border-blue-100">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-lg font-medium text-blue-900">
                <Brain className="w-5 h-5 text-blue-500" />
                Select Topic
              </label>
              <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                <SelectTrigger className="w-full bg-white border-blue-200">
                  <SelectValue placeholder="Choose a topic" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((topic) => (
                    <SelectItem key={topic} value={topic}>
                      {topic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2 text-lg font-medium text-blue-900">
                <Target className="w-5 h-5 text-blue-500" />
                Difficulty Level
              </label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger className="w-full bg-white border-blue-200">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2 text-lg font-medium text-blue-900">
                <Trophy className="w-5 h-5 text-blue-500" />
                Number of Questions
              </label>
              <Select
                value={questionCount.toString()}
                onValueChange={(value) => setQuestionCount(Number(value))}
              >
                <SelectTrigger className="w-full bg-white border-blue-200">
                  <SelectValue placeholder="Select count" />
                </SelectTrigger>
                <SelectContent>
                  {questionCounts.map((count) => (
                    <SelectItem key={count} value={count.toString()}>
                      {count} Questions
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              onClick={gameStart}
              disabled={!selectedTopic || !difficulty}
              className="px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
            >
              Start Challenge
            </Button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm text-blue-900/70">
            <div className="p-3 rounded-lg bg-blue-50/50">
              <p className="font-medium text-blue-900">Selected Topic</p>
              <p>{selectedTopic || "Not selected"}</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50/50">
              <p className="font-medium text-blue-900">Difficulty</p>
              <p>
                {difficulty
                  ? difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
                  : "Not selected"}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50/50">
              <p className="font-medium text-blue-900">Questions</p>
              <p>{questionCount}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
