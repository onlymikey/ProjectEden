import { useState } from 'react'
import './App.css'
import SecurityQuestion from './components/SecurityQuestion'
import TextPresentation from './components/TextPresentation'
import MacOSTerminal from './components/Terminal'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [showSecurityQuestion, setShowSecurityQuestion] = useState(true)
  const [showTextPresentation, setShowTextPresentation] = useState(false)
  const [showTerminalController, setShowTerminalController] = useState(false)

  const handleSecurityQuestionComplete = () => {
    setShowSecurityQuestion(false)
    setTimeout(() => {
      setShowTextPresentation(true)
    }, 2000) // Espera a que la animación de fade out termine
  }

  const handleTextPresentationComplete = () => {
    setShowTextPresentation(false)
    setTimeout(() => {
      setShowTerminalController(true)
    }, 500) // Espera a que la animación de fade out termine
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <AnimatePresence>
        {showSecurityQuestion && <SecurityQuestion onComplete={handleSecurityQuestionComplete} />}
        {showTextPresentation && <TextPresentation onComplete={handleTextPresentationComplete} />}
        {showTerminalController && <MacOSTerminal />}
      </AnimatePresence>
    </div>
  )
}

export default App