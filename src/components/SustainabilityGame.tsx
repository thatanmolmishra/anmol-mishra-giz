
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const trees = [
  { id: 1, planted: false },
  { id: 2, planted: false },
  { id: 3, planted: false },
  { id: 4, planted: false },
  { id: 5, planted: false },
  { id: 6, planted: false },
  { id: 7, planted: false },
  { id: 8, planted: false },
  { id: 9, planted: false },
];

const sustainabilityFacts = [
  "Planting trees helps absorb CO2 and fight climate change.",
  "One tree can absorb up to 48 pounds of CO2 per year.",
  "Trees provide habitat for wildlife and promote biodiversity.",
  "Forests help prevent soil erosion and maintain water quality.",
  "Urban trees can reduce temperatures by up to 8 degrees Celsius.",
  "Reforestation projects help restore damaged ecosystems.",
  "Trees improve air quality by removing pollutants.",
  "Sustainable forestry helps local communities thrive.",
  "Green spaces in urban areas improve mental health.",
];

const SustainabilityGame = () => {
  const [plantedTrees, setPlantedTrees] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [fact, setFact] = useState("");
  const [gameComplete, setGameComplete] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (plantedTrees.length === trees.length) {
      setGameComplete(true);
      toast({
        title: "Congratulations!",
        description: "You've planted all the trees and made a positive impact!",
      });
    }
  }, [plantedTrees, toast]);

  const handlePlantTree = (id: number) => {
    if (!plantedTrees.includes(id)) {
      setPlantedTrees([...plantedTrees, id]);
      setScore(score + 10);
      const randomFact = sustainabilityFacts[Math.floor(Math.random() * sustainabilityFacts.length)];
      setFact(randomFact);
      toast({
        title: "Tree Planted!",
        description: "You earned 10 points for sustainability.",
      });
    }
  };

  const resetGame = () => {
    setPlantedTrees([]);
    setScore(0);
    setFact("");
    setGameComplete(false);
  };

  return (
    <section id="sustainability-game" className="py-20">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-green-800"
        >
          Sustainability Game
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 max-w-3xl mx-auto mb-8"
        >
          Help make the world greener by planting virtual trees! Click on the empty spots to plant trees and learn sustainability facts.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 p-4 rounded-lg bg-green-100 text-center"
        >
          <p className="text-xl font-semibold text-green-800">Score: {score} points</p>
          {fact && <p className="text-gray-700 mt-2">"{fact}"</p>}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8"
        >
          {trees.map((tree) => {
            const isPlanted = plantedTrees.includes(tree.id);
            return (
              <motion.div
                key={tree.id}
                className={`h-32 rounded-lg flex items-center justify-center cursor-pointer transition-all ${
                  isPlanted ? 'bg-green-100' : 'bg-amber-50'
                }`}
                onClick={() => handlePlantTree(tree.id)}
                whileHover={{ scale: 1.05 }}
              >
                {isPlanted ? (
                  <div className="text-center">
                    <div className="text-4xl">🌳</div>
                    <div className="text-green-700 text-xs mt-1">Planted!</div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-4xl">🌱</div>
                    <div className="text-gray-500 text-xs mt-1">Plant here</div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
        
        {gameComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-green-800 font-bold text-xl mb-4">
              You've planted all the trees! 🎉
            </p>
            <Button onClick={resetGame} variant="outline">
              Play Again
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SustainabilityGame;
