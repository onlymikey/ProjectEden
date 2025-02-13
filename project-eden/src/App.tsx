import { useState } from 'react'
import './App.css'
import SecurityQuestion from './components/SecurityQuestion'
import TextPresentation from './components/TextPresentation'
import MacOSTerminal from './components/Terminal'
import FinalButtons from './components/FinalButtons'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [showSecurityQuestion, setShowSecurityQuestion] = useState(true)
  const [showTextPresentation, setShowTextPresentation] = useState(false)
  const [showTerminalController, setShowTerminalController] = useState(false)
  const [showFinalButtons, setShowFinalButtons] = useState(false)

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

  const handleTerminalComplete = () => {
    setShowTerminalController(false)
    setTimeout(() => {
      setShowFinalButtons(true)
    }, 500) // Espera a que la animación de fade out termine
  }

  const handleReplay = () => {
    setShowFinalButtons(false)
    setTimeout(() => {
      setShowSecurityQuestion(true)
    }, 500) // Espera a que la animación de fade out termine
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center"> 
      <AnimatePresence>
        {showSecurityQuestion && <SecurityQuestion onComplete={handleSecurityQuestionComplete} />}
        {showTextPresentation && <TextPresentation onComplete={handleTextPresentationComplete} />}
        {showTerminalController && <MacOSTerminal onComplete={handleTerminalComplete} />}
        {showFinalButtons && <FinalButtons onReplay={handleReplay} />}
      </AnimatePresence>
    </div>
  )
}

export default App