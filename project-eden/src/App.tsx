import { useState } from 'react'
import './App.css'
import SecurityQuestion from './components/SecurityQuestion'

function App() {
  const [showSecurityQuestion, setShowSecurityQuestion] = useState(true)

  const handleSecurityQuestionComplete = () => {
    setShowSecurityQuestion(false)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {showSecurityQuestion && <SecurityQuestion onComplete={handleSecurityQuestionComplete} />}
    </div>
  )
}

export default App