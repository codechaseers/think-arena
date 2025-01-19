import React from "react";
import { useState } from "react";
import { GameInterface } from "./Gameinterface";
import { ChallengeSection } from "./Chalangeyourself";
import axios from "axios";

export default function Questionset() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questionCount, setQuestionCount] = useState(5);
  const [quizStart, setQuizStart] = useState(false);
  const [quizData, setQuizData] = useState();
 

  const gameStart = async () => {
    try {
      let response=await axios.get(`https://opentdb.com/api.php?amount=${questionCount}&category=${selectedTopic}&difficulty=${difficulty}&type=multiple`)
      if(response.data.response_code==0   )   {
        setQuizData(response.data.results)
        setQuizStart(true);
      }
      
      console.log(response.data)
    } catch (error) {
      
    }


    // 
  };
  console.log(difficulty);
  console.log(selectedTopic);
  console.log(quizData);

  return (
    <>
  
      {quizStart ? (
        <GameInterface quizData={quizData} />
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
