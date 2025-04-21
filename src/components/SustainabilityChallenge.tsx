
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Recycling } from "lucide-react";

type Item = {
  name: string;
  icon: string; // emoji for demo; image src for production
  type: "recycle" | "trash";
};

const itemsData: Item[] = [
  { name: "Plastic Bottle", icon: "🧴", type: "recycle" },
  { name: "Banana Peel", icon: "🍌", type: "trash" },
  { name: "Newspaper", icon: "📰", type: "recycle" },
  { name: "Can", icon: "🥫", type: "recycle" },
  { name: "Eggshell", icon: "🥚", type: "trash" },
  { name: "Glass Jar", icon: "🥛", type: "recycle" },
  { name: "Chip Bag", icon: "🍟", type: "trash" },
  { name: "Cardboard", icon: "📦", type: "recycle" },
  { name: "Apple Core", icon: "🍏", type: "trash" },
  { name: "Magazine", icon: "📖", type: "recycle" },
];

const SHUFFLE = () => [...itemsData].sort(() => Math.random() - 0.5);

const MAX_MISTAKES = 3;
const WIN_SCORE = 7;

const SustainabilityChallenge = () => {
  const [items, setItems] = useState<Item[]>(SHUFFLE());
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [state, setState] = useState<"playing" | "won" | "lost">("playing");
  const dragItem = useRef<HTMLDivElement | null>(null);

  const restart = () => {
    setItems(SHUFFLE());
    setCurrent(0);
    setScore(0);
    setMistakes(0);
    setState("playing");
    dragItem.current = null;
  };

  // Drag-and-drop logic
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, idx: number) => {
    setDraggedIdx(idx);
    dragItem.current = e.currentTarget as HTMLDivElement;
    setTimeout(() => {
      if (dragItem.current) dragItem.current.style.opacity = "0.4";
    });
  };
  const handleDragEnd = () => {
    setDraggedIdx(null);
    if (dragItem.current) dragItem.current.style.opacity = "1";
    dragItem.current = null;
  };

  const handleDrop = (bin: "recycle" | "trash") => {
    if (state !== "playing" || draggedIdx === null) return;
    const item = items[current];
    if (item.type === bin) {
      setScore((s) => s + 1);
      if (score + 1 >= WIN_SCORE) setState("won");
      else setCurrent((c) => c + 1);
    } else {
      setMistakes((m) => m + 1);
      if (mistakes + 1 >= MAX_MISTAKES) setState("lost");
      else setCurrent((c) => c + 1);
    }
    setDraggedIdx(null);
    if (dragItem.current) dragItem.current.style.opacity = "1";
    dragItem.current = null;
  };

  // Touch controls for mobile (simulate drag)
  const [touching, setTouching] = useState<null | "recycle" | "trash">(null);

  const handleTouchStart = () => setTouched(true);
  const [touched, setTouched] = useState(false);

  const handleTouchBin = (bin: "recycle" | "trash") => {
    setTouching(bin);
    setTimeout(() => {
      handleDrop(bin);
      setTouching(null);
      setTouched(false);
    }, 300);
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
          ♻️ Recycle Sorter Game
        </motion.h2>
        <Card className="bg-green-50 border-green-100 shadow-lg rounded-2xl p-8">
          <CardContent>
            {state === "playing" && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-2 mb-6"
                >
                  <div className="text-base font-bold text-green-700">
                    Sort the item into the correct bin!
                  </div>
                  <div className="flex justify-between text-sm font-medium text-gray-700">
                    <div>Score: <span className="text-green-700">{score}</span>/{WIN_SCORE}</div>
                    <div>
                      Mistakes:{" "}
                      <span className={mistakes >= MAX_MISTAKES - 1 ? "text-red-500 font-bold" : "text-orange-500 font-bold"}>
                        {mistakes}
                      </span>
                      /{MAX_MISTAKES}
                    </div>
                  </div>
                </motion.div>

                {current < items.length && (
                  <motion.div
                    className="flex flex-col items-center gap-3 mb-6"
                    key={current}
                    initial={{ scale: 0.9, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                  >
                    <div
                      draggable
                      onDragStart={e => handleDragStart(e, current)}
                      onDragEnd={handleDragEnd}
                      onTouchStart={handleTouchStart}
                      className={`text-[5rem] select-none border-4 border-green-200 bg-white rounded-xl shadow-xl cursor-grab transition-transform duration-150 ${draggedIdx !== null ? "scale-95 opacity-60" : ""}`}
                      style={{ touchAction: "none" }}
                      aria-label={items[current].name}
                    >
                      {items[current].icon}
                    </div>
                    <div className="text-lg font-bold text-gray-800">{items[current].name}</div>
                    <div className="text-xs text-gray-500 pb-1">Drag to bin, or tap a bin below on mobile.</div>
                  </motion.div>
                )}
                <div className="flex items-center justify-center gap-10 mt-4">
                  <div
                    onDrop={e => { e.preventDefault(); handleDrop("recycle"); }}
                    onDragOver={e => e.preventDefault()}
                    onClick={() => { if (touched || draggedIdx !== null) handleTouchBin("recycle"); }}
                    className={`flex flex-col items-center px-6 py-2 cursor-pointer select-none rounded-xl border-2 transition-colors group
                      ${touching === "recycle" ? "border-green-500 bg-green-100" : "border-green-300 bg-white hover:bg-green-50"}
                    `}
                  >
                    <Recycling className="w-10 h-10 text-green-600 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-green-700 text-md">Recycle Bin</span>
                  </div>
                  <div
                    onDrop={e => { e.preventDefault(); handleDrop("trash"); }}
                    onDragOver={e => e.preventDefault()}
                    onClick={() => { if (touched || draggedIdx !== null) handleTouchBin("trash"); }}
                    className={`flex flex-col items-center px-6 py-2 cursor-pointer select-none rounded-xl border-2 transition-colors group
                      ${touching === "trash" ? "border-red-400 bg-red-100" : "border-red-300 bg-white hover:bg-red-50"}
                    `}
                  >
                    <Trash2 className="w-10 h-10 text-red-600 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-red-700 text-md">Trash Bin</span>
                  </div>
                </div>
              </>
            )}
            {state === "won" && (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-6xl mb-2"
                >
                  🏆
                </motion.div>
                <div className="text-green-800 font-black text-2xl mb-3">
                  You sorted waste correctly! Earth is cleaner!
                </div>
                <Button onClick={restart} variant="default">Play Again</Button>
              </div>
            )}
            {state === "lost" && (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-6xl mb-2"
                >
                  😢
                </motion.div>
                <div className="text-red-800 font-black text-2xl mb-3">
                  Too many sorting mistakes! Try again to help the planet!
                </div>
                <Button onClick={restart} variant="destructive">Try Again</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SustainabilityChallenge;
