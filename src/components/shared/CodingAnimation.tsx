
"use client";

import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const codeLines = [
  { text: "class ProgrammerProfile {", color: "text-purple-400 dark:text-purple-300" },
  { text: '    String name = "Your Name Here";', color: "text-pink-400 dark:text-pink-300" },
  { text: '    String role = "Programmer, Front-End Developer, Full-Stack, UI/UX Designer";', color: "text-pink-400 dark:text-pink-300" },
  { text: '    String focus = "Building Awesome Web Apps";', color: "text-pink-400 dark:text-pink-300" },
  { text: " ", color: "" },
  { text: "    void displayFocus() {", color: "text-purple-400 dark:text-purple-300" },
  { text: "        System.out.println(this.focus);", color: "text-sky-400 dark:text-sky-300" },
  { text: "    }", color: "text-purple-400 dark:text-purple-300" },
  { text: "}", color: "text-purple-400 dark:text-purple-300" },
  { text: " ", color: "" },
  { text: "public class Main {", color: "text-purple-400 dark:text-purple-300" },
  { text: "    public static void main(String[] args) {", color: "text-purple-400 dark:text-purple-300" },
  { text: "        ProgrammerProfile dev = new ProgrammerProfile();", color: "text-pink-400 dark:text-pink-300" },
  { text: "        dev.displayFocus();", color: "text-sky-400 dark:text-sky-300" },
  { text: "    }", color: "text-purple-400 dark:text-purple-300" },
  { text: "}", color: "text-purple-400 dark:text-purple-300" },
  { text: " ", color: "" },
  { text: "// Output:", color: "text-slate-500 dark:text-slate-400 opacity-70 italic" },
  { text: "> Building Awesome Web Apps", color: "text-emerald-400 dark:text-emerald-300" }
];

export function CodingAnimation() {
  const [currentLines, setCurrentLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorBlinkInterval);
  }, []);

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      const currentFullLine = codeLines[lineIndex].text;
      if (charIndex < currentFullLine.length) {
        const timeoutId = setTimeout(() => {
          setCurrentLines(prev => {
            const linesCopy = [...prev];
            if (!linesCopy[lineIndex]) {
              linesCopy[lineIndex] = '';
            }
            linesCopy[lineIndex] += currentFullLine[charIndex];
            return linesCopy;
          });
          setCharIndex(charIndex + 1);
        }, 30 + Math.random() * 35); 
        return () => clearTimeout(timeoutId);
      } else {
        const lineDelay = codeLines[lineIndex].text.startsWith("// Output:") || codeLines[lineIndex].text.startsWith(">") ? 300 : 100;
        const lineFinishedTimeout = setTimeout(() => {
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, lineDelay);
        return () => clearTimeout(lineFinishedTimeout);
      }
    } else {
      const restartTimeout = setTimeout(() => {
        setCurrentLines([]);
        setLineIndex(0);
        setCharIndex(0);
      }, 10000); 
      return () => clearTimeout(restartTimeout);
    }
  }, [lineIndex, charIndex]);

  return (
    <div className={cn(
      "font-code text-xs sm:text-sm overflow-hidden min-h-[280px] sm:min-h-[300px] p-4 sm:p-6 w-full",
      "bg-neutral-900 dark:bg-neutral-950 rounded-lg border border-white/10 dark:border-white/15 shadow-xl dark:shadow-2xl"
    )}>
      <pre className="whitespace-pre-wrap text-left">
        {codeLines.map((line, idx) => (
          <div key={idx} className="relative min-h-[1.5em]">
            <span className={line.color}>
              {currentLines[idx]?.substring(0, line.text.length) || (lineIndex > idx ? line.text : '')}
            </span>
            {lineIndex === idx && charIndex <= (line.text).length && showCursor && (
               <span
                className={cn(
                  "absolute inline-block w-[0.55em] h-[1.25em] -mb-[0.15em] ml-[1px]", 
                  "bg-orange-400 dark:bg-primary", 
                )}
                style={{ left: `${(currentLines[idx]?.length || 0) * 0.605}em` }} 
              />
            )}
          </div>
        ))}
      </pre>
    </div>
  );
}
