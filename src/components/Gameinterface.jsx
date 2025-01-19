import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Timer, Users } from "lucide-react";

export function GameInterface({ quizData }) {
  const [progress, setProgress] = useState(20);
  const [pageNo, setPageNo] = useState(1);
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState();
  const [userAnswer, setUserAnswer] = useState();
  const [userChoice, setUserChoice] = useState(false);
  const [attemptQuestionSet, setAttemptQuestionSet] = useState(new Set());

  const [numerOfQuestion, setNumerOfQuestion] = useState(
    quizData && quizData.length
  );

  // console.log(quizData);
  console.log("pageNo",pageNo);
  console.log("Number of question",numerOfQuestion);

  //Option  Set  Method
  useEffect(() => {
    let incorectOption = quizData[pageNo - 1].incorrect_answers;
    setAnswer(quizData && quizData[pageNo - 1].correct_answer);

    setOptions(incorectOption, answer);
    setUserChoice(false);
    // console.log("Attampt Question ", attemptQuestionSet);
  }, [pageNo]);

  const nextPage = () => {
    if (pageNo < numerOfQuestion) setPageNo((prev) => prev + 1);
  };

  const prevPage = () => {
    if (pageNo != 1) setPageNo((prev) => prev - 1);
  };

  const checkUseranswer = (userChoise, questionIndex) => {
    // if (userChoise == answer) {
    // }
    console.log("click option");
    setUserAnswer(userChoise);
    setUserChoice(true);
    setAttemptQuestionSet((prevSet) => {
      const newSet = new Set(prevSet); // Create a new Set to maintain immutability
      newSet.add(questionIndex); // Add the question index (example)
      return newSet; // Return the new Set
    });
  };

  // console.log(options);
  useEffect(() => {
    console.log("Attampt Question ", attemptQuestionSet);
  }, [attemptQuestionSet]);
  // console.log("correct ", answer);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <Card className="p-2 px-4 bg-white/80 shadow-lg shadow-blue-100/50 border border-blue-100">
            <div className="flex items-center space-x-2">
              <Timer className="w-4 h-4 text-blue-500" />
              <span className="text-blue-900">00:25</span>
            </div>
          </Card>

          <Progress
            value={progress}
            className="w-32 bg-blue-100  "
            style={{ "--progress-color": "green" }}
          />
        </div>

        <Card className="p-2 px-4 bg-white/80 shadow-lg shadow-blue-100/50 border border-blue-100">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-blue-900">4/6 Players</span>
          </div>
        </Card>
      </div>

      <Card className="p-8 mb-8 bg-white/80 shadow-xl shadow-blue-100/50 border border-blue-100">
        <h2 className="text-2xl text-blue-900 mb-2">
          Question {pageNo} of {numerOfQuestion}
        </h2>
        <p className="text-xl text-blue-900/90">
          {quizData && quizData[pageNo - 1].question}
        </p>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        {options &&
          [...options, answer]
            .sort(() => Math.random() - 0.5)
            .map((option, index) => (
              <Button
                key={index}
                disabled={userChoice || attemptQuestionSet.has(pageNo)}
                variant="outline"
                onClick={() => checkUseranswer(option, pageNo)}
                className={`bg-slate-50 p-6 text-lg border-blue-200 rounded-sm text-blue-900 hover:bg-blue-100 hover:border-blue-400 cursor-pointer shadow-sm ${
                  userChoice && option == userAnswer && userAnswer != answer
                    ? "bg-red-400"
                    : "bg-slate-50"
                } ${userChoice && option == answer ? "bg-green-600" : ""}`}
              >
                {option}
              </Button>
            ))}
      </div>
      <Button
        disabled={pageNo == 1}
        className="px-8 m-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
        onClick={prevPage}
      >
        Previous
      </Button>
      <Button
        disabled={pageNo == numerOfQuestion}
        className="px-8  bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
        onClick={nextPage}
      >
        next
      </Button>
    </div>
  );
}
