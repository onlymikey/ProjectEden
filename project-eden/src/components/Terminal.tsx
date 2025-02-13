import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MacOSTerminal({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>(["Loading valentines gift..."]);
  const [currentLine, setCurrentLine] = useState<number>(0); // Índice de la línea actual
  const [currentChar, setCurrentChar] = useState<number>(0); // Índice del carácter actual
  const [isInitialDelay, setIsInitialDelay] = useState<boolean>(true); // Para manejar el retraso inicial
  const [isCooldown, setIsCooldown] = useState<boolean>(false); // Para manejar el cooldown entre líneas
  const [showContinueButton, setShowContinueButton] = useState<boolean>(false); // Mostrar botón de "Continue"
  const [fadeOut, setFadeOut] = useState<boolean>(false); // Manejar el desvanecimiento

  useEffect(() => {
    const messages = [
      "",
      "Hello, Diana. This is the project I've been working on lately.",
      "I know I've been a bit secretive about this, but there was a reason.",
      "This isn't just any project. It's something I made especially for you.",
      "So, what do you think? Did you expect it to be for you? Or did I surprise you? :D",
      "I also hope you liked the letter. I put a lot of thought into it because you truly deserve something special. <3",
      "Thank you for spending so much time with me, it's honestly my favorite thing to do.",
      "And thank you for putting up with my friends, they're not always the easiest, I know. D:",
      "Even though I couldn't go out with you today, I still wanted to do something special for this day.",
      "I hope you like it.",
      "This might not be the most conventional project, but it's the one I poured my heart into.",
      "I hope it makes you smile, because that's all I really want. :)",
      "You mean a lot to me, Diana. And this is my way of showing it.",
      "Thank you for being the amazing person you are. TQM <3",
    ];

    const typeCharacter = () => {
      if (isCooldown) return;

      const currentMessage = messages[currentLine] || ""; // Mensaje actual
      if (currentChar < currentMessage.length) {
        setLines((prevLines) => {
          const updatedLines = [...prevLines];
          if (!updatedLines[currentLine]) updatedLines[currentLine] = ""; // Inicializar línea si no existe
          updatedLines[currentLine] += currentMessage[currentChar];
          return updatedLines;
        });
        setCurrentChar((prev) => prev + 1);
      } else if (currentLine < messages.length - 1) {
        setIsCooldown(true);
        setTimeout(() => {
          setIsCooldown(false);
          setCurrentLine((prev) => prev + 1);
          setCurrentChar(0);
        }, 2000); // Cooldown de 2 segundos
      }
    };

    if (isInitialDelay) {
      const delayTimer = setTimeout(() => {
        setLines((prev) => [...prev, ""]);
        setIsInitialDelay(false);
      }, 2000);
      return () => clearTimeout(delayTimer);
    }

    const interval = setInterval(typeCharacter, 50); // 50 ms por carácter
    return () => clearInterval(interval);
  }, [currentChar, currentLine, isInitialDelay, isCooldown]);

  // Mostrar el botón "Continue" después de 80 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContinueButton(true);
    }, 80000); // 80 segundos
    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    setFadeOut(true); // Iniciar desvanecimiento
    setTimeout(() => {
      onComplete(); // Notificar que el componente ha terminado
    }, 500); // Duración del desvanecimiento
  };

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[600px] rounded-lg shadow-xl bg-gray-800 overflow-hidden border border-gray-700"
        >
          {/* Barra de título */}
          <div className="bg-gray-800 px-4 py-2 flex items-center">
            <div className="flex space-x-2 flex-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm text-gray-400">Happy Valentines Day &lt;3! </div>
            <div className="flex-1"></div>
          </div>

          {/* Área de la terminal */}
          <div className="p-4 overflow-y-auto font-mono text-sm text-green-400 bg-gray-900 h-auto">
            {lines.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>

          {/* Botón "Continue" */}
          {showContinueButton && (
            <div className="p-4 flex justify-center bg-gray-800">
              <button
                onClick={handleContinue}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Continue
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}