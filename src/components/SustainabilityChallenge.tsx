
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "Which of these helps the most to absorb CO2?",
    options: [
      { text: "Planting trees", correct: true },
      { text: "Building roads", correct: false },
      { text: "Burning fossil fuels", correct: false },
    ],
    fact: "Trees absorb up to 48 pounds of CO2 per year!"
  },
  {
    question: "What is an easy way to save water at home?",
    options: [
      { text: "Take shorter showers", correct: true },
      { text: "Let the tap run", correct: false },
      { text: "Use a hose everywhere", correct: false },
    ],
    fact: "Taking shorter showers reduces water usage significantly."
  },
  {
    question: "Which activity boosts biodiversity?",
    options: [
      { text: "Planting native flowers", correct: true },
      { text: "Paving gardens", correct: false },
      { text: "Spraying pesticides widely", correct: false }
    ],
    fact: "Native flowers help pollinators and local wildlife!"
  }
];

type GameState = "playing" | "won" | "lost";

const MAX_WRONG = 2;

const SustainabilityChallenge = () => {
  const [step, setStep] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [state, setState] = useState<GameState>("playing");
  const [showFact, setShowFact] = useState(false);

  const handleOption = (correct: boolean) => {
    if (!correct && wrong + 1 >= MAX_WRONG) {
      setState("lost");
      return;
    }
    if (!correct) {
      setWrong(wrong + 1);
      setShowFact(true);
      setTimeout(() => setShowFact(false), 900);
      return;
    }
    setShowFact(true);
    setTimeout(() => {
      setShowFact(false);
      if (step + 1 === questions.length) {
        setState("won");
      } else {
        setStep(step + 1);
      }
    }, 900);
  };

  const restart = () => {
    setStep(0);
    setWrong(0);
    setState("playing");
    setShowFact(false);
  };

  return (
    <section id="sustainability-challenge" className="py-20">
      <div className="container max-w-lg mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-green-800"
        >
          Sustainability Quiz Game
        </motion.h2>
        <div className="bg-green-50 border border-green-100 rounded-lg shadow-lg p-8 space-y-6">
          {state === "playing" && (
            <>
              <div className="text-base font-medium text-green-700 mb-2">
                Question {step + 1} of {questions.length}
              </div>
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg font-semibold text-gray-900 mb-5"
              >
                {questions[step].question}
              </motion.div>
              <div className="grid gap-4">
                {questions[step].options.map((option, i) => (
                  <Button
                    key={i}
                    className="text-base"
                    variant="outline"
                    onClick={() => handleOption(!!option.correct)}
                    disabled={showFact}
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap justify-between items-center">
                <div className="text-sm text-gray-700">
                  Wrong attempts: <span className={wrong >= MAX_WRONG-1 ? "text-red-500 font-bold" : "text-orange-500"}>{wrong}</span> / {MAX_WRONG}
                </div>
                {showFact && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-700 text-sm"
                  >
                    {questions[step].fact}
                  </motion.div>
                )}
              </div>
            </>
          )}
          {state === "won" && (
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-5xl mb-2"
              >
                🏆
              </motion.div>
              <div className="text-green-800 font-bold text-2xl mb-3">
                Congratulations! You won the Sustainability Challenge!
              </div>
              <Button onClick={restart} variant="default">Play Again</Button>
            </div>
          )}
          {state === "lost" && (
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-5xl mb-2"
              >
                😢
              </motion.div>
              <div className="text-red-800 font-bold text-2xl mb-3">
                Oh no! You lost. Try to answer more correctly!
              </div>
              <Button onClick={restart} variant="destructive">Try Again</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SustainabilityChallenge;
