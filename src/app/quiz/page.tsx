"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export default function Quiz() {
  const questions = [
    {
      text: "What is my MBTI?",
      correctAnswer: 2,
      choices: [
        {
          index: 1,
          text: "INFP",
        },
        {
          index: 2,
          text: "ISTJ",
        },
        {
          index: 3,
          text: "ENTP",
        },
        {
          index: 4,
          text: "ENSP",
        },
      ],
    },
    {
      text: "In which subject did I get 100% back in year-8?",
      correctAnswer: 3,
      choices: [
        {
          index: 1,
          text: "Maths",
        },
        {
          index: 2,
          text: "Chemistry",
        },
        {
          index: 3,
          text: "English",
        },
        {
          index: 4,
          text: "ICT",
        },
      ],
    },
    {
      text: "Which branch of physics is my favourite?",
      correctAnswer: 2,
      choices: [
        {
          index: 1,
          text: "General relativity",
        },
        {
          index: 2,
          text: "Astrophysics",
        },
        {
          index: 3,
          text: "Cosmology",
        },
        {
          index: 4,
          text: "Optics",
        },
      ],
    },
    {
      text: "Which was my role in News & Media during 2022 basketball tournament?",
      correctAnswer: 1,
      choices: [
        {
          index: 1,
          text: "Journalist",
        },
        {
          index: 2,
          text: "Interviewer",
        },
        {
          index: 3,
          text: "Photographer",
        },
        {
          index: 4,
          text: "Editor",
        },
      ],
    },
    {
      text: "Who is my favourite sololist?",
      correctAnswer: 2,
      choices: [
        {
          index: 1,
          text: "Chungha",
        },
        {
          index: 2,
          text: "Youra",
        },
        {
          index: 3,
          text: "Zico",
        },
        {
          index: 4,
          text: "IU",
        },
      ],
    },
    {
      text: "Which street dance style do I want to learn in the future?",
      correctAnswer: 4,
      choices: [
        {
          index: 1,
          text: "Popping",
        },
        {
          index: 2,
          text: "Breaking",
        },
        {
          index: 3,
          text: "Tutting",
        },
        {
          index: 4,
          text: "Waacking",
        },
      ],
    },
    {
      text: "Which career do I want to pursue in the future?",
      correctAnswer: 1,
      choices: [
        {
          index: 1,
          text: "Data Analyst",
        },
        {
          index: 2,
          text: "CEO",
        },
        {
          index: 3,
          text: "Finance Analyst",
        },
        {
          index: 4,
          text: "Chief Accountant",
        },
      ],
    },
    {
      text: "What's my favourite subject besides computer science?",
      correctAnswer: 3,
      choices: [
        {
          index: 1,
          text: "A Maths",
        },
        {
          index: 2,
          text: "E Maths",
        },
        {
          index: 3,
          text: "Accounting",
        },
        {
          index: 4,
          text: "EFL",
        },
      ],
    },
    {
      text: "Which sport do I want to be good at in the future?",
      correctAnswer: 4,
      choices: [
        {
          index: 1,
          text: "Billiards",
        },
        {
          index: 2,
          text: "Surfing",
        },
        {
          index: 3,
          text: "Bowling",
        },
        {
          index: 4,
          text: "Archery",
        },
      ],
    },
    {
      text: "What's my favourite car brand?",
      correctAnswer: 3,
      choices: [
        {
          index: 1,
          text: "BMW",
        },
        {
          index: 2,
          text: "Audi",
        },
        {
          index: 3,
          text: "Mercedes Benz",
        },
        {
          index: 4,
          text: "Ferrari",
        },
      ],
    },
  ];
  type QuizStatus = "not-started" | "started" | "finished";
  const [quizStatus, setQuizStatus] = useState<QuizStatus>("not-started");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [userChoice, setUserChoice] = useState(0);
  type AnswerStatusType = "not-answered" | "correct" | "wrong";
  const [answerStatus, setAnswerStatus] =
    useState<AnswerStatusType>("not-answered");

  // Function that checks if user's chosen index is correct or not
  // Update the hasAnsweredStatus and score accordingly

  const checkAnswer = (option: number) => {
    if (answerStatus == "not-answered") {
      setUserChoice(option);
      if (option == questions[questionIndex].correctAnswer) {
        setScore(score + 1);
        setAnswerStatus("correct");
      } else {
        setAnswerStatus("wrong");
      }
    }
  };

  const restrat = () => {
    setQuestionIndex(0);
    setScore(0);
    setUserChoice(0);
    setAnswerStatus("not-answered");
  };

  const next = () => {
    setAnswerStatus("not-answered");
    setUserChoice(0);
    setQuestionIndex(questionIndex + 1);
  };
  interface Props {
    userScore: number;
  }
  const FeedbackComponent = (props: Props) => {
    const [score, setUserScore] = useState(0);

    const displayFeedback = () => {
      const score = props.userScore;
      if (score >= 0 && score <= 2) {
        return "Well, you gave it a shot! Maybe we need more time to get to know each other.";
      } else if (score <= 5) {
        return "Room for improvement, but you're on the right track! Keep guessing.";
      } else if (score <= 8) {
        return "Great job! You're definitely paying attention.";
      } else if (score <= 10) {
        return "Impressive! You know me almost as well as my best friend.";
      }
    };

    return (
      <div>
        <p>{displayFeedback()}</p>
        <br></br>
      </div>
    );
  };

  if (quizStatus == "not-started") {
    return (
      <main
        className="flex h-screen items-center justify-center 
      bg-gradient-to-b from-pink-500 to-pink-200"
      >
        <div className="flex flex-col gap-16">
          <h2 className="text-6xl font-medium text-primary font-serif">
            Click Ready to start!!!
          </h2>
          <div className="text-center">
            <Button
              className="font-serif rounded-3xl border-4 border-secondary bg-transparent px-4 py-6 text-2xl font-semibold text-secondary transition hover-bg-primary hover-text-white"
              onClick={() => setQuizStatus("started")}
            >
              Ready
            </Button>
          </div>
        </div>
      </main>
    );
  } else if (quizStatus == "started") {
    return (
      <main
        className="flex h-screen flex-col items-center justify-center gap-4 px-48 
      bg-gradient-to-b from-pink-500 to-pink-200"
      >
        <div className="flex w-full flex-row justify-end gap-8">
          <Button
            className="rounded-3xl border-4 border-secondary bg-transparent px-4 py-2 text-lg font-semibold text-secondary transition hover:bg-primary hover:text-white"
            onClick={() => {
              setQuestionIndex(0);
              setScore(0);
            }}
          >
            Restart
          </Button>
          <div
            className="flex flex-col rounded-3xl border-4 border-secondary bg-transparent px-4 py-2 text-lg font-semibold text-secondary"
            onClick={() => {
              setQuestionIndex(0);
              setScore(0);
            }}
          >
            Score
            <span>{score} / 10</span>
          </div>
        </div>
        <div>
          <p className="text-3xl text-center text-primary font-serif font-bold">
            {questions[questionIndex].text}
          </p>
          <br />
          <br />
          <div className="flex flex-row items-center gap-4">
            {questions[questionIndex]?.choices.map((choice) => (
              <Button
                key={choice.index}
                className={cn(
                  "mx-4 gap-4 rounded-xl border-4 border-primary bg-primary px-6 py-7 font-serif text-2xl font-semibold text-secondary",
                  answerStatus === "correct" &&
                    choice.index === userChoice &&
                    "bg-green-500 hover:bg-green-500",
                  answerStatus === "wrong" &&
                    choice.index === userChoice &&
                    "bg-red-600 hover:bg-red-600"
                )}
                onClick={() => checkAnswer(choice.index)}
              >
                {choice.text}
              </Button>
            ))}
          </div>
        </div>
        <br />
        {answerStatus != "not-answered" &&
          questionIndex < questions.length - 1 && (
            <Button
              className="rounded-3xl border-4 border-primary bg-transparent px-4 py-2 text-lg 
  font-semibold text-pink-700 transition hover-bg-primary hover-text-white font-serif"
              onClick={() => next()}
            >
              Next
            </Button>
          )}
        {questionIndex == questions.length - 1 && (
          <Button
            className="rounded-3xl border-4 border-primary bg-transparent px-4 py-2 text-lg 
  font-semibold  text-pink-700 transition hover-bg-primary hover-text-white font-serif"
            onClick={() => setQuizStatus("finished")}
          >
            Finish
          </Button>
        )}
      </main>
    );
  } else if (quizStatus == "finished")
    return (
      <main
        className="flex flex-col min-h-screen justify-center items-center gap-3 mr-auto
       bg-gradient-to-b from-pink-500 to-pink-200 font-serif"
      >
        <div className="text-2xl text-semibold flex flex-col items-center justify-center text-center">
          <br></br>
          <p>Click onto each button to check the correct answers!!</p>
          <br></br>
          <FeedbackComponent userScore={score} />
          <p>
            Your Score: {score}/{questions.length}
          </p>
          <div className="flex flex-row">
            {[...Array(10)].map((_, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div
                    className="cursor-pointer flex items-center"
                    key={index}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "pink",
                      cursor: "pointer",
                      margin: "5px",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    {index + 1}
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-serif">
                      {questions[index].text}
                    </DialogTitle>
                    <DialogDescription className="font-serif">
                      Answer:{" "}
                      {
                        questions[index].choices[
                          questions[index].correctAnswer - 1
                        ].text
                      }
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </main>
    );
}
