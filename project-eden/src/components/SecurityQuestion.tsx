import { useState, useEffect } from 'react'
import { Bubble, Button } from 'pixel-retroui'
import { motion, AnimatePresence } from 'framer-motion'

interface SecurityQuestionProps {
  onComplete: () => void;
}

const SecurityQuestion = ({ onComplete }: SecurityQuestionProps) => {
  const question = "¿Cuál es la banda favorita de Mikey?"
  const answers = [
    { text: "Green Day", color: "#f60e04" },
    { text: "Cuarteto de Nos", color: "#a6bbb9" },
    { text: "Weezer", color: "#008FC4" },
    { text: "The Cranberries", color: "#835e4c" }
  ]
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [fadeOut, setFadeOut] = useState<boolean>(false)
  const [shake, setShake] = useState<boolean>(false)
  const [jump, setJump] = useState<boolean>(false)
  const [buttonColors, setButtonColors] = useState<string[]>(answers.map(answer => answer.color))

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        onComplete()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [fadeOut, onComplete])

  const handleAnswerClick = (answer: string, index: number) => {
    if (answer === "Weezer") {
      setSelectedAnswer("¡Acertaste!")
      setButtonColors(prevColors => prevColors.map((color, i) => i === index ? "green" : color))
      setJump(true)
      setTimeout(() => {
        setFadeOut(true)
      }, 1000)
    } else {
      setSelectedAnswer("Error, inténtalo de nuevo")
      setButtonColors(prevColors => prevColors.map((color, i) => i === index ? "red" : color))
      setShake(true)
      setTimeout(() => {
        setShake(false)
        setSelectedAnswer(null)
        setButtonColors(answers.map(answer => answer.color))
      }, 3000)
    }
  }

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          className={`min-h-screen bg-black flex flex-col items-center justify-center p-4 ${shake ? 'shake' : ''} ${jump ? 'jump' : ''}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <Bubble
            direction="left"
            bg="white"
            textColor="black"
            borderColor="#2D2D30"
            className="p-4 text-center w-full max-w-md md:max-w-lg lg:max-w-xl"
          >
            <h2 className="text-lg mb-4">Primero que nada una pregunta de seguridad.</h2>
            <h2 className="text-lg mb-4">{question}</h2>
          </Bubble>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full max-w-md md:max-w-lg lg:max-w-xl">
            {answers.map((answer, index) => (
              <Button
                key={index}
                className="w-3/4 mx-auto"
                bg={buttonColors[index]}
                textColor="white"
                borderColor="#2D2D30"
                onClick={() => handleAnswerClick(answer.text, index)}
              >
                {answer.text}
              </Button>
            ))}
          </div>
          {selectedAnswer && <p className="mt-4 text-white">{selectedAnswer}</p>}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SecurityQuestion