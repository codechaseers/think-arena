import React from "react";
import { useState } from "react";
import { GameInterface } from "./Gameinterface";
import { ChallengeSection } from "./Chalangeyourself";

export default function Questionset() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questionCount, setQuestionCount] = useState(15);
  const [quizStart, setQuizStart] = useState(false);

  const gameStart=async ()=>{
 
    setQuizStart(true)
 
  }
console.log(difficulty);
console.log(selectedTopic);

  return (
    <>
      {quizStart ? (
        <GameInterface />
      ) : (
        <ChallengeSection
          selectedTopic={selectedTopic}
          difficulty={difficulty}
          questionCount={questionCount}
          setSelectedTopic={setSelectedTopic}
          setDifficulty={setDifficulty}
          setQuestionCount={setQuestionCount}
          quizStart={quizStart}
          setQuizStart={setQuizStart}
          gameStart={gameStart}
        />
      )}
    </>
  );
}
